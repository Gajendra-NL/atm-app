// import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// const ProtectedRoute = (props) => {

//     const { isAuthenticated, children } = props;

//     if (!isAuthenticated) return <Redirect to='/login' />
//     return {children};    
// }

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render = {props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps)(ProtectedRoute);

// const mapStateToProps = state => ({
//     isAuthenticated: state.authReducer.isAuthenticated
// })

// export default connect(mapStateToProps)(ProtectedRoute);