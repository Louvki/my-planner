// import ProjectDb from '../../db/ProjectDb'

const initState = {
    projects: [
        { id: 1, name: "test1" },
        { id: 2, name: "test2" },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':{
            console.log('creating project');
            return state;
        }
        case 'CREATE_PROJECT_ERROR': {
            console.log('CREATE_PROJECT_ERROR', action.err);
            return state;
        }
        default: {
            // console.log('Unhandled action', action.type);
            return state;
        }
    }
}

export default projectReducer;