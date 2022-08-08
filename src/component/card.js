import '../App.css';


const Card = ({ btnLabel, children, onBtnPressed, isBtnVisible = true }) => {
    return (
        <>
            <div className='logo-container'>
                <span className='logo-name'>Future</span>
                <span className='logo-name-sub'>Wallet</span>
            </div>
            <br />
            <div className="card-container">
                {children}
                {isBtnVisible ?
                    (<div className='card-container-btn' onClick={() => onBtnPressed()}>
                        {btnLabel}
                    </div>)
                    : ""
                }

            </div>
        </>
    );
}

export default Card;