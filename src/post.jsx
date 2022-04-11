import React from 'react';

function Posts({props}){

const { typeLost, title, content, contact, date } = props;
//type of post determines style color of div
    let postColor;
    if (typeLost === false) postColor = 'green';
    else postColor = 'red';
    
  return (
    <div className="post" style={{postColor}}>
      <p className="lostOrFound" value={typeLost}></p>
      <p className="postDate" value={date}></p>
      <h3 className="postTitle" value={title}></h3>
      <p className="postContent" value={content}></p>
      <p className="contact" value={contact}></p>
    </div>
  )

}

export default Posts;