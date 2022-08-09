const CommonHomeButton = ({ icon, label, onClickBtn }) => {
    return (
        <>
            <div onClick={() => onClickBtn()}>
                <div className='home-icon-common-container'>
                    {icon}
                </div>
                <span className="home-icon-label">
                    {label}
                </span>
            </div>
        </>
    );
}

export default CommonHomeButton;