"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

interface Animated3DPinProps {
  title: string;
  href: string;
  heading: string;
  description: string;
  image?: string;
}

export function Animated3DPin({ title, href, heading, description,image }: Animated3DPinProps) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white text-[12px]">
              {description}
            </span>
          </div>
          {image ? (
            <div className="relative flex-1 w-full h-full mt-4 rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Card image"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white-100 via-white-300 to-white-500 opacity-10 z-10" />
            </div>
          ) : (
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          )}
        </div>
      </PinContainer>
    </div>
  );
}