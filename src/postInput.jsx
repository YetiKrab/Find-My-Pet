import React from 'react';
import axios from 'axios';

function PostInput(props){
    
    function addPost(){
        axios.post('/pet', {
            zipcode: props.zip,
            title: props.title,
            content: props.content,
            contactinfo: props.contactinfo,
        })
        .then(resp => {
            return props.searchZip(resp.data)
        })
        .catch(err => console.log(err))

        props.postButton('search');
    }

//      axios.post('/login', {
//   firstName: 'Finn',
//   lastName: 'Williams'
// })
// .then((response) => {
//   console.log(response);
// }, (error) => {
//   console.log(error);
// });
    return(
     <div id='postInput'>
           <div id = "topGroup">
            <input id="postTitle" onChange={e => props.updateTitle(e.target.value)} placeholder="Provide a post title" type="text" size="20" required></input>
            <input id = "zipBar" onChange={e => props.updateZip(e.target.value)} placeholder = "Zip code" type="text" size = "10" required></input>
            <input id = "infoBar" onChange={e => props.updateContact(e.target.value)} placeholder = "Please provide contact info" type="text" size = "30" required></input>
            <select id="menuLF" onChange={e => props.updatePostType(e.target.value)} required>
                <option value="found">Found</option>
                <option value="lost">Lost</option>
            </select>
            </div>
            <div id = "contentbar">
              <input id = "postBar" onChange={e => props.updateContent(e.target.value)} placeholder = "Please tell us who you found or are looking for!" type="text" size = "118"></input>
            </div>
            
            <button type="submit" id="postbtn" onClick={() => addPost()}>Create a Lost or Found Post!</button> 

     </div>


    )
}

export default PostInput;