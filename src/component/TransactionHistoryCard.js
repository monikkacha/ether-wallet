import { HiDownload } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';

const TransactionHistoryCard = ({ isSend = false }) => {
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
                        <span>0.5 ETH</span>
                    </div>
                    <div className='space-between-flex'>
                        <span className='history-extra-info'>
                            <span className='history-extra-info-date'>
                                May 10
                            </span>
                            <BsDot />
                            From : 0xFc2AbE....5Ad
                        </span>
                        <span className='history-extra-info'>0.5 ETH</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransactionHistoryCard;