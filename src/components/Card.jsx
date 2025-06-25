import React from 'react'

function Card({ data, edithandler, deletehandler }) {
    return (
        <>
            <h3> Cards</h3>
            <div className="d-flex gap-4 flex-wrap w-100 p-5 border">
                {data.map((v, i) => (
                    <div className="w-25 border p-1">
                        <p> Email {v.email}</p>
                        <p> Password {v.password} </p>
                        <div className="box d-flex gap-3">
                            <button onClick={() => { edithandler(i) }} className='btn btn-secondary' >edit</button>
                            <button onClick={() => { deletehandler(i) }} className='btn btn-danger'>delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card