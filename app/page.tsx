import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (<div>
    <Image
          src="/static/LogoRG.png"
          width={300}
          height={120}
          alt="logo"
          priority={true}
        />
        </div>
    );
} 