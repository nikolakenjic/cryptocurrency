const Button = ({
  type,
  btnName,
  className,
  disabled,
  onClick,
  activeClass,
}) => {
  return (
    <button
      type={type || 'button'}
      className={`btn ${className} ${activeClass ? 'active' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
