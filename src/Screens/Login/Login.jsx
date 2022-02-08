import React, { useEffect, useState } from 'react';
import { loginQuery } from '../../Queries/Queries';
import { ContentFull } from '../../CustomHooks/ContentFull';

const Login = () => {
  let [username, setUsername] = useState('');
  let [password, setpassword] = useState('');
  let [queryState, setQueryState] = useState('');

  async function login() {
    let {personCollection} = await ContentFull(loginQuery(username));
    if(personCollection.items[0].name === username){
        alert(`hi ${personCollection.items[0].name}`)
    }else{
        alert("Invalid Credientials")
    }
}
  return (
    <div>
      <div>
        <input
          type='username'
          placeholder='Enter Your Username'
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
