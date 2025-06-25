import { useEffect, useRef, useState } from "react";
let Func = () => {
    let con = useRef();
    let inp = useRef();
    let count = useRef(0);
    // it always give us an object with one key {current:''}
    let [n, setN] = useState(0);

    let submithandler = () => {
        con.current.style.color = "red"
        inp.current.value = con.current.value;
        console.log(con.current)
    }

    let inc = () => {
        count.current = count.current + 1
        alert(`you click ${count.current} times`)
    }
    let sum = (a, b) => {
        console.log(a + b)
    }
    console.log(con.current)
    // useEffect(()=>{
    // })
    return (
        <>
            {console.log("render")}
            <button onClick={inc}>inc {count.current}</button>
            <div className="d-flex px-4 flex-wrap justify-content-center gap-3 align-items-center" >
                <input type="text" ref={con} />
                <input type="text" ref={inp} />
                <button onClick={submithandler}>submit</button>
            </div>
        </>
    )
}
export default Func;