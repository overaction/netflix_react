import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import "./home.scss";
import { useEffect, useState } from 'react';
import axois from "axios";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    // 타입이나 장르를 바꿀때마다 useEffect 실행
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axois.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2UxNDQzYmI1ODUwOTU3OTk4NzE1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYzMDc4NCwiZXhwIjoxNjMyMDYyNzg0fQ.iXjZKES3hdUlQlk1rDWD1xbQ4ARurdYVD4PIZ6U7Ex0"
                    }
                });
                setLists(res.data);
            }catch(err) {
                console.log(err);
            }
        };
        getRandomLists();
    },[genre,type])
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre}/>
            {lists.map(list => (
                <List list={list}/>
            ))}
        </div>
    )
}

export default Home
