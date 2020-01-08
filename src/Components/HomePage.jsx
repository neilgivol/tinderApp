import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import background from '../Images/background.jpg';

class HomePage extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div className="container-fluid HomePageCont" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),url(' + background + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'noRepeat',
                    height: '560px',
                    border: '1px black solid',
                }}>
                    <div className='row Homep'></div>
                    <div className='row enterClass'>
                        <Link to={'/Search'} ><button onClick={this.props.data} className="myButton" id="btnEnter">Enter</button></Link>
                    </div>
                </div>
            </div>

        );
    }
}
export default withRouter(HomePage);