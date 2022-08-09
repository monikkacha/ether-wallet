import { useNavigate } from 'react-router-dom';
import Card from "../component/card";
import Identicon from 'identicon.js';
import { useEffect, useState } from 'react';
import material from '../assets/material-0.jpg';
import ethereum from '../assets/ethereum.png';
import { MdOutlineContentCopy } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { HiDownload } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import CommonHomeButton from '../component/CommonHomeButton';


const Home = () => {

    const navigate = useNavigate();
    const handleBtnClick = () => navigate('create', { replace: true });
    const [availableEth, setAvailableEth] = useState('0.5892');
    const [availableEthUSD, setAvailableEthUSD] = useState('542.78');
    const copyHandler = () => {
        toast.success('Public key copied on your clipboard');
    }

    const onBuyBtnClick = () => {
        window.open('https://www.coinbase.com/', '_blank');
    }

    const onSwapBtnClick = () => {
        window.open('https://app.uniswap.org/#/swap?chain=mainnet', '_blank');
    }

    const onSendBtnClick = () => {
        console.log('send eth clicked');
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
            <div className='size-box-height-24' />
            <div className='home-body-container'>
                <div className='ether-img-container'>
                    <img src={ethereum} />
                </div>
            </div>
            <div className='size-box-height-24' />
            <span className='eth-info-text'>
                {availableEth} ETH
            </span>
            <div className='eth-info-price-text'>
                $ {availableEthUSD} USD
            </div>
            <div className='size-box-height-40' />
            <div className='common-btn-container'>
                <CommonHomeButton icon={<HiDownload />} label='Buy' onClickBtn={() => onBuyBtnClick()} />
                <CommonHomeButton icon={<BsArrowUpRight />} label='Send' onClickBtn={() => { onSendBtnClick() }} />
                <CommonHomeButton icon={<CgArrowsExchangeAlt />} label='Swap' onClickBtn={() => { onSwapBtnClick() }} />
            </div>
        </Card >);
}

export default Home;
