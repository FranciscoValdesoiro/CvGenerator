import { createStore } from 'redux';
import img from './assets/img/avatar.png'

const initialState = {
    bgImage: '',
    avatarImage: img,
    name: 'Mike Walton',
    job: 'Full Stack Developer'
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

    if(action.type === "CHANGE_NAME"){
        return {
            ...state,
            name: action.name 
        };
    }

    if(action.type === "CHANGE_JOB"){
        return {
            ...state,
            job: action.job 
        };
    }
    
    return state;
};

export default createStore(reducer);