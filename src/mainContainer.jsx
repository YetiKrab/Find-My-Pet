//import React from 'react';
const React = require('react');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import PostContainer from './postContainer.jsx';
import Search from './search.jsx';
import PostInput from './postInput.jsx';

// const resolveStateFunction = (state) =>{
//   return Promise.resolve(state);
// }

const mapStateToProps = ( state ) => {
  console.log('these are props in mapstatetoprops', state);
  return {
    zip : state.post.zip,
    contactinfo : state.post.contactinfo,
    eventtype : state.post.eventtype,
    content : state.post.content,
    title : state.post.title,
    date : state.post.date,
    posts : state.post.posts,
    searchOrPost : state.post.searchOrPost
  }
}


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

function MainContainer (props) {
  console.log('these are props in maincontainer', props)
  //if inputEvent is search we display a search field
    let inputEvent;
    if (props.searchOrPost === 'search') inputEvent = <Search zip = {props.zip} searchZip = {props.searchZip} updateZip = {props.updateZip} postButton={props.postButton}/>
    // otherwise we show a post input field
      else inputEvent = <PostInput {...props} />;

    return (
    <div c></div>
    <div className="container">
      {inputEvent}
      <PostContainer posts={props.posts} /> 
    </div>
    )
  }


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


