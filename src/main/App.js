import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Accueil</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Liste des utilisateurs</a></li>
                            <li><a href="#">Autres informations</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Se connecter</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}
export default App;