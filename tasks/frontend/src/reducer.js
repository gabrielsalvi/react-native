const reducer = (state, action) => {
    switch (action.type) {
        case "loadTasks":
            return loadTasks(state, action)
        case "setDoneTasksVisibility":
            return setDoneTasksVisibility(state, action)
        case "setModalVisibility":
            return setModalVisibility(state, action)
        case "setVisibleTasks":
            return setVisibleTasks(state, action)
        default:
            throw new Error();
    }
};

const loadTasks = (state, action) => {
    return {
        ...state,
        tasks: action.payload,
    }
}

const setModalVisibility = (state, action) => {
    return {
        ...state,
        showAddTaskModal: action.payload
    }
}


const setVisibleTasks = (state, action) => {
    return {
        ...state,
        visibleTasks: action.payload
    }
}

const setDoneTasksVisibility = (state, action) => {
    return {
        ...state,
        showDoneTasks: action.payload
    }
} 

export default reducer;