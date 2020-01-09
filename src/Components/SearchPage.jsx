import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../CssFiles/style.css';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            max: '',
            min: '',
            gender: '',
            size: '',
            users: this.props.usersArr
        }
    }


    Change1 = (e) => {
        this.setState({
            gender: e.target.value,
            size: e.target.value
        });
        console.log(this.state.gender);
    }

    Change2 = (e) => {
        this.setState({ min: e.target.value });
        console.log(this.state.min);
    }
    Change3 = (e) => {
        this.setState({ max: e.target.value });
        console.log(this.state.max);
    }

    funcSerch = () => {
        const gend = this.state.gender;
        const minProf = this.state.min;
        const maxProf = this.state.max;
        const newArr = [];
        if (gend == "" || minProf == "" || maxProf == "") {
            // Swal.fire({
            //     title: "Error",
            //     text: "Not All inserts",
            //     icon: "error",
            // });
            alert("no insert");
        }
        else {
            for (let i = 0; i < this.state.users.length; i++) {
                const element = this.state.users[i];
                if (element.Age >= minProf && element.Age <= maxProf && element.Gender.trim() == gend) {
                    newArr.push(element);
                }
            }
            if (newArr.length == 0) {
                // Swal.fire({
                //     title: "Error",
                //     text: "Not have Profiles, Change Ages or Gender",
                //     icon: "error",
                // });
                alert("o users");
                
            }
            else {
                this.props.history.push({
                    pathname: '/Match/' + gend + '/' + minProf + '/' + maxProf + '/',
                    state: { newArr: newArr }
                });
            }
        }
    }

    render() {
        return (
            <div className='Serachp container'>
                <form id='SearchForm' onSubmit={this.sendDataSomewhere}>
                    <div>
                        <label>Choose Partner Gender:</label>
                    </div>
                    <div className='gender'>
                        <input onChange={this.Change1} data-icon='' checked={this.state.size === "male"} id="male" name="name" type="radio" value="male" required />
                        <input onChange={this.Change1} data-icon='' checked={this.state.size === "female"} id="female" name="name" type="radio" value="female" required />
                    </div>
                    <div>
                        <label>Choose partner age:</label>
                    </div>
                    <div className='age col-12'>
                        <span>between </span><input className='css-input' id="min" name="min" value={this.state.min} onChange={this.Change2} type="number" required /><br />
                        <span>and </span><input className='css-input' id="max" name="max" value={this.state.max} onChange={this.Change3} type="number" required />
                    </div>
                    <button onClick={this.funcSerch} className="myButton" id="Search">Search</button>
                </form>
            </div>
        );
    }

}

export default withRouter(SearchPage);