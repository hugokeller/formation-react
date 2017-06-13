import React, { Component } from 'react';
import { Link } from 'react-router';
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
                            <li><Link to="/user">Liste des utilisateurs</Link></li>
                            <li><Link to="/info">Autres informations</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/login">Se connecter</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}
        </div>
    );
  }
}
export default App;