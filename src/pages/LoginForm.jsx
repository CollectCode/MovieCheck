import React, { useState } from 'react';
import '../css/LoginForm.css'; // CSS 파일을 따로 만들어 스타일링을 적용할 수 있습니다.

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직을 여기에 추가하세요.
    console.log('ID:', id);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="logintitle">로그인</div>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label className="logininfo">ID</label>
          <input
            type="text"
            placeholder="ID 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label className="logininfo">PASSWORD</label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button className="loginbtn" type="submit">로그인</button>
          <div className="signupbtn">&nbsp;회원가입&nbsp;&nbsp;&nbsp;|</div>
          <div className="findidbtn">아이디 찾기&nbsp;&nbsp;&nbsp;|</div>
          <div className="findpwbtn">비밀번호 찾기</div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;