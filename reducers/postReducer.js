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
    eventtype : ''
    // postZip : '',
    // postContent : '',
    // postEvent : '',
    // postDate : '',
};

const postReducer = async (state = initialState, action) => {
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
      //dispatched from get
        const response = await axios.request({
          method: 'GET',
          url: '/pet',
          headers: {'Content-Type' : 'application/json'},
          params: {
            zipcode: state.zipcode
          }
        });
        console.log('this is the response from the server: ', response);
        return {
          ...state,
          posts: response
        }
      }
        //make a post button action type

      case types.CREATE_POST:{
      //dispatched from post
        const response = await axios.request({
          method: 'POST',
          url: '/pet',
          headers: {'Content-Type' : 'application.json'},
          data: {
            zipcode: state.zip,
            title: state.title,
            content: state.content,
            contactinfo: state.contactinfo,
          }
        });
        console.log('this is the response from the server', response);
        return {
          ...state,
          zipcode: '',
          title: '',
          content: '',
          contactinfo: '',
          posts: response

        }
      }
      default: {
        return state
      }
    }
  };
  export default postReducer;
