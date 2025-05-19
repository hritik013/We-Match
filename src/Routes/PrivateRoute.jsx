import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <h1 className='text-center text-xl h-screen text-rose-400'>loading</h1>
    }
    if (user) {
        return (
            <div>
                {children}
            </div>
        );
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

}


export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
}