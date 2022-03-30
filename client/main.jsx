import React from 'react';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';

// Previous Way of initializing react - WORKS
import { render } from 'react-dom';
Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});


// New way of initializing react in V18 - DOES NOT WORK
// import { createRoot } from 'react-dom';
// Meteor.startup(() => {
//   const root = createRoot(document.getElementById('react-target'));
//   root.render(<App/>);
// });