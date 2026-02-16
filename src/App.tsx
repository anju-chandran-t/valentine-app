import React, { useState } from 'react';
import ValentineRequest from './components/ValentineRequest';
import SuccessScreen from './components/SuccessScreen';

const App: React.FC = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <>
      {!hasAccepted ? (
        <ValentineRequest onYes={() => setHasAccepted(true)} />
      ) : (
        <SuccessScreen />
      )}
    </>
  );
};

export default App;
