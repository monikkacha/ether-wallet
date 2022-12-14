import { useNavigate } from 'react-router-dom';
import Card from "../component/card";
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
import TransactionHistoryCard from '../component/TransactionHistoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_ACCOUNT } from '../utils/constant';
import { ethers } from 'ethers';
import { updateAccount, updateProvider, updateHistory } from './../redux/action';
import { getDecoratedPublicKey, removeExtraDecimal } from '../utils/CommonFunction';
import { PATH_SEND_ETHER, PATH_TRANSACTION } from '../utils/PathConstant';


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleBtnClick = () => navigate('create', { replace: true });
    const [availableEth, setAvailableEth] = useState('0.0000');
    const [availableEthUSD, setAvailableEthUSD] = useState('0.00');
    const [availablePublicKey, setAvailablePublicKey] = useState('0x0000000000000000000000000000000000000000');
    const [transactionHistory, setTransactionHistory] = useState([]);
    let currentAccounts;
    const ethMarketValue = 1684;

    const copyHandler = () => {
        navigator.clipboard.writeText(availablePublicKey);
        toast.success('Public key copied on your clipboard');
    }

    const onBuyBtnClick = () => {
        window.open('https://www.coinbase.com/', '_blank');
    }

    const onSwapBtnClick = () => {
        window.open('https://app.uniswap.org/#/swap?chain=mainnet', '_blank');
    }

    const onSendBtnClick = () => {
        navigate(PATH_SEND_ETHER, { replace: false });
    }

    const moreBtnHandle = () => {
        navigate(PATH_TRANSACTION, { replace: false });
    }

    useEffect(() => getStoredData(), [])

    const getStoredData = () => {
        const innerFunction = async () => {
            var item = localStorage.getItem(KEY_ACCOUNT);
            if (item == null) {
                var createdAccount = await createAccount();
                const account = { account: [createdAccount] };
                currentAccounts = account;
                localStorage.setItem(KEY_ACCOUNT, JSON.stringify(account));
            } else {
                var data = JSON.parse(item);
                currentAccounts = data;
                dispatch(updateAccount(data));
            }
            loadCurrentAccount();
        }
        innerFunction();
    }

    const loadCurrentAccount = async () => {
        setAvailablePublicKey(currentAccounts.account[0].publicKey);

        const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KEY}`);
        const balance = await provider.getBalance(currentAccounts.account[0].publicKey);
        setAvailableEth(removeExtraDecimal(ethers.utils.formatEther(balance)));
        setAvailableEthUSD(setMarketValue(ethers.utils.formatEther(balance)))

        dispatch(updateProvider(provider));

        loadAccountHistory();
    }

    const loadAccountHistory = async () => {
        const etherScanProvider = new ethers.providers.EtherscanProvider("rinkeby", "N3VNFG3SI5ES3B3151M1J67753TXG1N38M");
        const history = await etherScanProvider.getHistory(currentAccounts.account[0].publicKey);
        console.log('history', history);

        if (history.length > 0) {
            dispatch(updateHistory(history));
            let tempArray = [];
            let j = 0;
            for (let i = (history.length - 1); i >= 0; i--) {
                tempArray[j] = history[i];
                if (j == 1) {
                    break;
                }
                j++;
            }
            setTransactionHistory(tempArray);
        }
    }

    const setMarketValue = (eth) => {
        const floatValue = parseFloat(eth);
        const marketValue = ethMarketValue * floatValue;
        return marketValue.toFixed(2);
    }

    const createAccount = async () => {
        const wallet = await ethers.Wallet.createRandom();
        const createdAccount = {
            publicKey: wallet.address,
            privateKey: wallet.privateKey,
            mnemonic: wallet.mnemonic.phrase
        };
        return createdAccount;
    }

    return (
        <Card
            isBtnVisible={false}>
            <div className='account-info-container'>
                <div className='account-info-container-sub'>
                    <img src={material} alt='text' className='account-circle-avatar' />
                    <div className='size-box-width-12' />
                    <div className='account-info-text-container'>
                        <span className='account-info-text-account-label'>Account Number 1</span>
                        <span className='account-info-text-account-number' onClick={() => copyHandler()}> <span >{getDecoratedPublicKey(availablePublicKey)}</span> <MdOutlineContentCopy className='copy-icon' /></span>
                    </div>
                </div>
                {/* <FiMoreVertical /> */}
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
            <div className='size-box-height-40' />
            <div className='divider' />
            <div className='recent-activity'>
                <span>Recent activity</span>
                <span className='more-text' onClick={() => moreBtnHandle()}>More</span>
            </div>
            <div className='size-box-height-12' />
            {
                transactionHistory.map((item, index) => (<TransactionHistoryCard transaction={item} key={index} />))
            }

        </Card >);
}

export default Home;
