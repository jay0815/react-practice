import {
    handleActions
} from 'redux-actions';
import {
    addNumber, orginalAddNumber
} from '../Actions/Second.js';

const initState = {
    testNumber: 1
}

const secondState = handleActions(
    new Map([
        // [
        //     addNumber,
        //     (state, action) => console.log(action.meta)
        //     || ({ testNumber: state.testNumber + action.payload })
        // ],
        [
            orginalAddNumber,
            (state, action) => ({ testNumber: state.testNumber + action.payload })
        ]
    ]), 
    initState
)

console.log(orginalAddNumber);


export default secondState