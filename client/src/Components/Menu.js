import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import steamLoginImage from './../img/steam-login.png';
import menuLogo from './../img/menu-logo.png';

class Menu extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    // fetch('http://localhost:3001/api/GetUser')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((user) => {
    //     if (user) {
    //       console.log(user);
    //       this.setState({
    //         user: user
    //       });
    //     }
    //   });
  }

  render() {
    return(
      <div className="text-white">
        <div className="bg-gray-800 border-b border-gray-500">
          <div className="container mx-auto flex flex-row">
            <Link to="/">
              <div className="flex flex-row space-x-2 p-2">
                <img className="w-10 h-10" src={menuLogo} alt="header logo" />
                <div className="flex flex-col text-gray-300 hover:text-gray-100">
                  <div className="text-sm">Dead By Daylight Stats</div>
                  <div className="text-xs hidden lg:block lowercase">Leaderboards, Personal Stats, Guides</div>
                </div>
              </div>
            </Link>
            <div className="flex-1 ml-12 text-gray-200 tracking-wide">
              <div className="flex flex-row flex-none uppercase h-full text-sm">
                <Link className="table h-full" to="/mystats">
                  <div className="table-cell align-middle px-6 hover:text-yellow-400 hover:bg-gray-900 transition duration-200 ease-in-out">personal stats</div>
                </Link>
                <Link className="table h-full" to="/leaderboards">
                  <div className="table-cell align-middle px-6 hover:text-yellow-400 hover:bg-gray-900 transition duration-200 ease-in-out">Leaderboards</div>
                </Link>
                <Link className="table h-full" to="/characters">
                  <div className="table-cell align-middle px-6 hover:text-yellow-400 hover:bg-gray-900 transition duration-200 ease-in-out">Characters</div>  
                </Link>
                <Link className="table h-full" to="/perks">
                  <div className="table-cell align-middle px-6 hover:text-yellow-400 hover:bg-gray-900 transition duration-200 ease-in-out">Perks</div>  
                </Link>
                <Link className="table h-full" to="/offerings">
                  <div className="table-cell align-middle px-6 hover:text-yellow-400 hover:bg-gray-900 transition duration-200 ease-in-out">Offerings</div>
                </Link>
                <Link className="table h-full" to="/news">
                  <div className="table-cell align-middle px-6 hover:text-yellow-400 hover:bg-gray-900 transition duration-200 ease-in-out">News</div>
                </Link>
              </div>
            </div>
            <a className="flex-none m-auto" href="#">
              {
                (this.state.user != null) ? (
                  <div>hello, {this.state.user.name}</div>
                ) : (
                  <img src={steamLoginImage} alt="steam login"/>
                )
              }
              
            </a>
          </div>
        </div>
      </div>
    );
  } 
}

export default Menu;