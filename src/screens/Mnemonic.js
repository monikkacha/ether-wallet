import Card from "../component/card";
import { AiFillInfoCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../utils/PathConstant";
const Mnemonic = () => {

    const navigate = useNavigate();

    const btnHandler = () => {
        navigate(PATH_HOME, { replace: false });
    }

    return (
        <>
            <Card btnLabel={'Understood'} onBtnPressed={() => btnHandler()}>
                <br />
                <span className="heading-text">Mnemonic</span>
                <div className="mnemonic-container">
                    <div className="mnemonic-text-container">
                        admit major host range view share sure rely rack thrive drift online
                    </div>
                    <br />
                    <AiFillInfoCircle className="info-circle" />
                    <ul>
                        <li>Don't save screenshot</li>
                        <li>Don't store mnemonic digitally</li>
                        <li>Write down mnemonic on paper</li>
                        <li>Mnemonic is the only way to restore your account</li>
                    </ul>
                </div>
            </Card>
        </>
    );
}

export default Mnemonic;