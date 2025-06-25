import React, { Component } from 'react'
import Controlled from './Controlled'
import Card from './Card'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], update: false, updateid: null
        }
    }

    render() {
        let { data, update, updateid } = this.state;
        let updatedata = (p) => {
            this.setState({ data: [...data, p] })
        }
        let deletehandler = (id) => {
            let copy = data;
            copy.splice(id, 1);
            this.setState({ data: copy })
        }
        let edithandler = (id) => {
            this.setState({ update: true, updateid: id })
        }
        return (
            <div>
                <Controlled data={this.state.data} updatedata={updatedata} update={update} updateid={updateid} />
                <Card data={this.state.data} deletehandler={deletehandler} edithandler={edithandler} />
            </div>
        )
    }
}
