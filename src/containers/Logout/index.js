import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    AuthService.logout();
    navigate('/Login');
  }, [navigate]);

  return <></>

}

export default Logout;
