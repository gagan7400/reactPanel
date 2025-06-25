import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    render() {
        let submithandler = (e) => {
            e.preventDefault();
            let user = e.target.username.value;
            let pass = e.target.password.value;
            let country = e.target.country.value;
            let married;
            let condition = [];
            e.target.married.forEach(element => {
                if (element.checked) {
                    married = element.value
                }
            });;
            e.target.condition.forEach(element => {
                if (element.checked) {
                    condition.push(element.value)
                }
            });;
            this.setState({ data: [...this.state.data, { username: user, password: pass, country: country, married, condition }] })

        }
        return (
            <div className='d-flex w-100 p-3 gap-3 '>
                <form className='w-75 m-auto p-5 mt-5 bg-info' onSubmit={submithandler}>
                    <div className="w-auto  px-2  mb-4 m-auto  d-flex flex-column gap-2 justify-content-evenly  ">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="px-1 py-2 rounded border-0 " name="username" />
                    </div>
                    <div className="w-auto  px-2 mb-4 m-auto  d-flex flex-column gap-2     justify-content-evenly  ">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="px-1 py-2 rounded border-0 " id="Password" name="password" />
                    </div>
                    <div className="w-auto  px-2 mb-4 m-auto  d-flex flex-column gap-2     justify-content-evenly  ">
                        <label htmlFor="Password">Country</label>
                        <select name="country" className="px-1 py-2 rounded border-0 "  >
                            <option value="india">india</option>
                            <option value="pak">pak</option>
                            <option value="usa">usa</option>
                            <option value="uk">uk</option>
                        </select>
                    </div>
                    <div className="w-auto  px-2 mb-4 m-auto  d-flex flex-column gap-2     justify-content-evenly  ">
                        <label htmlFor="Password">Married</label>
                        <div>
                            <input type="radio" name="married" value="yes" />Yes <br />
                            <input type="radio" name="married" value="no" />No</div>
                    </div>
                    <div className="w-auto  px-2 mb-4 m-auto  d-flex flex-column gap-2     justify-content-evenly  ">
                        <label htmlFor="Password">condition</label>
                        <div>
                            <input type="checkbox" name="condition" value="condition1" />condition1 <br />
                            <input type="checkbox" name="condition" value="condition2" />condition2
                        </div>
                    </div>
                    <input type="submit" name="submit" className='ms-2 btn btn-primary' value="login" />
                </form>

                <div className="d-flex justify-content-evenly flex-wrap p-3 gap-4 border w-100 m-auto">
                    {this.state.data.map((value, index) => {
                        return <div style={{ width: "fit-content" }} className="p-2 bg-info border  m-auto">
                            <p className='fs-5'>Username :- {value.username}</p>
                            <p>Password :- {value.password}</p>
                            <p>country :- {value.country}</p>
                            <p>married :- {value.married}</p>
                            <p>condition :- {value.condition}</p>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
