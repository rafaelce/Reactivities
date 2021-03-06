using System;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetActivities()
        => HandleResult(await Mediator.Send(new List.Query()));

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivities(Guid id)
                   => HandleResult(await Mediator.Send(new Detals.Query { Id = id }));

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        => HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        => HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
}