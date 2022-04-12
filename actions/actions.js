import * as types from './actionType';

 
export const updateZip = data => ({
    type: types.INPUT_ZIP,
    payload: data,
})
export const updateTitle = data => ({
    type: types.INPUT_TITLE,
    payload: data,
})
export const updateContent = data => ({
    type: types.INPUT_CONTENT,
    payload: data,
})

export const updateContact = data => ({
    type: types.INPUT_CONTACT,
    payload: data,
})
export const updatePostType = data => ({
    type: types.LOST_OR_FOUND,
    payload: data,
})

export const searchZip = data => ({
    type: types.SEARCH_ZIP,
    payload: data,
})

export const createPost = data => ({
  type: types.CREATE_POST,
  payload: data,
})

export const postButton = data => ({
    type: types.POST_BUTTON_CLICK,
    payload: data
})