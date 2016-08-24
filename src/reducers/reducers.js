const getInitialState = {
	todos: []
}

export default function(state=getInitialState, action){
	switch (action.type){
		case 'INCREMENT':
		return {...state, todo:[...state.todos, ...actions.todos]}

		case 'DECREMENT':
		return {...state, todo:[...state.todos, ...actions.todos]}

		case default:
		return state;
	}
}