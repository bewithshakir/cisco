import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, auth, ...rest }) => {
    console.log('component', Component)
    console.log('auth', auth)

    return (
        <Route
            {...rest}
            render={props => <Component {...props} />}
        />
    )
    // console.log('...rest', ...rest)
};
/* PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}; */

const mapStateToProps = state => ({
    auth: state.auth
});

export default PrivateRoute;