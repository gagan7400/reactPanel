import { useContext } from "react"
import { usersData } from "../App"
import { middcontext } from "./Midd";

export default function Child() {
    let data = useContext(usersData);
    let midddata = useContext(middcontext);
    return (

        <div className='bg-info p-5 m-auto w-75 border'>
            <h4> Child Comp hello new data</h4>
            <h5>midd context : {midddata}</h5>
            {data.users[0].name}
            <button onClick={() => { data.setUsers([{ name: "rajesh" }]) }}>update</button>
        </div>
    )
}
