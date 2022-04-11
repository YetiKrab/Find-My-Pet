import React from 'react';
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
    contact : state.post.contact,
    typeLost : state.post.typeLost,
    content : state.post.content,
    title : state.post.title,
    date : state.post.date,
    posts : state.post.posts,
    searchOrPost : state.post.searchOrPost
  }
}


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

function MainContainer (props) {
  console.log('these are props in maincontianer', props)
  //if inputEvent is search we display a search feild, otherwise we show a post input field
    let inputEvent;
    if (props.searchOrPost === 'search') inputEvent = <Search zip = {props.zip} searchZip = {props.searchZip} update = {props.updateZip} postButton={props.postButton}/>
      else inputEvent = <PostInput {...props} />;

    return (
    <div className="container">
      {inputEvent}
      <PostContainer posts={props.posts} /> 
    </div>
    )
  }


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


