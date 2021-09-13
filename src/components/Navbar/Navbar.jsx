import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [sposition, setsPosition] = useState(0);
    const handle = () => {
        const po = window.pageYOffset;
        setsPosition(po);

        if(sposition > 10) return setIsScrolled(true);
        else return setIsScrolled(false);
        
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handle);
    })

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link to="/" className="link">
                        <span>홈페이지</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>시리즈</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>영화</span>
                    </Link>
                    <span>새로운 콘텐츠</span>
                    <span>내 목록</span>
                </div>

                <div className="right">
                    <Search className="icon" />
                    <span>어린이용</span>
                    <Notifications className="icon" />
                    <img
                        src="https://cdn.mos.cms.futurecdn.net/vCaXTTTftCNeasohTjUZNQ-1200-80.jpg"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span> 환경설정</span>
                            <span> 로그아웃</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
