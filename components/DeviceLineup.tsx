"use client";

import Image from "next/image";

/**
 * Apple device lineup in the WorkSlop website's hero frames
 * (laptop: 9px border, light silver base + center notch;
 * phone: 6px border, 26px radius, Dynamic Island at top 7px
 * with the camera dot, overlapping the laptop's bottom-right
 * corner, width 26.5% of the composition).
 * Screen contents are deliberately minimal on the owner's
 * order: the phone shows just the Apple logo, the laptop
 * shows just code. The previous WorkSlop UI screenshots are
 * still in public/images and can be put back in one step.
 * Decorative only.
 */
const KW = "text-[#ff79c6]";
const TY = "text-[#8be9fd]";
const ST = "text-[#50fa7b]";
const CM = "text-[#6272a4]";
const PL = "text-[#f8f8f2]";

function Line({ indent = 0, children }: { indent?: number; children: React.ReactNode }) {
  return (
    <div className={indent === 0 ? undefined : indent === 1 ? "pl-4" : indent === 2 ? "pl-8" : "pl-12"}>
      {children}
    </div>
  );
}

export default function DeviceLineup() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto mb-8 mt-10 w-full max-w-[670px] pb-[30px] pl-2 pr-[62px] pt-[34px]"
    >
      {/* MacBook — WorkSlop hero laptop frame, screen shows code */}
      <div className="relative">
        <div className="relative aspect-[1240/820] overflow-hidden border-[9px] border-b-[12px] border-[#0d1117] bg-[#0d1117] shadow-[0_24px_50px_rgba(13,32,84,0.22)] [border-radius:14px_14px_4px_4px]">
          <div className="flex h-7 items-center gap-1.5 px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[10px] text-[#6b7a99] sm:text-[11px]">
              ContentView.swift
            </span>
          </div>
          <div className="px-4 font-mono text-[10px] leading-[1.7] sm:text-[13px]">
            <Line>
              <span className={CM}>{"// Adnan.120hz — iOS research"}</span>
            </Line>
            <Line>
              <span className={KW}>import</span> <span className={PL}>SwiftUI</span>
            </Line>
            <Line>
              <span className={PL}>&nbsp;</span>
            </Line>
            <Line>
              <span className={KW}>struct</span> <span className={TY}>ContentView</span>
              <span className={PL}>: View {"{"}</span>
            </Line>
            <Line indent={1}>
              <span className={KW}>var</span> <span className={PL}>body: </span>
              <span className={KW}>some</span> <span className={TY}>View</span>
              <span className={PL}> {"{"}</span>
            </Line>
            <Line indent={2}>
              <span className={TY}>Text</span>
              <span className={PL}>(</span>
              <span className={ST}>"Hello, iOS"</span>
              <span className={PL}>)</span>
            </Line>
            <Line indent={3}>
              <span className={PL}>.font(.</span>
              <span className={TY}>largeTitle</span>
              <span className={PL}>)</span>
            </Line>
            <Line indent={2}>
              <span className={PL}>{"}"}</span>
            </Line>
            <Line indent={1}>
              <span className={PL}>{"}"}</span>
            </Line>
            <Line>
              <span className={PL}>{"}"}</span>
            </Line>
          </div>
          {/* Jailbreak-style Apple logo beside the code: white logo
              with cyan/magenta glitch-split fringes on black. */}
          <div aria-hidden="true" className="absolute right-[7%] top-1/2 w-[26%] -translate-y-1/2 sm:right-[12%]">
            <div className="relative">
              <Image
                src="/images/apple-logo-magenta.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
                className="absolute inset-0 h-auto w-full -translate-x-[4px] opacity-80 mix-blend-screen"
              />
              <Image
                src="/images/apple-logo-cyan.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
                className="absolute inset-0 h-auto w-full translate-x-[4px] opacity-80 mix-blend-screen"
              />
              <Image
                src="/images/apple-logo.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative -mx-[4%] h-[13px] rounded-b-[12px] rounded-t-[2px] bg-gradient-to-b from-[#d7dee8] to-[#a7b2c2] shadow-[0_10px_24px_rgba(13,32,84,0.18)]">
          <span className="absolute left-1/2 top-0 h-[5px] w-[110px] -translate-x-1/2 rounded-b-[8px] bg-[#8d99ab]" />
        </div>
      </div>

      {/* iPhone — WorkSlop hero phone frame, screen shows the Apple logo */}
      <div className="absolute bottom-0 right-0 z-[3] w-[clamp(96px,26.5%,178px)]">
        <div className="relative flex aspect-[900/1948] items-center justify-center overflow-hidden border-[6px] border-[#0d1117] bg-black shadow-[0_20px_44px_rgba(13,32,84,0.35)] [border-radius:26px]">
          <Image
            src="/images/apple-logo.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
            className="h-auto w-[42%]"
          />
          <span className="absolute left-1/2 top-[7px] z-[2] aspect-[3.35] w-[34%] -translate-x-1/2 rounded-full bg-[#05070a]">
            <span className="absolute right-[11%] top-1/2 aspect-square h-[52%] -translate-y-1/2 rounded-full bg-[#16202e] shadow-[inset_0_0_2px_1px_rgba(90,130,190,0.35)]" />
          </span>
        </div>
      </div>
    </div>
  );
}
