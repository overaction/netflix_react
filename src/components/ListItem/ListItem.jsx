import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios';
import { useEffect, useState } from 'react'
import './listItem.scss'

const ListItem = ({idx, item}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/"+item,{
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2UxNDQzYmI1ODUwOTU3OTk4NzE1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYzMDc4NCwiZXhwIjoxNjMyMDYyNzg0fQ.iXjZKES3hdUlQlk1rDWD1xbQ4ARurdYVD4PIZ6U7Ex0"
                    }
                });
                console.log(res);
                setMovie(res.data);
            }catch(err) {
                console.log(err);
            }
        }
        getMovie();
    },[item])
    return (
        <div
            className="listItem"
            style={{ left: isHovered && idx * 255 - 50 + idx * 5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={movie.img}
                alt=""
            />
            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
