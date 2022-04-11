import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import PostContainer from './postContainer.jsx';
import Search from './search.jsx';
import PostInput from './postInput.jsx';



const mapStateToProps = ({ props }) => ({
    zip : props.zip,
    contact : props.contact,
    typeLost : props.typeLost,
    content : props.content,
    title : props.title,
    date : props.date,
    posts : props.posts,
    searchOrPost : props.searchOrPost
  });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

function MainContainer (props) {
  //if inputEvent is search we display a search feild, otherwise we show a post input field
    let inputEvent;
    if (props.searchOrPost === 'search') inputEvent = <Search zip = {props.zip} searchZip = {props.searchZip} update = {props.updateZip} postButton={props.postButton}/>
      else inputEvent = <PostInput {...props} />;

    return (
    <div className="container">
      {inputEvent}
      <PostContainer posts={props.posts } /> 
    </div>
    )
  }


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


