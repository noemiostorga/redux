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

/*
 * We will be explaining the code below
 * in the following lessons. For now,
 * feel free to click around and notice
 * how the current state tree is logged
 * to the console on every change.
 */

// const ADD_TODO = 'ADD_TODO';
// const TOGGLE_TODO = 'TOGGLE_TODO';
// const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// const Filters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// };

// /*
//  * Components
//  */

// class AddTodo extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type='text' ref='input' />
//         <button onClick={(e) => this.handleClick(e)}>
//           Add
//         </button>
//       </div>
//     );
//   }

//   handleClick(e) {
//     const node = this.refs.input;
//     const text = node.value.trim();
//     this.props.onAddClick(text);
//     node.value = '';
//   }
// }

// const FilterLink = ({ isActive, name, onClick }) => {
//   if (isActive) {
//     return <span>{name}</span>;
//   }

//   return (
//     <a href='#' onClick={e => { e.preventDefault(); onClick(); }}>
//       {name}
//     </a>
//   );  
// };

// const Footer = ({ filter, onFilterChange }) => (
//   <p>
//     Show:
//     {' '}
//     <FilterLink
//       name='All'
//       isActive={filter === Filters.SHOW_ALL}
//       onClick={() => onFilterChange(Filters.SHOW_ALL)} />
//     {', '}
//     <FilterLink
//       name='Completed'
//       isActive={filter === Filters.SHOW_COMPLETED}
//       onClick={() => onFilterChange(Filters.SHOW_COMPLETED)} />
//     {', '}
//     <FilterLink
//       name='Active'
//       isActive={filter === Filters.SHOW_ACTIVE}
//       onClick={() => onFilterChange(Filters.SHOW_ACTIVE)} />
//   </p>
// );

// const Todo = ({ onClick, completed, text }) => (
//   <li
//     onClick={onClick}
//     style={{
//       textDecoration: completed ? 'line-through' : 'none',
//       cursor: 'pointer'
//     }}>
//     {text}
//   </li>
// );


// const TodoList = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo {...todo}
//             key={todo.id}
//             onClick={() => onTodoClick(todo.id)} />
//     )}
//   </ul>
// );

// let nextTodoId = 0;
// const TodoApp = ({ dispatch, todos, visibilityFilter }) => {
//   let visibleTodos = todos;

//   switch (visibilityFilter) {
//   case Filters.SHOW_COMPLETED:
//     visibleTodos = todos.filter(todo => todo.completed);
//     break;
//   case Filters.SHOW_ACTIVE:
//     visibleTodos = todos.filter(todo => !todo.completed);
//   break;
//   }
  
//   return (
//     <div>
//       <AddTodo
//         onAddClick={text =>
//           dispatch({ type: ADD_TODO, text, id: nextTodoId++ })
//         } />
//       <TodoList
//         todos={visibleTodos}
//         onTodoClick={id =>
//           dispatch({ type: TOGGLE_TODO, id })
//         } />
//       <Footer
//         filter={visibilityFilter}
//         onFilterChange={filter =>
//           dispatch({ type: SET_VISIBILITY_FILTER, filter })
//         } />
//     </div>
//   );
// };

// /*
//  * Reducers
//  */

// const visibilityFilter = (state = Filters.SHOW_ALL, action) => {
//   switch (action.type) {
//   case SET_VISIBILITY_FILTER:
//     return action.filter;
//   default:
//     return state;
//   }
// }

// const todos = (state = [], action) => {
//   switch (action.type) {
//   case ADD_TODO:
//     return [...state, {
//       text: action.text,
//       id: action.id,
//       completed: false
//     }];
//   case TOGGLE_TODO:
//     return state.map(todo =>
//       todo.id === action.id ?
//         Object.assign({}, todo, { completed: !todo.completed }) :
//         todo
//     );
//   default:
//       return state;
//   }
// }

// const todoApp = Redux.combineReducers({
//   visibilityFilter,
//   todos
// });

// /*
//  ** Go!
//  */

// const store = Redux.createStore(todoApp);
// const dispatch = (action) => {
//   console.log('----------------');
//   console.log('dispatching action:');
//   console.log(action);
//   store.dispatch(action);
// }
// const render = () => {
//   ReactDOM.render(
//     <TodoApp
//       {...store.getState()}
//       dispatch={dispatch}
//     />,
//     document.getElementById('root')
//   );
// }
// render();
// store.subscribe(render);
// noprotect


const Counter = (state=0 , action) => {
  switch(action.type){
    case "ADD":
      return state + " add ";

    case "DELETE":
      return state + console.log("hey");

    default:
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(Counter);

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({type: "DELETE"})
})







