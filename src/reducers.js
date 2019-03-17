import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
    //setting the state
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) =>{
    //takes the state and what ever action just happened, actions are just objects
    switch(action.type){
        //check the action type
        case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField: action.payload});
        //create a new object, add everything from state and update the searchFeild with action.payload
        //you must pass the searchField as an object
        default:
        return state;
    }
}

const initialStateRobots ={
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
        return Object.assign({}, state, { isPending: true})
        //return an empty object with state, and new state isPending
        case REQUEST_ROBOTS_SUCCESS:
        return Object.assign({}, state, {robots: action.payload, isPending: false})
        //return an empty object with state, payload of the robots, and isPending state
        case REQUEST_ROBOTS_FAILED:
        return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
        return state;
    }
}