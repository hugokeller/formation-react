import React from 'react';
import {connect} from 'react-redux';


class User extends React.Component {
    render() {
        return(
            <div>
                <h4>Informations sur l'utilisateur</h4>
                <div className="col-xs-6">
                    <label htmlFor="firstName" className="col-xs-12">Prénom : {this.props.user.firstName}</label>
                    <label htmlFor="lastName" className="col-xs-12">Nom : {this.props.user.lastName}</label>
                    <label htmlFor="email" className="col-xs-12">Mail : {this.props.user.email}</label>
                    <label htmlFor="company" className="col-xs-12">Entreprise : {this.props.user.company}</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, null)(User);