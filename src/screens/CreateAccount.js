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
            toast.error('password is empty');
            return;
        }
        if (confirmPassword === '') {
            toast.error('confirm password is empty');
            return;
        }
        console.log('return; ', password.length);
        if (password.length < 6) {
            toast.error('password should be at least 6 character long');
            return;
        }
        if (confirmPassword.length < 6) {
            toast.error('confirm password should be at least 6 character long');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('password not matching');
            return;
        }
        navigate('/home', { replace: true });
    }

    return (
        <Card btnLabel="Confirm" onBtnPressed={() => handleBtnClick()}>
            <div className="flex-align-left card-padding-container">
                Set Password
                <br />
                <br />
                <br />
                <TextFieldPassword defaultValue={password} onValueChange={(value) => setPassword(value)} label={"Password"} placeholderText="Minimum 6 character" />
                <br />
                <TextFieldPassword defaultValue={confirmPassword} onValueChange={(value) => setConfirmPassword(value)} label={"Confirm Password"} placeholderText="Minimum 6 character" />
            </div>
        </Card>
    );
}

export default CreateAccount;