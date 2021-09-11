import ListItem from '../../components/ListItem/ListItem'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import "./list.scss"
import { useRef, useState } from 'react'

const List = () => {

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
            <span className="listTitle">이어서 보기</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick('left')}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem idx={0}/>
                    <ListItem idx={1}/>
                    <ListItem idx={2}/>
                    <ListItem idx={3}/>
                    <ListItem idx={4}/>
                    <ListItem idx={5}/>
                    <ListItem idx={6}/>
                    <ListItem idx={7}/>
                    <ListItem idx={8}/>
                    <ListItem idx={9}/>
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
