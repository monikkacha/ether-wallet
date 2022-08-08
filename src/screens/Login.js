import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../component/card";
import CustomButton from "../component/CustomButton";
import TextFieldPassword from "../component/TextFieldPassword";

const Login = () => {
    const [password, setPassword] = useState('');
    const navigator = useNavigate();

    const createHandle = () => {
        navigator('/create');
    }

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
                        onBtnPressed={() => console.log('btn got clicked')}
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