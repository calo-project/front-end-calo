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

const HomePage = () => {
  return (
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col px-4 gap-y-6">
            <h1 className="text-4xl">Bebas Calo,<br/><span className="text-[#DCFE52]">Nikmati Acara</span></h1>
            <p className='pe-2' style={{ textAlign: 'justify' }}>
                Misi kami adalah memberikan pengalaman pembelian tiket yang aman dan adil, 
                melindungi konsumen dan penyelenggara dari penipuan. Nikmati acara Anda dengan 
                tenang bersama Calo!.
            </p>    
            
            <div className="flex flex-row gap-x-2">
                <button className="btn btn-primary">Masuk</button>
                <button className="btn btn-outline btn-primary">Daftar</button>
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
          <div className="w-1/2">
              <h1>GAMBARRRR</h1>
          </div>
        </div>

        <div className="flex flex-col ml-3 gap-y-2 md:flex-row md:gap-y-3 ">
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
            <h1 className="text-5xl">yuk jadi partner<br/>
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
            <button className="btn btn-primary">Gabung Sekarang</button>
        </div>

        <h1 className="text-[#DCFE52] text-3xl px-4">Artis Unggulan</h1>
        <Unggul />
        {/* <div className="flex flex-wrap  items-center justify-center text-center gap-y-6">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>1</h1>
                <img src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" className="w-14 h-14 rounded-full" alt="" />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
        </div> */}
        

        <h1 className="text-[#DCFE52] text-3xl px-4">Yang Akan Datang</h1>
        <Slider />


    </div>
  );
}

export default HomePage;