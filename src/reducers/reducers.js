
const getInitialState = {
	tally: []
}

export default Tally = function(state=getInitialState, action){
	switch (action.type){
		case 'INCREMENT':
		return {...state, tally:[...state.tally, ...actions.tally]}

		case 'DECREMENT':
		return {...state, tally:[...state.tally, ...actions.tally]}

		case default:
		return state;
	}
}