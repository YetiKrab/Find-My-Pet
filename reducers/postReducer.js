import * as types from '../actions/actionType';

const initialState = {
    zip : '',
    contact : '',
    typeLost : false,
    content : '',
    title : '',
    date : '',
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
          }
        }
      case types.INPUT_TITLE:{
           return {
             ...state,
             title: action.payload,
           }
          }
      case types.INPUT_CONTENT:{
          return {
            ...state,
            content: action.payload,
          }
        }

        case types.INPUT_CONTACT:{
          return {
            ...state,
            input: action.payload,
          }
        
        }
        case types.LOST_OR_FOUND:{
          return {
            ...state,
            typeLost: action.payload,
          }
        
        }
        //make a post button action type
        case types.POST_BUTTON_CLICK:{
          return {
            ...state,
            searchOrPost: 'post'
          }
        }
        case types.SEARCH_ZIP:{
          return {
            ...state,
            //posts: info from get req?
          }
        }
        case types.CREATE_POST:{
          return {
            ...state,

          }
        //dispatched from post
        }



      
      
  
    default: {
        return state
      }
    }
  };
  
  export default postReducer;