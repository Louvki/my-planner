export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'the dog',
            authorLastName: 'the log',
            authorId: 123,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((e) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', e });
        })
    }
};