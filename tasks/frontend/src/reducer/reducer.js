import actions from './actions';

const reducer = (state, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
};

export default reducer;