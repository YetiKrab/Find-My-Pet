import React from 'react';

function Post({ title, content, contact, date, id, eventtype}){

//const { typeLost, title, content, contact, date } = props;
//type of post determines style color of div
  let postColor;
  if (eventtype === "found") postColor = '#b2ef91';
  else postColor = '#FF9292';
    
  return (
    <div className="post" style={{backgroundColor: postColor}}>
      {/* <p className="lostOrFound" value={eventtype}>THIS PET IS: {eventtype}</p> */}
      <h3 className="postTitle" value={title}>{title} </h3>
      <p className="postContent" value={content}>{content}</p>
      <p className="contact" value={contact}>Contact Info: {contact}</p>
      <p className="postDate" value={date}>Date: {date}</p>
    </div>
  )

}

export default Post;