import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Card({ ...props }: Cars) {
  return (
    <div
      className={cn(
        "w-[19.1875rem] py-12 pl-[3.0625rem] pr-[2.9688rem] text-start lg:pl-12",
        props.colors.background,
      )}
    >
      <Image src={props.content.icon} alt={props.content.title} />
      <p className="mt-[2.1875rem] font-bigShoulder text-card-heading uppercase text-[#F2F2F2]">
        {props.content.title}
      </p>
      <p className="mt-[1.5625rem] font-lexend text-card-description text-white opacity-75">
        {props.content.description}
      </p>
      <Link
        href="#"
        className={cn(
          "mt-[1.5625rem] flex h-12 w-[9.125rem] items-center justify-center rounded-[1.5625rem] border-[.125rem] border-transparent bg-[#F2F2F2] font-lexend text-card-button transition-colors hover:border-white hover:bg-transparent hover:text-white lg:mt-[5.1875rem]",
          props.colors.text,
        )}
      >
        Learn More
      </Link>
    </div>
  );
}
