// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, browserHistory, hashHistory } from 'react-router';




// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941


// // Layout
// import ExampleLayout from 'layout/example';

// // UI
// import ExampleComponent from 'ui/example';

// const Site = (

//     <Router history={hashHistory}>
//       <Route component={ExampleLayout}>
//         <Route path="/" component={ExampleComponent} />
//       </Route>
//     </Router>

// );

// render(Site, document.getElementById('app'));



const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: 
      return state;
  }
}

const createStore = (reducer) => {
  let state;
  let listeners = [];
  
  const getState = () => state;
  
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  
  dispatch({});
  
  return { getState, dispatch, subscribe };
};

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});







