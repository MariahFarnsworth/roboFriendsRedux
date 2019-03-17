import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) =>({
    //returns an object, with a type and a payload of whatever the user enters
    type: CHANGE_SEARCH_FIELD,
    //constants are all caps
    payload: text
})

//async function to get robots
export const requestRobots = () => (dispatch) =>{
    //high order function, function that returns a function
    dispatch({type: REQUEST_ROBOTS_PENDING})
    //send out the action that the robots are pending, but no payload
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    //dispatch the type and payload which is the data from fetch
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
    //if there is an error dispatch the type and the error as the payload
}