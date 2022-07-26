import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import ReservationCreate from "../pages/ReservationCreate";
import ReservationDetail from "../pages/ReservationDetail";
import Reservations from "../pages/Reservations";
import PrivateRouter from "./PrivateRouter";
const PublicRouter = () => {
  return (
    <div>
    
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservations" element={<PrivateRouter />} >
            <Route path="" element={<Reservations />} />
            <Route path="create/" element={<ReservationCreate />} />
            <Route path="detail/:id" element={<ReservationDetail />} />
        </Route>
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  )
}

export default PublicRouter