import React, {Component} from 'react';
import {connect} from 'react-redux';
//connect alows this componet to cconect to the data store
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import{setSearchField, requestRobots} from '../actions';

const mapStateToProps = state =>{
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
        //grabs the state from the reducers
    }
}
//recives a state, listens to state, returns object as props

const mapDispatchToProps = (dispatch)=>{
   return{
       onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    //on search change prop recives an event, when user types in search
    //then it will dispatch set Searchfeild action with the value of what th user enters
    //return returs everything in an object
    onRequestRobots: () => dispatch(requestRobots())
    //dispatches request robots which is a function, 
    //redux thunk will be used because a function is returned (requestRobots)
    //redux thunk will make it async
   }
}
//recives dispatch, which sends an action to reducer

class App extends Component{

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
         }) 
         return isPending ?
              <h1>Loading</h1>
         :
            (
                <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange= {onSearchChange}/>
                
                    <ErrorBoundry>
                         <CardList robots={filteredRobots}/>
                    </ErrorBoundry>  
              
                
                </div>
            );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//syntax when using connects, connect runs then then returns another function using App as arguement
// connect takes to arguements, 
//connect lets App know if there are any state changes, it connects the component to the store