import { useContext } from "react"
import { Context } from "../data/Storage"

export default function ComponentView()
{
    const {state} =useContext(Context)
    return <>
            <p>Eu me chamo {state.name} e tenho {state.age} anos</p>
        </>
}