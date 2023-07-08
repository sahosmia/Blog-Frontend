import Header from "./Header";
import Footer from "./Footer";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

function AdminLayout() {
  const { token } = useAuthContext();

  console.log(token);
  if (token == null ) {
    
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminLayout;
