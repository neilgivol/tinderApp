import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage.jsx';
import SearchPage from './Components/SearchPage.jsx';
import LikeList from './Components/LikeList.jsx';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import findFlirt from './Images/findFlirt.png';
import homeButton from './Images/homeButton.png';
import MatchPage from './Components/MatchPage.jsx';
import Fav from './Images/Fav2.png';
import './CssFiles/style.css';

const background1 = require("./Images/background1.jpg");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      favorites: []
    }
    let local = false;
    this.apiUrl = 'http://localhost:51600/api/Users';
    if (!local) {
      this.apiUrl = 'http://proj.ruppin.ac.il/bgroup10/Mobile/server/api/Users';
    }
  }
  componentWillMount() {
    fetch(this.apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          result.map(st => this.state.users.push(st));
        },
        (error) => {
          console.log("err post=", error);
        });

  }
  addTofavorites() {
    fetch(this.apiUrl + '/fev', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          this.setState({ favorites: result });
        },
        (error) => {
          console.log("err post=", error);
        });
  }



  SendToFavorite = (id) => {
    //pay attention case sensitive!!!! should be exactly as the prop in C#!
    console.log(id);

    fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(id),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })

    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.Avg);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  render() {
    return (
      <div className='container allC' style={{
        border: '2px solid black',
        borderRadius: '4px',
        backgroundImage: 'url(' + background1 + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
      }}>
        <div className="row topHead">
          <div className='rightSide'>
          <Link to={'/like'} ><img src={Fav} onClick={this.addTofavorites()} /></Link>
          <Link to={'/'} ><img src={homeButton} /></Link>
          </div>
        </div>

        <div className="header" id="logo"><img className='picLog' src={findFlirt} /></div>
        <Switch>
          <Route exact path="/" >
            <HomePage data={this.btnFetchGetUsers} />
          </Route>
          <Route path="/Search">
            <SearchPage />
          </Route>
          <Route path="/Match/:gender/:min/:max" component={MatchPage}>
            <MatchPage users={this.state.users} AddFavorite={this.SendToFavorite} />
          </Route>
          <Route path="/like" >
            <LikeList faveroList={this.state.favorites} funcFavor={this.addTofavorites} />
          </Route>
        </Switch>

        <div className="footer">
          <p>
            &copy;2019 NAG All rights reserved.
         </p>
        </div>
      </div>

    );
  }

}
export default withRouter(App);