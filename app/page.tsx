import Card from "@/components/Card";
import Author from "@/components/Author";

import SuvIcon from "@/images/icon-suvs.svg";
import SedanIcon from "@/images/icon-sedans.svg";
import LuxuryIcon from "@/images/icon-luxury.svg";

const list: Cars[] = [
  {
    id: 1,
    category: "Sedan",
    content: {
      icon: SedanIcon,
      title: "Sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    colors: {
      text: "text-[#E28625]",
      background: "bg-[#E28625]",
    },
  },
  {
    id: 2,
    category: "Suv",
    content: {
      icon: SuvIcon,
      title: "Suvs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    colors: {
      text: "text-[#006971]",
      background: "bg-[#006971]",
    },
  },
  {
    id: 3,
    category: "Luxury",
    content: {
      icon: LuxuryIcon,
      title: "Luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
    },
    colors: {
      text: "text-[#004140]",
      background: "bg-[#004140]",
    },
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-min flex-col items-center bg-[#F2F2F2] px-6 py-[5.5rem] lg:flex-row lg:justify-center lg:p-0">
      <div className="max-w-[20.4375rem] overflow-hidden rounded-lg lg:flex lg:max-w-[57.5rem] ">
        {list.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Author />
    </main>
  );
}
