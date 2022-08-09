import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../component/card";
import CustomButton from "../component/CustomButton";
import TextFieldPassword from "../component/TextFieldPassword";
import { KEY_PASSWORD } from "../utils/constant";
import { PATH_CREATE } from "../utils/PathConstant";

const Login = () => {
    const [password, setPassword] = useState('');
    const [pass, setPass] = useState('');
    const navigator = useNavigate();

    const getPassword = () => {
        const passTemp = localStorage.getItem(KEY_PASSWORD);
        setPass(passTemp);
    }

    const createHandle = () => {
        navigator(PATH_CREATE);
    }

    const validate = () => {
        if (password === '') {
            toast.error('password can\'t be empty');
            return true;
        }
        return false;
    }

    const handleForCheck = () => {
        if (validate()) return;
        if (pass === password) {
            navigator('/home', { replace: false });
        } else {
            toast.error('Password is wrong');
        }
    }

    useState(() => getPassword(), []);

    return (
        <>
            <Card isBtnVisible={false}>
                <div className="login-container card-padding-container">
                    <br />
                    <span className="login-heading-text">
                        Welcome Back !
                    </span>
                    <br />
                    <br />
                    <br />
                    <TextFieldPassword
                        defaultValue={password}
                        label="Enter Password"
                        onValueChange={(v) => setPassword(v)}
                    />
                    <br />
                    <CustomButton
                        btnLabel={'Unlock'}
                        onBtnPressed={() => handleForCheck()}
                    />
                    <br />
                    <div className="login-forgot-text">Forgot password ?</div>
                    <br />
                    <div className="login-create-text">Don't have an account ? <span onClick={() => createHandle()} className="login-create-text-highlight"> Create </span></div>
                </div>
            </Card>
        </>
    );
}

export default Login;