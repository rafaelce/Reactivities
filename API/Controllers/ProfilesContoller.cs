using Application.Photos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProfilesContoller : BaseApiController
    {
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        => HandleResult(await Mediator.Send(new Details.Query { Username = username }));
    }
}