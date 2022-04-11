import React from 'react';

function PostInput(){
    
    return(
     <div>
        <form id = "searchAndButton" visibility = "vislible">
            <input id = "zipBar"  placeholder = "please enter a zip code" type="text" size = "10"></input>
            <input id = "dateBar"  placeholder = "Date: mm/dd/yyyy" type="text" size = "15"></input>
            <input id = "infoBar"  placeholder = "Please provide contact info" type="text" size = "30"></input>
            <div>
              <input id = "postBar"  placeholder = "Please tell us who you found or are looking for!" type="text" size = "100"></input>
            </div>
            <select id="menuLF">
                <option value="found">Found</option>
                <option value="lost">Lost</option>
            </select>
            <button type = "submitPost" onClick={props.createPost}>Create a Lost or Found Post!!!</button> 
        </form>
        

     </div>


    )
}

export default PostInput;