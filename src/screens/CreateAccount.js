import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../component/card";
import TextFieldPassword from "../component/TextField";
import { toast } from 'react-toastify';

const CreateAccount = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleBtnClick = () => {
        if (password === '') {
            console.log('password is empty');
            toast.error('password is empty');
            return;
        }
        if (confirmPassword === '') {
            console.log('confirm password is empty');
            toast.error('confirm password is empty');
            return;
        }
        if (password !== confirmPassword) {
            console.log('password not matching');
            toast.error('password not matching');
            return;
        }
        // navigate('home', { replace: true });
    }

    return (
        <Card btnLabel="Confirm" onBtnPressed={() => handleBtnClick()}>
            <div className="flex-align-left card-padding-container">
                Set Password
                <br />
                <br />
                <br />
                <TextFieldPassword defaultValue={password} onValueChange={(value) => setPassword(value)} label={"Password"} />
                <br />
                <TextFieldPassword defaultValue={confirmPassword} onValueChange={(value) => setConfirmPassword(value)} label={"Confirm Password"} />
            </div>
        </Card>
    );
}

export default CreateAccount;