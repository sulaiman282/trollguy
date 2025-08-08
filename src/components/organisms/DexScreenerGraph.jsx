import React from 'react';

const DexScreenerGraph = ({ pairAddress = "7fbpdxnosfkmkoq37hasmksysbtutyugx9f3cw9wswg5" }) => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-900 my-8">
      <iframe 
        className="w-full h-[500px] border-0 block"
        src={`https://dexscreener.com/solana/${pairAddress}?embed=1&theme=dark&trades=0&info=0`}
        title="DexScreener Trading Chart"
        allowFullScreen
      />
    </div>
  );
};

export default DexScreenerGraph;
