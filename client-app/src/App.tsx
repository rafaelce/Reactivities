import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  return (
    <div>
      <Header as="h2" icon="user" content="Reativities" />
      <List>
        {activities.map((activity: any) => (
          <li key={activity.name}>{activity.title}</li>
        ))}
      </List>
    </div>
  );
}

export default App;
