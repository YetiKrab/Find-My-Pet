import React from 'react';

function posts({}){

//type of post determines style color of div
  return (
    <div className="post" >
      <p className="lostOrFound" value={lostOrFound}></p>
      <p className="postDate" value={date}></p>
      <h3 className="postTitle" value={title}></h3>
      <p className="postContent" value={content}></p>
      <p className="contact" value={contactInfo}></p>
    </div>
  )

}