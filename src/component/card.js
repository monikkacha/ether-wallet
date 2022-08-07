import '../App.css';


const Card = ({ btnLabel, children, onBtnPressed }) => {
    return (
        <>
            <div className="card-container">
                {children}
                <div className='card-container-btn' onClick={() => onBtnPressed()}>
                    {btnLabel}
                </div>
            </div>
        </>
    );
}

export default Card;