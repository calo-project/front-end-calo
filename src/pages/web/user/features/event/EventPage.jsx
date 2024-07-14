import React from "react";
import SparklesText from "../../../../../components/magicui/sparkles-text";
import AnimatedGridPattern from "../../../../../components/magicui/animated-grid-pattern";
import { cn } from "../../../../../../lib/utils";
import Card from "../../../../../../src/components/Event"

export default function InternalPage() {
  return (
    <>
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

      <div className="mb-6">
        <img className="w-screen" src="../../../../../../src/assets/background/BG-event.svg" alt="" />
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="flex w-5/6">
          <div className="w-1/2">
            <h1 className="text-3xl">Discover</h1>
            <h1 className="text-sm text-[#637592]">123 items listed</h1>
          </div>
          <div className="flex w-1/2 items-center justify-end gap-x-2">
            <button className="btn btn-primary w-44 justify-start">Newest</button>
            <button className="btn btn-primary bg-transparent text-[#681BC1] font-bold">
              Filter
            </button>
          </div>
        </div>
      </div>

      <Card/>
    </>
  );
}
