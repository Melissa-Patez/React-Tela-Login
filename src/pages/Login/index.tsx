import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const Login: React.FC = () => {

  //create a state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  async function handleButton(){
    try {
      const response = await api.post("/auth/login", {email, password});
      localStorage.setItem('token', response.data.access_token);
      history.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
   <div className="container">
      <div className="fieldset">
        <h1>Sign in</h1>

        <input 
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />

        <input 
          type={showPassword? 'text' : 'password'} 
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />

        <div onClick={()=>{setShowPassword(!showPassword)}} >Mostrar Senha</div>

        <hr/>
        <button onClick={handleButton}>Enter</button>
        
      </div> 

   </div>
  );
}
  //export component for external use 
  export default Login;