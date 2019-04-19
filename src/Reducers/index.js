import {
    combineReducers
} from 'redux'
import secondState from './second.js'
import thirdState from './thirdState.js'

console.log(secondState);


const reducer = combineReducers({
    secondState,
    thirdState
})

export default reducer;