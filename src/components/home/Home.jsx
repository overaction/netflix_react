import Navbar from '../Navbar/Navbar';
import Featured from '../Featured/Featured';
import List from '../List/List';
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured type=""/>
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
