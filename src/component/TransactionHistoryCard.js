import { HiDownload } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDecoratedPublicKey, convertTimestampToDate } from '../utils/CommonFunction';
import { ethers } from 'ethers';

const TransactionHistoryCard = ({ transaction }) => {

    const [isSend, setIsSend] = useState(false);
    const [transactionTo, setTransactionTo] = useState('');
    const [transactionFrom, setTransactionFrom] = useState('');
    const [transactionEth, setTransactionEth] = useState('0.0');
    const [date, setDate] = useState('');
    const [currentPublicKey, setCurrentPublicKey] = useState('');
    const state = useSelector(state => state.account);

    useEffect(() => {
        extractData();
    }, []);

    const extractData = () => {
        console.log('transaction ', transaction);

        setTransactionFrom(transaction.from);
        setTransactionTo(transaction.to);
        setTransactionEth(ethers.utils.formatEther(transaction.value));
        setDate(convertTimestampToDate(transaction.timestamp));

        setCurrentPublicKey(state.account[0].publicKey);

        if (transaction.from == state.account[0].publicKey) {
            setIsSend(true);
        }
    }

    return (
        <>
            <div className="history-main-container">
                <div className='home-icon-common-container recent-activity-icon'>
                    {isSend ? <BsArrowUpRight /> : <HiDownload />}
                </div>
                <div className='size-box-width-12' />
                <div className='history-sub-container'>
                    <div className='space-between-flex'>
                        <span>{isSend ? "Send" : "Receive"}</span>
                        <span>{transactionEth} ETH</span>
                    </div>
                    <div className='space-between-flex'>
                        <span className='history-extra-info'>
                            <span className='history-extra-info-date'>
                                {date}
                            </span>
                            <BsDot />
                            {isSend ? "To : " : "From : "}
                            {isSend ? getDecoratedPublicKey(transactionTo) : getDecoratedPublicKey(transactionFrom)}
                        </span>
                        <span className='history-extra-info'>{transactionEth} ETH</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransactionHistoryCard;