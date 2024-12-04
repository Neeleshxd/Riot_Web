const ButtonWithoutBorder = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
      <button
        id={id}
        className={`group relative z-10 cursor-pointer rounded-full text-white px-6 py-2 bg-red-600 hover:bg-violet-50 transition-all duration-300 ${containerClass}`}
      >
        {leftIcon && <span className="icon-left mr-2">{leftIcon}</span>}
  
        {/* Style the text */}
        <span className="text-lg hover:text-black">{title}</span>
  
        {rightIcon && <span className="icon-right ml-2">{rightIcon}</span>}
      </button>
    );
  };
  
  export default ButtonWithoutBorder;
  