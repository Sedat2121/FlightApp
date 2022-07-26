import { Navigate, Outlet } from 'react-router-dom'

const userInfo = true;

const PrivateRouter = () => {

return userInfo ? <Outlet/>: <Navigate to="/login"/>;
}

export default PrivateRouter