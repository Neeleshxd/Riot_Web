const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <div className="inline-block">
      <button
        id={id}
        className={`flex items-center justify-center px-4 py-2 rounded-full text-white bg-red-600 hover:bg-violet-50 hover:text-black transition-all duration-300 ${containerClass}`}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span className="text-lg">{title}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
