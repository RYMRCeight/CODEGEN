
import React, { useState, useEffect, useCallback } from 'react';
import CodeDisplay from './components/CodeDisplay';
import ActionButton from './components/ActionButton';
import CertificateIcon from './components/CertificateIcon';
import GithubIcon from './components/GithubIcon';

const App: React.FC = () => {
  const [certificateCodes, setCertificateCodes] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const generateCodes = useCallback(() => {
    const prefix = 'TGLN-CA-';
    const newCodes = new Set<string>();
    while (newCodes.size < 100) {
      // Generate an 8-character random alphanumeric string
      const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
      newCodes.add(prefix + randomPart);
    }
    setCertificateCodes(Array.from(newCodes));
    setIsCopied(false); // Reset copied state when new codes are generated
  }, []);

  useEffect(() => {
    generateCodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generateCodes]);

  const handleCopyAll = () => {
    if (certificateCodes.length > 0) {
      const allCodesText = certificateCodes.join('\n');
      navigator.clipboard.writeText(allCodesText).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex flex-col items-center justify-center p-4 font-sans text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>

      <main className="z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <CertificateIcon />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-3">
          Certificate Code Generator
        </h1>
        <p className="text-lg text-slate-400 max-w-md mx-auto mb-10">
          Generate 100 unique certificate codes with a single click.
        </p>

        <div className="w-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8 mb-8">
          <CodeDisplay 
            id="code-display"
            codes={certificateCodes} 
            isCopied={isCopied}
            onCopy={handleCopyAll} 
          />
        </div>

        <ActionButton onClick={generateCodes}>
          Generate 100 New Codes
        </ActionButton>
      </main>

      <footer className="absolute bottom-4 text-slate-500 text-sm">
        <a 
          href="https://github.com/your-repo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-slate-300 transition-colors"
        >
          <GithubIcon />
          <span>View on GitHub</span>
        </a>
      </footer>
    </div>
  );
};

export default App;
