import React, { useState } from 'react';
import Post from './post'

function PostContainer({posts}){
  console.log('this is posts:', posts);
  //create loop to populate posts
  const singlePosts = [];
  posts.forEach(el => {
    singlePosts.push(<Posts typeLost={el.eventtype} title={el.title} content={el.content} contact={el.contactinfo} date={el.date} id={el._id}/>)
  })

  return (
    <div className="postContainer">
      {singlePosts}
    </div>
  )
}

export default PostContainer;