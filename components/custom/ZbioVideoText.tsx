import { VideoText } from "../magicui/video-text";

interface ZbioVideoTextProps {
  text?: string;
  src?: string;
}

export default function ZbioVideoText({ text, src }: ZbioVideoTextProps){
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      <VideoText src={src || "bg-pattern.mp4"}>
         {text}
      </VideoText>
      
    </div>
  )
}