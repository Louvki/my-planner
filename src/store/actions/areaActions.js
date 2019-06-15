export const createArea = (area) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_AREA', area });
    }
};