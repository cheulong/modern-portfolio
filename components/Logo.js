import React from 'react';
import Image from 'next/image';
const logoImg = '/logo.svg';

const Logo = () => {
  return (
    <div>
      <Image src={logoImg} alt='logo' width={120} height={75} />
    </div>
  );
};

export default Logo;
