import Signin from "../../Users/Signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../../Users/Profile";
import UserTable from "../../Users/Table";
import Signup from "../../Users/Signup";

export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Admin/Users" element={<UserTable />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signout" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />

      </Routes>
    </div>
  );
}
