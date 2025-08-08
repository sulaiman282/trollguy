import React from "react";
import SocialIconsGroup from "@/components/molecules/SocialIconsGroup";
import socialLinksData from "@/socialLinks.json";
import toast from 'react-hot-toast';
import DexScreenerGraph from "./DexScreenerGraph";

const Home = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(socialLinksData.contractAddress);
    toast.success('Contract Address Copied!', {
      duration: 2000,
      position: 'bottom-center',
      style: {
        background: '#333',
        color: '#fff',
        borderRadius: '10px',
        padding: '16px',
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900  to-black">
      {/* Hero Section */}
      <section className=" mx-auto px-4 py-16  bg-[#1E2939] md:py-24 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center mt-10  mb-12">
          <h1 className="glowing tracking-wider text-6xl md:text-8xl lg:text-9xl font-bold text-white font-bangers uppercase mb-6">
            Troll GUY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            The meme coin that's taking the crypto world by storm. Join the revolution and be part of something legendary.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mb-12">
          <div className="relative flex items-center gap-4 z-10 bg-gray-800 rounded-2xl p-1">
            <img
              src="/home.png"
              alt="Troll GUY Logo"
              className="w-auto h-24 max-w-[300px] rounded-xl object-contain transform  transition-transform duration-300"
            />
            <div className="w-full max-w-2xl">
              <div className="bg-gray-800 rounded-full p-1 shadow-xl border border-gray-700">
                <div className="flex items-center w-full">
                  <span className="bg-gradient-to-r whitespace-nowrap margin-auto from-orange-500 to-pink-500 text-white font-bold px-6 py-3 rounded-full text-sm md:text-base">
                    Contract Address:
                  </span>
                  <p className="flex-grow text-gray-200 text-sm md:text-base px-4 py-2 overflow-hidden truncate">
                    {socialLinksData.contractAddress}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 mr-2"
                    aria-label="Copy to clipboard"
                  >
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 0h-2M10 12h.01M14 12h.01M18 12h.01"
                      ></path>
                    </svg>
                  </button>
                </div>
             
              </div>
            </div>

          </div>
          <div className="w-full h-auto rounded-xl object-cover transform  transition-transform duration-300"><DexScreenerGraph /></div>

          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl opacity-20 blur-xl -z-0"></div>
        </div>


        {/* Contract Address Section */}

      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose Troll GUY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Driven',
                description: 'Join a vibrant community of meme enthusiasts and crypto believers.',
                icon: '👥'
              },
              {
                title: 'Secure & Transparent',
                description: 'Built on blockchain technology for maximum security and transparency.',
                icon: '🔒'
              },
              {
                title: 'Meme Power',
                description: 'Harness the power of memes in the crypto space with our unique approach.',
                icon: '🚀'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Revolution?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your hands on Troll GUY tokens and be part of the next big thing in the meme coin universe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Buy Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
