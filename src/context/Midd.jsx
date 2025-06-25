import React, { Component, createContext } from 'react'
import Child from './Child'
export let middcontext = createContext()
export default class Midd extends Component {
    render() {
        return (
            <div className='bg-secondary p-5 m-auto w-75 border'>
                <h4>Midd comp</h4>
                <middcontext.Provider value={"hello world"}>
                    <Child />
                </middcontext.Provider>
            </div>
        )
    }
}
