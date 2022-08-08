import { useNavigate } from 'react-router-dom';
import Card from "../component/card";
import Identicon from 'identicon.js';
import { useEffect, useState } from 'react';
import material from '../assets/material-5.jpg';

const Home = () => {

    const navigate = useNavigate();
    const handleBtnClick = () => navigate('create', { replace: true });
    const [userImg, setUserImg] = useState(new Identicon('d3b07384d113edec49eaa6238ad5ff00', 100).toString());

    const createAvatar = () => {

    }

    useEffect(() => {
        createAvatar();
    }, []);


    return (
        <Card
            child={"Didn't find any account ,create new one "}
            btnLabel={"Create"} onBtnPressed={() => handleBtnClick()}
            isBtnVisible={false}
        >
            <div className='card-padding-container'>
                <img src={material} alt='text' className='account-circle-avatar' />
            </div>
            <hr />
        </Card>);
}

export default Home;
