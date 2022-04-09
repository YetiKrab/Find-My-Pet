import React, { useState } from 'react';
import Post from './post'

function PostContainer({posts}){

  //create loop to populate posts

  return (
    <div className="postContainer">
      < Posts />
      {/* {posts} */}
    </div>
  )
}

export default PostContainer;