import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './listItem.scss'

const ListItem = ({idx}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    return (
        <div
            className="listItem"
            style={{ left: isHovered && idx * 255 - 50 + idx * 5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 시간 40분</span>
                            <span className="limit">+16</span>
                            <span>2020</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Commodi quasi iusto laboriosam doloribus
                            ullam,lore
                        </div>
                        <div className="genre">판타지</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
