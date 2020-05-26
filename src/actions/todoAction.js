import {ADD_NEW_ITEM, DELETE_ITEM, UPDATE_ITEM} from "../actionType";


export const handleOnSubmitAction = (data)=> {
    return ({
        type : ADD_NEW_ITEM,
        payload : data
    })
}

export const deleteItemAction = (todoKey)=>{
    return {
        type : DELETE_ITEM,
        payload : todoKey
    }
}

export const updateItemAction = (todo) =>{
    return {
        type : UPDATE_ITEM,
        payload : todo
    }
}