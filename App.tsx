
import React, { useState, useEffect } from 'react';
import { ScreenState } from './types';
import PhishingScreen from './components/PhishingScreen';
import ValentineScreen from './components/ValentineScreen';
import SuccessScreen from './components/SuccessScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>(ScreenState.PHISHING);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#fdf2f8]">
      {screen === ScreenState.PHISHING && (
        <PhishingScreen onAcknowledge={() => setScreen(ScreenState.QUESTION)} />
      )}
      {screen === ScreenState.QUESTION && (
        <ValentineScreen onYes={() => setScreen(ScreenState.SUCCESS)} />
      )}
      {screen === ScreenState.SUCCESS && (
        <SuccessScreen />
      )}

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-10 left-10 text-pink-300 transform -rotate-12 bubble-font text-4xl">♥</div>
        <div className="absolute bottom-20 right-20 text-pink-300 transform rotate-45 bubble-font text-6xl">♥</div>
        <div className="absolute top-1/2 right-10 text-pink-200 transform rotate-12 bubble-font text-2xl">XOXO</div>
        <div className="absolute bottom-10 left-1/4 text-pink-200 transform -rotate-6 bubble-font text-3xl">Be Mine</div>
      </div>
    </div>
  );
};

export default App;
