
export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-black text-white rounded ${className}`}
    >
      {children}
    </button>
  );
};
