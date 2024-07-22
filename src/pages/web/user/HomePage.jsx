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
import Slider from "../../../components/slider"
import Unggul from "../../../components/unggulan"
import Accordion from "../../../components/Accordion"
import Join from "../../../components/JoinPartner"
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
      <div className="flex flex-col gap-y-12 justify-center items-center">
        <div className="flex flex-row xs:p-2 sm:w-5/6">
          <div className="md:w-1/2 flex flex-col px-4 gap-y-6">
            <h1 className="text-4xl">Bebas Calo,<br/><span className="text-[#DCFE52]">Nikmati Acara</span></h1>
            <p className='pe-2' style={{ textAlign: 'justify' }}>
                Misi kami adalah memberikan pengalaman pembelian tiket yang aman dan adil, 
                melindungi konsumen dan penyelenggara dari penipuan. Nikmati acara Anda dengan 
                tenang bersama Calo!.
            </p>    
            
            <div className="flex flex-row gap-x-2">
                <Link to={`/login`}>
                    <button className="btn btn-primary">Masuk</button>
                </Link>
                <Link to={`/register`}>
                    <button className="btn btn-outline btn-primary">Daftar</button>
                </Link>
            </div>
            
            <div className="flex flex-row">
                <div className="w-2/6 md:w-1/6">
                    <h3 className="text-xl lg:text-3xl">98K+</h3>
                    <p>Tiket</p>
                </div>
                <div className="w-2/6 md:w-1/6">
                    <h3 className="text-xl lg:text-3xl">12K+</h3>
                    <p>Mitra</p>
                </div>
                <div className="w-2/6 md:w-1/6">
                    <h3 className="text-xl lg:text-3xl">15K+</h3>
                    <p>Acara</p>
                </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
              <img className="h-80" src="../../../../src/assets/background/icon-in-home.svg" alt="" />
          </div>
        </div>

        <div className="flex flex-col ml-3 gap-y-2 md:flex-row md:gap-y-3 w-5/6">
            <div className="md:w-1/3">
                <h1 className="md:w-4/5 text-2xl lg:text-3xl text-[#DCFE52] text-center md:text-start">KEUNGGULAN CALO APA SIH ?</h1>
            </div>
            <div className="md:w-1/3 flex flex-row">
                <div className="W-1/6 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg>
                </div>
                <div className="w-5/6 ml-2">
                    <h1 className="text-lg font-bold">Transaksi Cepat</h1>
                    <p>
                        Transaksi yang cepat dan efisien, 
                        memastikan pengalaman pengguna yang lancar dan 
                        efektif dalam mendapatkan tiket.
                    </p>
                </div>
            </div>
            <div className="md:w-1/3 flex flex-row gap-x-2">
                <div className="W-1/6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                        <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                    </svg>
                </div>
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

        <div className="flex flex-col items-center justify-center text-center gap-y-4">
            <Join />
        </div>

        <div className="flex flex-col w-5/6 gap-y-4">
            <h1 className="text-[#DCFE52] text-3xl px-4">Artis Unggulan</h1>
            <Unggul />
        </div>
        

        <div className="flex flex-col sm:w-5/6 gap-y-4">
            <h1 className="text-[#DCFE52] text-3xl px-4">Yang Akan Datang</h1>
            <Slider />
        </div>

        <div className="flex h-[16rem] w-screen sm:h-[24rem] lg:h-[25rem] bg-gradient-to-b from-customStart to-customEnd text-white">
            <div className="flex flex-col sm:w-1/2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl sm:ml-12 lg:ml-24 lg:pl-4 justify-center gap-y-11">
                <h1>Makin gampang mengelola tiket dengan <span className="text-[#DCFE52] italic">Calo! App</span></h1>
                <button className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                    <div class="mr-3">
                        <svg viewBox="30 336.7 120.9 129.2" width="30">
                            <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                            <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                            <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                            <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                        </svg>
                    </div>
                    <div>
                        <div class="text-xs">GET IT ON</div>
                        <div class="text-xl font-semibold font-sans -mt-1">Google Play</div>
                    </div>
                </button>
            </div>
            <div className="hidden sm:flex relative w-1/2 pl-12">
                <img src="../../src/assets/icons/iphone.svg" className="absolute bottom-0 right-4 md:right-16 lg:right-20 w-80" alt="" />
            </div>
                {/* <img src="../../src/assets/icons/iphone.svg" className="w-80 mr-[120px] lg:ml-[70px] xl:ml-[120px] mt-[63px]" alt="" /> */}
        </div>

        <div className="mt-11">
            <h1 className="text-[#DCFE52] text-3xl px-4">Frequently asked questions</h1>
            <Accordion title={"Apakah saya bisa membatalkan/mengubah pesanan saya?"}>
                Apakah saya bisa membatalkan/mengubah pesanan saya?
            </Accordion>
            <Accordion title={"Bagaimana cara menghubungi tim dukungan Calo!"}>
                Bagaimana cara menghubungi tim dukungan Calo! 
            </Accordion>
            <Accordion title={"Apa langkah-langkahnya untuk melakukan pembelian?"}>
                Apa langkah-langkahnya untuk melakukan pembelian?
            </Accordion>
        </div>

    </div>
  );
}

export default HomePage;