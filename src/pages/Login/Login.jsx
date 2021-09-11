import { useRef, useState } from 'react'
import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo"
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <div className="top">
                        <h1>로그인</h1>
                        <input
                            type="email"
                            placeholder="이메일 또는 전화번호"
                        />
                        <input type="password" placeholder="비밀번호" />
                        <button>로그인</button>
                    </div>
                    <div className="bottom">
                        <span>
                            Netflix 회원이 아닌가요? <b>지금 가입하세요.</b>
                        </span>
                        <span>
                            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가
                            로봇이 아님을 확인합니다.
                            <b>자세히 알아보기</b>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
