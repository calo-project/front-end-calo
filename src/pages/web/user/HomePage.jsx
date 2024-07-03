import { useState, useEffect } from "react";
import reactLogo from "../../../assets/icons/react.svg";
import { ethers } from "ethers";

import CaloToken from "../../../abis/CaloToken.json";
import config from "../../../config/config.json";
import Marquee from "../../../components/magicui/marquee";

import { cn } from "../../../../lib/utils";
import GridPattern from "../../../components/magicui/grid-pattern";
import AnimatedGridPattern from "../../../components/magicui/animated-grid-pattern";
import SparklesText from "../../../components/magicui/sparkles-text";
import { BorderBeam } from "../../../components/magicui/border-beam";
import OrbitingCircles from "../../../components/magicui/orbiting-circles";


const HomePage = () => {
  return (
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col px-4 gap-y-6">
            <h1>Bebas Calo,<br/>Nikmati Acara</h1>
            <p className='pe-2' style={{ textAlign: 'justify' }}>
                Misi kami adalah memberikan pengalaman pembelian tiket yang aman dan adil, 
                melindungi konsumen dan penyelenggara dari penipuan. Nikmati acara Anda dengan 
                tenang bersama Calo!.
            </p>    
            
            <div className="flex flex-row gap-x-2">
                <button className="btn btn-primary">Masuk</button>
                <button className="btn btn-outline btn-primary">Crott</button>
            </div>
            
            <div className="flex flex-row">
                <div className="w-1/6">
                    <h3 className="text-3xl">98K+</h3>
                    <p>Tiket</p>
                </div>
                <div className="w-1/6">
                    <h3 className="text-3xl">12K+</h3>
                    <p>Mitra</p>
                </div>
                <div className="w-1/6">
                    <h3 className="text-3xl">15K+</h3>
                    <p>Acara</p>
                </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="w-1/2">
              <h1>GAMBARRRR</h1>
          </div>
        </div>

        <div className="flex flex-row">
            <div className="w-1/3 ml-3">
                <h1 className="w-4/5 text-3xl">KEUNGGULAN CALO APA SIH ?</h1>
            </div>
            <div className="w-1/3 flex flex-row gap-x-2">
                <div className="W-1/6">Icon</div>
                <div className="w-5/6">
                    <h1 className="text-lg font-bold">Transaksi Cepat</h1>
                    <p>
                        Transaksi yang cepat dan efisien, 
                        memastikan pengalaman pengguna yang lancar dan 
                        efektif dalam mendapatkan tiket.
                    </p>
                </div>
            </div>
            <div className="w-1/3 flex flex-row gap-x-2">
                <div className="W-1/6">Icon</div>
                <div className="w-5/6">
                    <h1 className="text-lg font-bold">Transaksi Pertumbuhan</h1>
                    <p>
                        Mengakselerasi Perkembangan dengan Transaksi 
                        yang Efisien dan Cepat, Membawa Pengalaman 
                        Pengguna yang Lebih Baik.
                    </p>
                </div>
            </div>
        </div>

    </div>
  );
}

export default HomePage;