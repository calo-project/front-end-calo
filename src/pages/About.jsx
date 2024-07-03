import React from "react";
import SparklesText from "../components/magicui/sparkles-text";
import AnimatedGridPattern from "../components/magicui/animated-grid-pattern";
import { cn } from "../../lib/utils";

export default function InternalPage() {
  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background md:shadow-xl">
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
      </div>
    </>
  );
}
