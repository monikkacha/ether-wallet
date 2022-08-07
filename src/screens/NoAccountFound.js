import { MdOutlineNoAccounts } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Card from "../component/card";

const NoAccountFoundJs = () => {

    const navigate = useNavigate();

    const handleBtnClick = () => {
        console.log('got called');
        navigate('create', { replace: true });
    }

    return <Card child={"Didn't find any account ,create new one "} btnLabel={"next"} onBtnPressed={() => handleBtnClick()}>
        <div className='no-account-container'>
            <MdOutlineNoAccounts className='no-account-icon' />
            <br />
            Didn't find any account
            <br />
            Would you like to create a new Account ?
        </div>
    </Card>;
}
export default NoAccountFoundJs;