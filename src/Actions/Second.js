import {
    createAction
} from 'redux-actions';


export const addNumber = createAction(
    'ADD_NUMBER',
    params => params
)


export const orginalAddNumber = (params) => (dispatch, getState) => console.log(params, dispatch, getState) ||
dispatch(
    createAction(
        'ORGINAL_ADD_NUMBER',
        () => params
    )
)