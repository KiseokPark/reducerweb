import * as types from '../actions/ActionTypes';

const initialState = {
    color : [255, 255, 255]
};

export default function (state = initialState, action){
    if(action.type === types.SET_COLOR){ // == 보다 === 이 더 엄격하게 check 한다.
        return {
            color : action.color
        }
    }
    else{
        return state;
    }

}