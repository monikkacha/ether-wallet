import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../component/card";
import TextFieldPassword from "../component/TextFieldPassword";
import { toast } from 'react-toastify';
import TextField from "../component/TextField";
import PasswordStrengthBar from "react-password-strength-bar";

const CreateAccount = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [passwordStrengthScore, setPasswordStrengthScore] = useState('');

    const navigate = useNavigate();

    const handleBtnClick = () => {
        if (userName == '') {
            toast.error('username is empty');
            return;
        }
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
        if (passwordStrengthScore < 3) {
            toast.error('password should be either good or strong');
            return;
        }
        navigate('/home');
    }

    return (
        <Card btnLabel="Confirm" onBtnPressed={() => handleBtnClick()}>
            <div className="flex-align-left card-padding-container">
                <br />
                <span className="heading-text">Create Account</span>
                <br />
                <TextField defaultValue={userName} onValueChange={(value) => setUserName(value)} label={"Username"} placeholderText="eg. John Doe" />
                <div className="size-box-height-16" />
                <TextFieldPassword defaultValue={password} onValueChange={(value) => setPassword(value)} label={"Password"} placeholderText="Minimum 6 character" />
                <div className="size-box-height-16" />
                <TextFieldPassword defaultValue={confirmPassword} onValueChange={(value) => setConfirmPassword(value)} label={"Confirm Password"} placeholderText="Minimum 6 character" />
                <br />
                <PasswordStrengthBar password={password} onChangeScore={(s) => setPasswordStrengthScore(s)} />
            </div>
        </Card>
    );
}

export default CreateAccount;