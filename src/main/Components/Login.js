import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actions';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
    }
    render() {
        return(
            <div>
                <h1>Page de connexion</h1>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login" className="col-xs-2 control-label">email</label>
                        <div className="col-xs-4">
                            <input name="email" type="text" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-xs-2 control-label">mot de passe</label>
                        <div className="col-xs-4">
                            <input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-offset-2 col-xs-10">
                            <button type="submit" className="btn btn-default">Connexion</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (inputs) => {
        dispatch(login({
            email: inputs.email,
            password: inputs.password
        }))
    }
});
export default connect(null, mapDispatchToProps)(Login);