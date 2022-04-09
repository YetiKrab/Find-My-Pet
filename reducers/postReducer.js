import * as types from '../actions/actionTypes';

const initialState = {
    zip : '',
    contact : '',
    typeLost : false,
    content : '',
    title : '',
    posts : [],
    searchOrPost : 'search'
    // postZip : '',
    // postContent : '',
    // postEvent : '',
    // postDate : '',


};


const postReducer = (state = initialState, action) => {
    let post;
    switch (action.type) {
      case types.INPUT_ZIP:{
        return {
            ...state,
            zip: action.payload,
          };}
         }
    
         case types.INPUT_TITLE:{
        
        }

        case types.INPUT_CONTENT:{
        
        }

        case types.INPUT_CONTACT:{
        
        }
        case types.LOST_OR_FOUND:{
        
        }
        case types.SEARCH_ZIP:{
        //dispatched from get
        }
        //make a post button action type

        case types.CREATE_POST:{
        //dispatched from post
        }



      
      
  
    default: {
        return state
      }
    }
  };
  
  export default postReducer;