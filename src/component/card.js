import '../App.css';
import { MdOutlineNoAccounts } from 'react-icons/md';

const Card = ({ btnLabel, child }) => {

    const noAccount = (
        <div className='no-account-container'>
            <MdOutlineNoAccounts className='no-account-icon' />
            <br />
            Didn't find any account
            <br />
            Would you like to create a new Account ?
        </div>
    );

    return (
        <>
            <div className="card-container">
                {noAccount}
                <div className='card-container-btn'>
                    {btnLabel}
                </div>
            </div>
        </>
    );
}

export default Card;