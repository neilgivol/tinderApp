import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2';


class MatchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: this.props.users,
            newusers: [],
            couter: 0, 
            gender: this.props.match.params.gender,
            min: this.props.match.params.min,
            max: this.props.match.params.max
        }
      
    }

    handleClick = () => {
        if (this.state.couter>= this.state.newusers.length-1) {
            Swal.fire({
                title: "Error",
                text: "no more profiles",
                icon: "error",
              });
        }
        else
        {
            this.setState({
                couter: this.state.couter+1
            });
        }
      }

      filtArr = () => {
            for (let i = 0; i < this.state.users.length; i++) {
                const element = this.state.users[i];
                const minAge = this.state.min;
                const maxAge = this.state.max;
                const genderProfile = this.state.gender;
                if (element.Age >= minAge && element.Age <= maxAge && element.Gender.trim() == genderProfile) {
                    this.state.newusers.push(element);
                }
            }

             this.setState({
                 newusers:this.state.newusers
             });
             if(this.state.newusers.length == 0){
                Swal.fire({
                    title: "Error",
                    text: "no more profiles",
                    icon: "error",
                    timer:13000
                  });
                  this.props.history.push({
                    pathname: "/Search",
                    });
            }
      }

      componentWillMount() {
       this.filtArr();
        }
        
        func1 = () =>{
            let temp = this.state.newusers[this.state.couter].Premium;
            
            if (temp.includes("false")){
                return null;
            }
            else{
                return <p>hobbies: {this.state.newusers[this.state.couter].Hobbies}</p>;
            }

        }
      
       
    render() {
        return (
            <div>
                <div className='card MatchProfiles' style={{ width: '18rem',border: '1px solid black' }}>
                    <img className="card-img-top" src={this.state.newusers[this.state.couter].Image} />
                    <div className='card-body'>
                        <h3 className='card-title'>{this.state.newusers[this.state.couter].Name}</h3>
                        <p className='card-text'>
                            age: {this.state.newusers[this.state.couter].Age}
                            <br />
                            gender: {this.state.newusers[this.state.couter].Gender}
                            <br />
                            city: {this.state.newusers[this.state.couter].City}
                            <br />
                            height: {this.state.newusers[this.state.couter].Height}
                            <br />
                            {this.func1()} 
                            <br /> 
                        </p>
                        <button className="myButton" onClick={() => {this.props.AddFavorite(this.state.newusers[this.state.couter].Id); this.handleClick();}}>Like</button>
                        <button className="myButton" onClick={this.handleClick}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MatchPage);