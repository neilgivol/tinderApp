import React, { Component } from 'react';
import Swal from 'sweetalert2';

class LikeList extends Component {
    constructor(props){
        super(props);

        this.state = {
            favorites : this.props.faveroList,
           counter: 0,
        }

    }
   
         func1 = () =>{
            let temp = this.state.favorites[this.state.counter].Premium;
            
            if (temp.includes("false")){
                return null;
            }
            else{
                return <p>hobbies: {this.state.favorites[this.state.counter].Hobbies}</p>;
            }
        }
        handleClick2 = () => {
            if(this.state.counter<=0)
            {
                Swal.fire({
                    title: "Error",
                    text: "Is the first profile",
                    icon: "error",
                  });
                
            }
            else {
                this.setState({
                    counter: this.state.counter-1
                });
            }   
            
        }

        handleClick = () => {
            
            if (this.state.counter>= this.props.faveroList.length-1) {
                Swal.fire({
                    title: "Error",
                    text: "No more profiles",
                    icon: "error",
                  });
                
            }
            else
            {
                this.setState({
                    counter: this.state.counter+1
                });
            }
          }
    render() {
        return (
                        
            <div>
                <div className='card MatchProfiles' style={{ width: '18rem',border: '1px solid black' }}>
                    <img className="card-img-top" src={this.state.favorites[this.state.counter].Image} />
                    <div className='card-body'>
                        <h3 className='card-title'>{this.state.favorites[this.state.counter].Name}</h3>
                        <p className='card-text'>
                            age: {this.state.favorites[this.state.counter].Age}
                            <br />
                            gender: {this.state.favorites[this.state.counter].Gender}
                            <br />
                            city: {this.state.favorites[this.state.counter].City}
                            <br />
                            height: {this.state.favorites[this.state.counter].Height}
                            <br />
                            {this.func1()} 
                            <br /> 
                        </p>
                        <div className='BackNext'>
                        <button className="myButton" onClick={this.handleClick2}>Back</button>
                        <button className="myButton" onClick={this.handleClick}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LikeList;