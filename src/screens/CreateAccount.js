import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../component/card";
import TextFieldPassword from "../component/TextField";

const CreateAccount = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate(-1);
    }

    return (
        <Card btnLabel="next" onBtnPressed={() => handleBtnClick()}>
            <div className="flex-align-left">
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