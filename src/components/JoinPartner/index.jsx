import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    return (
    <>
        <h1 className="text-3xl">yuk jadi partner<br/>
        <span className="relative inline-block text-lg mt-2">
            <svg
                className="absolute inset-0"
                viewBox="-10 0 480 60"
                preserveAspectRatio="none"
            >
                <text
                x="0"
                y="35"
                className="text-6xl font-bold italic  uppercase"
                fill="transparent"
                stroke="#DCFE52"
                strokeWidth="0.5"
                textAnchor="start"
                dominantBaseline="middle"
                >
                calotiket.com
                </text>
            </svg>
            <span className="text-6xl font-bold text-transparent bg-clip-text">
                calotiket.com
            </span>
        </span>
        </h1>
        <p className="md:w-3/5 lg:w-2/5">
            Bergabunglah dengan Calo dan rasakan kemudahan menyambut lebih 
            banyak pengunjung untuk acara dan eventmu. Daftarkan tiket acara, 
            konser, festival, hingga pertunjukanmu untuk menikmati keuntungannya!
        </p>
        
        <Link to={`/partner`}>
            <button className="btn btn-primary">Gabung Sekarang</button>
        </Link>
    </>
    );
};

export default Join;



