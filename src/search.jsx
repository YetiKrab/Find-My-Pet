import React from 'react';
import axios from 'axios';

function Search(props){

    //async function getPosts(zipcode){
 function searchFunc(e){
     console.log('clicked search!');
     let url = '/pet/' + props.zip
     axios.get(url)
    .then(resp => {console.log('this is the response!', resp.data);
        return props.searchZip(resp.data)})
    .catch(err => console.log(err))
    }
 


        //const response = await axios.get({
    //      
    //         url: '/pet',
    //         headers: {'Content-Type' : 'application/json'},
    //         params: { zipcode: state.zipcode}
    //     })
    //      call searchZip passing in response
    //      updateZip(response)
    // }
    
    return(
     <div id = "searchContainer" >
        <div id = "searchAndButton">
            <input id = "searchBar" placeholder = "please enter a zip code" value = {props.zip} type="text" size = "30" onChange={e => props.updateZip(e.target.value)}></input>
            <button className="searchBtn" onClick={(e) => searchFunc(e)}>Search Area for Lost and Found Pets!</button> 
        </div>
        <div id = "btnPostCreator">
        <button  type = "button" className="srchbtn" onClick={props.postButton}>Create a Lost or Found Post!!!</button> 
        </div>
      

     </div>


    )
}

export default Search