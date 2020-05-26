import {
    ADD_NEW_ITEM, DELETE_ITEM, UPDATE_ITEM
} from '../actionType';




const initialState = {
    items:[],
    currentItem:{
        text:'',
        key:''
    }
}


export default (state = initialState , {payload , type})=>{
    switch (type) {
        case ADD_NEW_ITEM : return {
            ...state,
            items : [...state.items , payload]
        }
        case UPDATE_ITEM : return {
            ...state,
            items : [...state.items.filter(item=>item.key!=payload.key) , payload]
        }
        case DELETE_ITEM : return {
            ...state,
            items: state.items.filter(item=>item.key!=payload)
        }
        default : return initialState;
    }
}