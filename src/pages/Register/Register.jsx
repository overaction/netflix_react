import axios from 'axios';
import { useRef, useState } from 'react'
import { useHistory } from 'react-router';
import "./register.scss"

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const handleStart = () => {
        setEmail(emailRef.current.value);
        console.log('object')
    }
    const handleFinish = async (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);
        try {
            await axios.post("auth/register", {email,username,password});
            history.push("/login");
        }catch(err) {
            console.log(err);
        }
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo"
                    />
                    <button className="loginButton">회원가입</button>
                </div>
            </div>
            <div className="container">
                <div className="wrapper">
                    <h1>영화, TV 프로그램을 무제한으로.</h1>
                    <h2>
                        다양한 디바이스에서 시청하세요. 언제든 해지하실 수
                        있습니다.
                    </h2>
                    {!email ? (
                        <>
                            <p>
                                시청할 준비가 되셨나요? 멤버십을 등록하거나
                                재시작하려면 이메일 주소를 입력하세요.
                            </p>
                            <div className="input">
                                <input
                                    type="email"
                                    placeholder="이메일 주소"
                                    ref={emailRef}
                                />
                                <button
                                    className="registerButton"
                                    onClick={handleStart}
                                >
                                    시작하기
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="input">
                            <input
                                type="username"
                                placeholder="유저네임"
                                ref={usernameRef}
                            />
                            <input
                                type="password"
                                placeholder="비밀번호"
                                ref={passwordRef}
                            />
                            <button
                                className="registerButton"
                                onClick={handleFinish}
                            >
                                마무리하기
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Register
