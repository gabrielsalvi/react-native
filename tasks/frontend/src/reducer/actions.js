export default {
    loadTasks: (state, action) => {
        return {
            ...state,
            tasks: action.payload,
        }
    },
    
    setModalVisibility: (state, action) => {
        return {
            ...state,
            showModalAddTask: action.payload
        }
    },

    setVisibleTasks: (state, action) => {
        return {
            ...state,
            visibleTasks: action.payload
        }
    },

    setDoneTasksVisibility: (state, action) => {
        return {
            ...state,
            showDoneTasks: action.payload
        }
    }
}