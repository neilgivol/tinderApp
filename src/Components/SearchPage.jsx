import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../CssFiles/style.css';

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            max: '',
            min: '',
            gender: '',
            size: ''
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
                            <span>between </span><input className='css-input' id="min" name="min" value={this.state.min} onChange={this.Change2} type="number" required/><br/>
                            <span>and </span><input className='css-input' id="max" name="max" value={this.state.max} onChange={this.Change3} type="number" required/>
                    </div>
                    <Link to={'/Match/' + this.state.gender + '/' + this.state.min + '/' + this.state.max + '/'}><button className="myButton" id="Search">Search</button></Link>
                </form>
            </div>
        );
    }

}

export default withRouter(SearchPage);