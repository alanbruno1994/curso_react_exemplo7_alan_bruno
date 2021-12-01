import { useContext } from "react"
import { Context } from "../data/Storage"

export default function ComponentInputAge()
{
    const {state,dispatch} =useContext(Context)
    return <>
            <input value={state.age} onChange={event=>dispatch({type:'age',payload:event.target.value})}></input>
        </>
}