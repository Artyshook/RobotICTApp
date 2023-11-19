import React from 'react';
import ReactDOM from 'react-dom';
import {RobotICTApp} from "../../ui/pages/RobotICTApp";

Meteor.startup(() => {
    ReactDOM.render(<RobotICTApp />, document.getElementById('react-target'));
});
