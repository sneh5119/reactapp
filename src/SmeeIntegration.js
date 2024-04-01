// SmeeIntegration.js

import React, { useEffect } from 'react';
import SmeeClient from 'smee-client';

function SmeeIntegration() {
  useEffect(() => {
    const smee = new SmeeClient({
      source: 'https://smee.io/JwSVAxZbrpUiI0',
      target: 'http://localhost:3000/events',
      logger: console
    });

    const events = smee.start();

    // Cleanup function - stop forwarding events when the component unmounts
    return () => {
      events.close();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default SmeeIntegration;
