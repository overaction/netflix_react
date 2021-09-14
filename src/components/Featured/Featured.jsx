import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios';
import { useEffect, useState } from 'react'
import "./featured.scss"

const Featured = ({type}) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2UxNDQzYmI1ODUwOTU3OTk4NzE1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYzMDc4NCwiZXhwIjoxNjMyMDYyNzg0fQ.iXjZKES3hdUlQlk1rDWD1xbQ4ARurdYVD4PIZ6U7Ex0',
                    },
                })
                setContent(res.data[0]);
            }catch(err) {
                console.log(err);
            }
        }
        getRandomContent();
    },[type]);

    console.log(content);
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movies' ? '영화' : '시리즈'}</span>
                    <select name="genre" id="genre">
                        <option>장르</option>
                        <option value="adventure">어드벤처</option>
                        <option value="comedy">코미디</option>
                        <option value="crime">범죄</option>
                        <option value="fantasy">판타지</option>
                        <option value="historical">역사</option>
                        <option value="horror">호러</option>
                        <option value="romance">로맨스</option>
                        <option value="sci-fi">공상과학</option>
                        <option value="thriller">스릴러</option>
                        <option value="western">서부</option>
                        <option value="animation">애니메이션</option>
                        <option value="drama">드라마</option>
                        <option value="documentary">다큐멘터리</option>
                    </select>
                </div>
            )}
            <img
                src={content.img}
                alt=""
            />
            <div className="info">
                <img
                    src={content.imgTitle}
                    alt=""
                />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>재생</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>정보</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
