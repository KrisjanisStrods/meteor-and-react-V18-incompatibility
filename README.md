
# Weather App

Sample project to showcase meteor incompatibility with React V18
## Installation

1) Install npm dependencies

```
npm install
```
2) Add Meteor dependencies
```
meteor add reywood:publish-composite 
```
    
## Reproduce

1) Start the project;
2) Go to local host and open client side console and see that RENDER gets outputted 3 times;
3) Go to main.jsx and comment out working implementation with non working one and save;
```js
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';

// Previous Way of initializing react - WORKS CORRECTLY
// import { render } from 'react-dom';
// Meteor.startup(() => {
//   render(<App/>, document.getElementById('react-target'));
// });


// New way of initializing react in V18 - DOES NOT WORK CORRECTLY
import { createRoot } from 'react-dom';
Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  root.render(<App/>);
});
```

4) Observe that now on client side console RENDER gets infinitely spammed, indicating infinite component re-rendering;

## Console output with previous React implementation (RENDER gets outputted 3 times)
![Alt text](readmeAssets/working.png?raw=true "Working")

## Console output with new V18 implementation (RENDER gets spammed)
![Alt text](readmeAssets/not_working.png?raw=true "Not Working")
