import Card from "../component/card";
import material from '../assets/material-0.jpg';
import { useEffect, useState } from "react";
import { _fetchData } from "ethers/lib/utils";
import { useSelector } from "react-redux";
import { getDecoratedPublicKey, removeExtraDecimal } from '../utils/CommonFunction';
import { MdOutlineContentCopy } from 'react-icons/md';
import { toast } from 'react-toastify';
import ethereum from '../assets/ethereum.png';
import { ethers } from "ethers";
import { Navigate, useNavigate } from "react-router-dom";
import { PATH_HOME } from "../utils/PathConstant";

const SendScreen = () => {

    const [availablePublicKey, setAvailablePublicKey] = useState('0x0000000000000000000000000000000000000000');
    const [availableEth, setAvailableEth] = useState('0.0000');
    const [availableEthUSD, setAvailableEthUSD] = useState('0.00');
    const [transactionTo, setTransactionTo] = useState('');
    const [transactionValue, setTransactionValue] = useState('');
    const accountState = useSelector(state => state.account);
    const providerState = useSelector(state => state.provider);
    const [inProgress, setInProgress] = useState(false);
    const ethMarketValue = 1684;
    const navigate = useNavigate();

    const setMarketValue = (eth) => {
        const floatValue = parseFloat(eth);
        const marketValue = ethMarketValue * floatValue;
        return marketValue.toFixed(2);
    }

    useEffect(() => { assignData() }, []);

    const assignData = async () => {
        setAvailablePublicKey(accountState.account[0].publicKey)
        const balance = await providerState.getBalance(accountState.account[0].publicKey);
        setAvailableEth(ethers.utils.formatEther(balance));
        setAvailableEthUSD(setMarketValue(ethers.utils.formatEther(balance)))
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(availablePublicKey);
        toast.success('Public key copied on your clipboard');
    }

    const onSendBtnPressed = async () => {
        if (inProgress) return;
        const txValue = parseFloat(transactionValue);
        const currentValue = parseFloat(availableEth);
        if (txValue >= currentValue) {
            toast.warning('Don\'t have sufficient balance');
            return;
        }
        setInProgress(true);
        const wallet = new ethers.Wallet(accountState.account[0].privateKey, providerState)
        const tx = await wallet.sendTransaction({
            to: transactionTo,
            value: ethers.utils.parseEther(transactionValue)
        })
        const receipt = await tx.wait();
        setInProgress(true);
        toast.success('Transaction completed successfully');
        navigate(PATH_HOME, { replace: true });
    }

    return (
        <>
            <Card btnLabel={inProgress ? 'in progress...' : 'Send'} onBtnPressed={() => onSendBtnPressed()} >
                <div className='account-info-container'>
                    <div className='account-info-container-sub'>
                        <img src={material} alt='text' className='account-circle-avatar' />
                        <div className='size-box-width-12' />
                        <div className='account-info-text-container'>
                            <span className='account-info-text-account-label'>Account Number 1</span>
                            <span className='account-info-text-account-number' onClick={() => copyHandler()}> <span >{getDecoratedPublicKey(availablePublicKey)}</span> <MdOutlineContentCopy className='copy-icon' /></span>
                        </div>
                    </div>
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
                    {removeExtraDecimal(availableEth)} ETH
                </span>
                <div className='eth-info-price-text'>
                    $ {availableEthUSD} USD
                </div>
                <div className='size-box-height-24' />
                <div className='divider' />
                <div className='size-box-height-24' />
                <div className='field-container'>
                    <span>To</span>
                    <input defaultValue={transactionTo} onChange={(e) => setTransactionTo(e.target.value)} />
                </div>
                <div className='size-box-height-24' />
                <div className='field-container'>
                    <span>Value</span>
                    <input defaultValue={transactionValue} onChange={(e) => setTransactionValue(e.target.value)} />
                </div>
            </Card>
        </>
    );
}

export default SendScreen;