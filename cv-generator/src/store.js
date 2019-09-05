import { createStore } from 'redux';

const initialState = {
    bgImage: '',
    avatarImage: '',
}

const reducer = (state = initialState, action) => {
    
    if(action.type === "CROP_BG"){
        return {
            ...state,
            bgImage: action.bgImage 
        };
    }

    if(action.type === "CROP_AVATAR"){
        return {
            ...state,
            avatarImage: action.avatarImage 
        };
    }
    
    return state;
};

export default createStore(reducer);