
import React from 'react';
import CopyIcon from './CopyIcon';
import CheckIcon from './CheckIcon';

interface CodeDisplayProps {
  id: string;
  codes: string[];
  isCopied: boolean;
  onCopy: () => void;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ id, codes, isCopied, onCopy }) => {
  return (
    <div 
      id={id}
      className="relative bg-slate-800/70 border border-slate-700 rounded-lg p-4 w-full"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-slate-400">
          Generated Codes ({codes.length})
        </span>
        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transition-all duration-200"
          aria-label={isCopied ? 'Copied all codes' : 'Copy all codes'}
        >
          {isCopied ? (
            <>
              <CheckIcon className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-4 h-4 text-slate-400" />
              <span>Copy All</span>
            </>
          )}
        </button>
      </div>
      <div className="h-64 overflow-y-auto bg-slate-900/50 rounded-md p-3 font-mono text-lg text-green-400 tracking-wider space-y-1 text-left">
        {codes.map((code, index) => (
          <div key={index} className="whitespace-nowrap">{code}</div>
        ))}
      </div>
    </div>
  );
};

export default CodeDisplay;
