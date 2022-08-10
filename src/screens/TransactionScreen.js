import Card from "../component/card";
import material from '../assets/material-0.jpg';
import { toast } from 'react-toastify';
import { getDecoratedPublicKey } from '../utils/CommonFunction';
import { MdOutlineContentCopy } from 'react-icons/md';
import TransactionHistoryCard from "../component/TransactionHistoryCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const TransactionScreen = () => {

    const [transactionHistory, setTransactionHistory] = useState([]);
    const historyState = useSelector(state => state.history);
    const accountState = useSelector(state => state.account);
    const [account, setAccount] = useState('');

    const copyHandler = () => {
        toast.success('Public key copied on your clipboard');
    }

    const assignData = () => {
        setTransactionHistory(historyState)
        setAccount(accountState.account[0].publicKey)
    }

    useEffect(() => { assignData() }, []);

    return (
        <>
            <Card isBtnVisible={false}>
                <div className='account-info-container'>
                    <div className='account-info-container-sub'>
                        <img src={material} alt='text' className='account-circle-avatar' />
                        <div className='size-box-width-12' />
                        <div className='account-info-text-container'>
                            <span className='account-info-text-account-label'>Account Number 1</span>
                            <span className='account-info-text-account-number' onClick={() => copyHandler()}> <span >{getDecoratedPublicKey(account)}</span> <MdOutlineContentCopy className='copy-icon' /></span>
                        </div>
                    </div>
                </div>
                <div className='divider' />
                <div className='size-box-height-12' />
                {
                    transactionHistory.length > 0 ? transactionHistory.map((item, index) => (<TransactionHistoryCard transaction={item} key={index} />)) : "No Data"
                }
            </Card>
        </>
    )
}

export default TransactionScreen;