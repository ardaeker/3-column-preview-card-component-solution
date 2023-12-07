import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Card({ ...props }: Cars) {
  return (
    <div
      className={cn(
        "w-[19.1875rem] py-12 pl-[3.0625rem] pr-[2.9688rem] text-start lg:pl-12",
        props.colors.background,
      )}
    >
      <Image src={props.content.icon} alt={props.content.title} />
      <p className="font-bigShoulder text-card-heading mt-[2.1875rem] uppercase text-[#F2F2F2]">
        {props.content.title}
      </p>
      <p className="font-lexend text-card-description mt-[1.5625rem] text-white opacity-75">
        {props.content.description}
      </p>
      <button
        className={cn(
          "text-card-button font-lexend mt-[1.5625rem] h-12 w-[9.125rem] rounded-[1.5625rem] border-[.125rem] border-transparent bg-[#F2F2F2] transition-colors hover:border-white hover:bg-transparent hover:text-white lg:mt-[5.1875rem]",
          props.colors.text,
        )}
      >
        Learn More
      </button>
    </div>
  );
}
