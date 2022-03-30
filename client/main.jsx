import React from 'react';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';

// Previous Way of initializing react - WORKS CORRECTLY
import { render } from 'react-dom';
Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});


// New way of initializing react in V18 - DOES NOT WORK CORRECTLY
// import { createRoot } from 'react-dom/client';
// Meteor.startup(() => {
//   const root = createRoot(document.getElementById('react-target'));
//   root.render(<App/>);
// });