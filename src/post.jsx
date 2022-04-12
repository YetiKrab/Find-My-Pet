import React from 'react';

function Post({ title, content, contact, date, id, eventtype}){

//const { typeLost, title, content, contact, date } = props;
//type of post determines style color of div
  let postColor;
  if (eventtype === "found") postColor = '#74b79d';
  else postColor = '#e8a598';
    
  return (
    <div className="post" style={{backgroundColor: postColor}}>
      {/* <p className="lostOrFound" value={eventtype}>THIS PET IS: {eventtype}</p> */}
      <h3 className="postTitle" value={title}>{title} </h3> <br />
      <p className="postContent" value={content}>{content}</p> <br />
      <p className="contact" value={contact}>Contact Info: {contact}</p> <br />
      <p className="postDate" value={date}>Date: {date}</p> <br />
    </div>
  )

}

export default Post;