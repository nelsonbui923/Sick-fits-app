import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION =gql`
    mutation REQUEST_RESET_MUTATION($email: String!) {
        requestReset(email: $email) {
            message
        }
    }
`;

export default class ReqestReset extends Component {
    state = {
        email: '',
    };

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Mutation 
            mutation={REQUEST_RESET_MUTATION} 
            variables={this.state}>
                {(reset, {error, loading, called}) => {
                return (
                <Form method="post"
                data-test="form" 
                onSubmit={async e => {
                    e.preventDefault();
                    await reset();
                    this.setState({ email: ''})
                }}>
                <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Change your password</h2>
                    <Error error={error} />
                    {!error && !loading && called && <p>Success! Chceck your email for link.</p>}
                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.saveToState} />
                    </label>
                    <button type="Submit">Request a reset!</button>
                </fieldset>
            </Form>)
                }}
            </Mutation>
        )
    }
}

export {REQUEST_RESET_MUTATION};