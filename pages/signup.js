import SignUp from '../components/SignUp'
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import RequestReset from '../components/RequestReset'

const Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`;


const Signup = props => (
    <Columns>
        <SignUp />
        <SignIn />
        <RequestReset />
    </Columns>
);

export default Signup;