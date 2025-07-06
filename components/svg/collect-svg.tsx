import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  src: string;
  className?: string;
}

export const CollectSVG = ({ src, className, ...props }: SvgIconProps) => {
  return (
    <svg className={className} {...props}>
      <use href={src} />
    </svg>
  );
};