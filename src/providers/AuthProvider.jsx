import { useEffect } from "react";
import { getCookies } from "../utils/cookies";
import { useLocation, useNavigate } from "react-router-dom";

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const cookie = getCookies("accessToken");
    if (!!cookie == false) navigate("/new");
  }, [pathname]);

  return children;
}

export default AuthProvider;
