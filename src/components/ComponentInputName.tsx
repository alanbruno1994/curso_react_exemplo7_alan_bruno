import { useContext } from "react"
import { Context } from "../data/Storage"

export default function ComponentInputName()
{
    const {state,dispatch} =useContext(Context)
    return <>
            <input value={state.name} onChange={event=>dispatch({type:'name',payload:event.target.value})}></input>
        </>
}