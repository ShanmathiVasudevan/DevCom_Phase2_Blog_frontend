const InputField = ({ type, placeholder }) => {
  return (
    <div className="login-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        className="input-field"
        required
      />
    </div>
  );
};

export default InputField;
