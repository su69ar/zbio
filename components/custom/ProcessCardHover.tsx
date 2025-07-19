'use client'
import { HoverEffect } from "../ui/card-hover-effect";

export function ProcessCardHover() {
  return (
    <div className="max-w-5xl ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: 'On-site',
    description: 'On-site at your hotel, restaurant, F&B factory',
  },
  {
    title: 'ZBio',
    description: "at ZBio's facility",
  },
  {
    title: 'Plasma Sites',
    description:
      'At our plasma sites (livestock farms & waste management sites)',
  },
]
