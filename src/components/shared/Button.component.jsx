function Button({ children, onClick, className = "" }) {
    const button = `px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${className}`;
  return (
    <button onClick={onClick} className={button}>
      {children}
    </button>
  );
}
export default Button;