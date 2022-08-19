import { LoginPage } from "../auth/pages/LoginPage";

import { Navigate, Route, Routes } from "react-router-dom";
import { CalendarPage } from "../calendar/pages/CalendarPage";

export const AppRouter = () => {

  let authStatus = "not-authenticated";

  return (
    <Routes>
      {authStatus === "not-authenticated"    
      ? (
        <Route path="auth/*" element={<LoginPage />} />
      ) 
      : (
        <Route path="/*" element={<CalendarPage />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
