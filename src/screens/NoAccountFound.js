import { MdOutlineNoAccounts } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Card from "../component/card";

const NoAccountFoundJs = () => {

    const navigate = useNavigate();

    const handleBtnClick = () => navigate('create', { replace: true });

    return (
        <Card child={"Didn't find any account ,create new one "} btnLabel={"Create"} onBtnPressed={() => handleBtnClick()}>
            <div className='no-account-container card-padding-container'>
                <MdOutlineNoAccounts className='no-account-icon' />
                <br />
                Didn't find any account
                <br />
                Would you like to create a new Account ?
            </div>
        </Card>);
}
export default NoAccountFoundJs;