import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedAdmin = ({ children }) => {
  const token = Cookies.get("admin_token");

  return token ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedAdmin;
