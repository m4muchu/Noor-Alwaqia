import { IAboutUs } from "./type";
import TomatoImage from "@/public/tomato.svg";
import GreenApple from "@/public/green-apple.svg";
import TopQuality from "@/public/top-quality.svg";

export const aboutUsData: IAboutUs[] = [
  {
    icon: GreenApple,
    title: "100% Natural",
    subtitle:
      "We focus on supplying fruits and vegetables that are grown in natural conditions with all the important measures taken.",
  },
  {
    icon: TomatoImage,
    title: "100% Fresh",
    subtitle:
      "Our customer’s health is our utmost priority, and hence we deal with freshly grown fruits and vegetables having minimum use of pesticides.",
  },
  {
    icon: TopQuality,
    title: "Top Quality",
    subtitle:
      "Fruits and Vegetables from Shrayan Al Jazeera undergo various Quality checks and meet all the Food Standards and Hygiene checks.",
  },
];
