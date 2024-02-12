import React from 'react';

const LoadingScreen: React.FC<{ shouldFadeOut: boolean }> = ({ shouldFadeOut }) => {
  return (
    <div className={`fixed inset-0 bg-metal flex flex-col justify-center items-center ${shouldFadeOut ? 'fadeOut' : ''}`}>
      <h3 className='text-4xl text-white font-semibold'>Hack Global Inc.</h3>
      <h3 className='text-lg text-white font-light'>10 years of empowerment</h3>
    </div>
  );
}

export default LoadingScreen;