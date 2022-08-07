import '../App.css';


const Card = ({ btnLabel, children, onBtnPressed, isBtnVisible = true }) => {
    return (
        <>
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