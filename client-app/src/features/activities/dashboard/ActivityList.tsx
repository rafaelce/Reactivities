import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((acitivity) => (
          <Item key={acitivity.id}>
            <Item.Content>
              <Item.Header as="a">{acitivity.title}</Item.Header>
              <Item.Meta>{acitivity.date}</Item.Meta>
              <Item.Description>
                <div>{acitivity.description}</div>
                <div>
                  {acitivity.city}, {acitivity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(acitivity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => deleteActivity(acitivity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={acitivity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
