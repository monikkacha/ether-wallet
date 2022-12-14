const TextField = ({ label, defaultValue, onValueChange, placeholderText }) => {
    return (
        <div>
            <span className="text-field-text text-align-left">
                {label}
            </span>
            <input
                placeholder={placeholderText}
                type="text" value={defaultValue} onChange={(e) => onValueChange(e.target.value)} className='common-text-field' />
        </div>
    );
}

export default TextField;