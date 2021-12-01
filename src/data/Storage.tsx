import React, { useReducer } from "react";

type State={
    name:string
    age:number
}

const valueInitial:State={
    name:'',
    age:0
}

type PropsContext={
    state:State
    dispatch:(action:Action)=>any
}

const DefaulValue={
    state:valueInitial,
    dispatch:()=>{}
}

type Action={
    type:string
    payload:any
}



export const Context= React.createContext<PropsContext>(DefaulValue)//Aqui cria o contexto

function reducer(state:State,action:Action):State
{
    switch(action.type)
    {
        case 'age':
            return {...state,age:action.payload}
        case 'name':
            return {...state,name:action.payload}
        default:
            return state
    }
}

export default function Storage(props:any)
{
    const [state,dispatch]=useReducer(reducer,valueInitial)  
    //O contexto vai precisar envolver toda a aplicacao para ser usado nos componentes
    return <Context.Provider value={{state,dispatch}}>{props.children}</Context.Provider>

}
