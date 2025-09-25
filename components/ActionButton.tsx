
import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg
        hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-offset-slate-900 focus:ring-indigo-500
        transform hover:-translate-y-1 transition-all duration-200 ease-in-out
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ActionButton;
