import { useNavigate } from 'react-router-dom';
import Card from "../component/card";
import Identicon from 'identicon.js';
import { useEffect, useState } from 'react';
import material from '../assets/material-0.jpg';
import { MdOutlineContentCopy } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Home = () => {

    const navigate = useNavigate();
    const handleBtnClick = () => navigate('create', { replace: true });
    const [userImg, setUserImg] = useState(new Identicon('d3b07384d113edec49eaa6238ad5ff00', 100).toString());

    const createAvatar = () => {

    }

    useEffect(() => {
        createAvatar();
    }, []);

    const copyHandler = () => {
        toast.success('Public key copied on your clipboard');
    }

    return (
        <Card
            child={"Didn't find any account ,create new one "}
            btnLabel={"Create"} onBtnPressed={() => handleBtnClick()}
            isBtnVisible={false}
        >
            <div className='account-info-container'>
                <div className='account-info-container-sub'>
                    <img src={material} alt='text' className='account-circle-avatar' />
                    <div className='size-box-width-12' />
                    <div className='account-info-text-container'>
                        <span className='account-info-text-account-label'>Account Number 1</span>
                        <span className='account-info-text-account-number' onClick={() => copyHandler()}> <span >0xFc2AbE....5Ad</span> <MdOutlineContentCopy className='copy-icon' /></span>
                    </div>
                </div>
                <FiMoreVertical />
            </div>
            <div className='divider' />
        </Card >);
}

export default Home;
