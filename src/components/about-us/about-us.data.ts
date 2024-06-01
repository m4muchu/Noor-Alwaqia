import { IAboutUs } from "./type";
import TomatoImage from "@/public/tomato.svg";
import GreenApple from "@/public/green-apple.svg";
import TopQuality from "@/public/top-quality.svg";

export const aboutUsData: IAboutUs[] = [
  {
    icon: GreenApple,
    title: "100% Natural",
    subtitle:
      "We focus on supplying fruits and vegetables that are grown in natural conditions, direct from farm  with all the important measures taken. Our motto is to provide best products and with premium quality. Your satisfactory is our responsibility. We are accountable for what we deliver and commitment.",
  },
  {
    icon: TopQuality,
    title: "Top Quality",
    subtitle:
      "Fruits and Vegetables from Noor Al waqiah undergo various Quality checks and meet all the Food Standards and Hygiene checks. You can be assured and be stress free when it comes to Noor al waqiah.",
  },
  {
    icon: TomatoImage,
    title: "100% Fresh",
    subtitle:
      "Our fresh fruits and vegetables are grown or produced without the use of synthetic pesticides or fertilizers, without GMO ingredients, without chemical food additives or artificial food-ripening substances, and without irradiation. Hence it is safe , fresh to consume and its nutritions are not lost in various stages before consumption.",
  },
];
