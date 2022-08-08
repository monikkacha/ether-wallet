const CustomButton = ({ btnLabel, onBtnPressed }) => {
    return (
        <>
            <div className='card-custom-container-btn' onClick={() => onBtnPressed()}>
                {btnLabel}
            </div>
        </>
    );
}

export default CustomButton;