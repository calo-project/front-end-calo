import React from "react";
import SparklesText from "../../../../../components/magicui/sparkles-text";
import AnimatedGridPattern from "../../../../../components/magicui/animated-grid-pattern";
import { cn } from "../../../../../../lib/utils";
import Slider from "../../../../../components/slider"
import Join from "../../../../../components/JoinPartner"

export default function InternalPage() {
  return (
    <div className="flex flex-col gap-y-5 overflow-hidden justify-center items-center">
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
          <Join />
      </div>
      <div className="flex flex-col w-5/6">
        <h1 className="text-[#DCFE52] text-center text-xl sm:text-3xl mt-11 mb-5">Selalu update dunia Konser bersama Calo!</h1>
        <Slider/>
      </div>


    </div>
  );
}
