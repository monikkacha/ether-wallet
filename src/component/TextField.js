const TextFieldPassword = ({ label, defaultValue, onValueChange }) => {
    return (
        <div>
            <span className="text-field-text text-align-left">
                {label}
            </span>
            <input type="password" value={defaultValue} onChange={(e) => onValueChange(e.target.value)} className='common-text-field' />
        </div>
    );
}

export default TextFieldPassword;