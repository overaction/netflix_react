import ListItem from '../../components/ListItem/ListItem'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import "./list.scss"
import { useRef, useState } from 'react'

const List = ({list}) => {

    console.log(list);
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (dir) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log(distance)
        if(dir === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${260 + distance}px)`
        }
        if(dir === "right" && slideNumber < 4) {
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-260 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick('left')}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    {list.content.map((item,idx) => (
                        <ListItem idx={idx} item={item}/>
                    ))}
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    )
}

export default List
