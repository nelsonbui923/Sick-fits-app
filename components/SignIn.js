import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import {CURRENT_USER_QUERY} from './User';

const SIGNIN_MUTATION =gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

export default class SignIn extends Component {
    state = {
        name: '',
        password: '',
        email: '',
    };

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Mutation 
            mutation={SIGNIN_MUTATION} 
            variables={this.state} 
            refetchQueries={[
                {query: CURRENT_USER_QUERY}
            ]}>
                {(signup, {error, loading}) => {
                return (
                <Form method="post" onSubmit={async e => {
                    e.preventDefault();
                    await signup();
                    this.setState({ name: '', email: '', password: ''})
                }}>
                <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Sign into your account</h2>
                    <Error error={error} />
                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.saveToState} />
                    </label>
                    <label htmlFor="Password">
                        Password
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.saveToState} />
                    </label>
                    <button type="Submit">Sign In!</button>
                </fieldset>
            </Form>)
                }}
            </Mutation>
        )
    }
}