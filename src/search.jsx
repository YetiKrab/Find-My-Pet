import React from 'react';

function Search(){
    
    return(
     <div>
        <form id = "searchAndButton" visibility = "vislible">
            <input id = "searchBar"  placeholder = "please enter a zip code" type="text" size = "10"></input>
            <button type = "submit">Search Area for Lost and Found Fets!</button> 
        </form>
        <div id = "openPostMaker">
        <button type = "button">Create a Lost or Found Post!!!</button> 
        </div>
      

     </div>


    )
}

export default Search