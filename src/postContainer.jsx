import React, { useState } from 'react';
import Post from './post'

function PostContainer(props){
  //console.log('this is posts:', props.posts.data);
  //create loop to populate posts
  const singlePosts = [];
  // if (props.posts != singlePosts){
  for (let i = 0; i < props.posts.length; i += 1){
    singlePosts.push(<Post eventtype={props.posts[i].eventtype} title={props.posts[i].title} content={props.posts[i].content} contact={props.posts[i].contactinfo} date={props.posts[i].date} id={props.posts[i]._id} key={props.posts[i]._id}/>)
  }//typeLost={props.posts[i].eventtype}
  
  console.log('single posts:', singlePosts);




  return (
    <div className="postContainer">
      {singlePosts}
    </div>
  )
}

export default PostContainer;