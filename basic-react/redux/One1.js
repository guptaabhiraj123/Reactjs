const {redux} = require('redux')

const initialState={
    car:50,
    bike:20,


}
//action
function buyCar(){
    return{
        type:'car',
        info:'my_first_redux'
    }
}
//reducer
const electronicReducer=(state =initialState,action)=>{
    switch(action.type){
        case 'car':
        return{
            totalcar:state,car-5
        }
        
        default:
            return state
    }
}