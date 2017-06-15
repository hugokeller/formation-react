import React, { Component } from 'react';
import { Link } from 'react-router';
import  {connect} from 'react-redux';
import {logout} from './actions/actions';
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
                        {
                            this.props.isConnected ?
                                <ul className="nav navbar-nav">
                                    <li><Link to="/user">Détail de l'utilisateur</Link></li>
                                    <li><Link to="/info">Autres informations</Link></li>
                                </ul> :
                                null
                        }
                        <ul className="nav navbar-nav navbar-right">
                            {
                                this.props.isConnected ?
                                    <li><Link to="/logout" onClick={() => this.props.dispatch(logout())}> Se déconnecter</Link></li> :
                                    <li><Link to="/login">Se connecter</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    isConnected: state.auth.isConnected
});
export default connect(mapStateToProps, null)(App);