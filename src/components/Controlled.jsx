import React, { Component } from 'react'

export default class Controlled extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "", password: "",
        }
    }

    render() {
        let { email, password } = this.state;
        let { data, updatedata, updateid, update } = this.props;
        let submithandler = (e) => {
            e.preventDefault();
            updatedata({ email, password })
        }

        return (
            <div>
                <form onSubmit={submithandler} className='w-75 p-5 mt-5 mx-auto bg-secondary'>
                    <div className="form-group mb-4">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={email} name="email"
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                            className="form-control" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name='password' value={password}
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                            className="form-control" />
                    </div>
                    <button type="submit" className="mt-5 btn btn-primary"> Submit </button>
                </form>
            </div>
        )
    }
}
