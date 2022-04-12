import * as types from '../actions/actionType';
import axios from 'axios';

const initialState = {
    zip : '',
    contactinfo : '',
    typeLost : false,
    content : '',
    title : '',
    date : '',
    posts : [],
    eventtype : '',
    searchOrPost: 'search',
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
            contactinfo: action.payload,
          }
        
        }
        case types.LOST_OR_FOUND:{
          return {
            ...state,
            eventtype: action.payload,
          }
        
        }
        //make a post button action type
        case types.POST_BUTTON_CLICK:{
          return {
            ...state,
            searchOrPost: action.payload
          }
        }
        
      case types.SEARCH_ZIP:{

        return {
          ...state,
          zipcode: '',
          title: '',
          content: '',
          contactinfo: '',
          eventtype: '',
          posts: action.payload
        }
        break;
      }
        //make a post button action type

      case types.CREATE_POST:{
      //dispatched from post

        return {
          ...state,
          zipcode: '',
          title: '',
          content: '',
          contactinfo: '',
          eventtype: '',
          posts: action.payload
        }
        break;
      }
      default: {
        return state
      }
    }
  };
  export default postReducer;
