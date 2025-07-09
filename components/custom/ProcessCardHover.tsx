'use client'
import { HoverEffect } from "../ui/card-hover-effect";

export function ProcessCardHover() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Process Option 1",
    description:
      "On-site at your hotel, restaurant, F&B factory",

  },
  {
    title: "Process Option 2",
    description:
      "at ZBio's facility",

  },
  {
    title: "Process Option 3",
    description:
      "At our plasma sites (livestock farms & waste management sites)",

  },
];
