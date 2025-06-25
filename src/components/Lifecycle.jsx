import React, { Component } from 'react'
export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = { count: true, index: 0 }
    }
    render() {
        let { count, index } = this.state;
        console.log("render")
        return (
            <div>
                <button onClick={() => { this.setState({ index: index + 1 }) }}>index :{index}</button>
                <h2> LifeCycle Component</h2>
            </div>
        )
    }
    componentDidMount() {
        console.log("did mount")
    }
    shouldComponentUpdate(newprop, newstate) {
        console.log("shouldComponentUpdate")
        if (this.state.index <= 10) {
            return true
        } else {
            return false
        }
    }
    componentDidUpdate(oldprop, oldstate) {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("unmounted")
    }
}
