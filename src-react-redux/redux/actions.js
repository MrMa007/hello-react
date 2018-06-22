
import {INCREMENT,DECREMENT} from './action-types'
export const increment = (number) => ({type:INCREMENT,number})
export const decrement  = (number) => ({type:DECREMENT,number})

//异步
export const incrementAsync = number => dispatch => {
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
/*

export function incrementAsync(number){
    return function(dispatch){
        setTimeout(() =>{
            dispatch(increment(number))
        },1000)
    }
}*/
