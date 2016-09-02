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

const counter = (state=0, action) => {
  switch(action.type){
    case "INCREMENT":
    return state + 1;

    case "DECREMENT":
    return state - 1;

    default:
    return state;
  }
}


const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1> {value}</h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
  </div>
);


const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: "INCREMENT"
          })
        }

        onDecrement = {() =>
          store.dispatch({
            type: "DECREMENT"
          })
        }
      />,
      document.getElementById('root')
    );
};


store.subscribe(render);
render();







