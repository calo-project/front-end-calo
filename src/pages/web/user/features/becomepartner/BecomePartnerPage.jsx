import React from "react";
import SparklesText from "../../../../../components/magicui/sparkles-text";
import AnimatedGridPattern from "../../../../../components/magicui/animated-grid-pattern";
import { cn } from "../../../../../../lib/utils";
import Slider from "../../../../../components/slider"
export default function InternalPage() {
  return (
    <div className="flex flex-col gap-y-5">
      {/* <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <SparklesText text="Calo: Beli Tiket" />;
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(center,white,transparent,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div> */}
      <div className="flex flex-col items-center justify-center text-center gap-y-4 mt-11">
          <h1 className="text-3xl">yuk jadi partner<br/>
            <span className="relative inline-block text-lg mt-2">
                <svg
                    className="absolute inset-0"
                    viewBox="0 0 460 60"
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
          <p className="md:w-2/5">
              Bergabunglah dengan Calo dan rasakan kemudahan menyambut lebih 
              banyak pengunjung untuk acara dan eventmu. Daftarkan tiket acara, 
              konser, festival, hingga pertunjukanmu untuk menikmati keuntungannya!
          </p>
          <button className="btn btn-primary">Gabung Sekarang</button>
      </div>

      <h1 className="text-[#DCFE52] text-center text-3xl mt-11">Selalu update dunia Konser bersama Calo!</h1>
      
      <Slider/>


    </div>
  );
}
