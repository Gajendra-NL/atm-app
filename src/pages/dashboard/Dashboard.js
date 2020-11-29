import React from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../redux/actions/authActions';


const Dashboard = (props) => {

    const onClickLogout = () => {
        props.authenticateUser(false);
    }
    
    return (
        <div>
            <div>Dashboard Screen</div>
            <button type="button" onClick={() => props.history.push('/withdraw')}>
                Withdraw
            </button>
            <div style={{ marginTop: '200px', display: 'flex', justifyContent: 'center'}} onClick={onClickLogout}>
                <button style={{ width: '100px' }}>Logout</button>
            </div>
        </div>
    )
}

export default connect(null, { authenticateUser })(Dashboard);
