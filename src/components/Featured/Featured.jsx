import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import "./featured.scss"

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? '영화' : '시리즈'}</span>
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
                src="https://cdn.mos.cms.futurecdn.net/vCaXTTTftCNeasohTjUZNQ-1200-80.jpg"
                alt=""
            />
            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam aspernatur placeat autem, quaerat ipsa voluptates
                    voluptatem explicabo et sint, nemo aperiam commodi esse.
                    Reiciendis quibusdam animi laborum eaque sint similique.
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
