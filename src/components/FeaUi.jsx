import { HoverEffect } from "./Ui/card-hover-effect";

export default function CardHoverEffectDemo() {
    return (
      <div className="max-w-6xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    );
  }
  
  export const projects = [
    {
      title: "Cheapest TXs",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
      link: "https://stripe.com",
      image: "/Features/doller.png"
    },
    {
      title: "CerTIK",
      description: "We are Audited by Certik.CertiK is the leading security-focused ranking platform to",
      link: "https://netflix.com",
      image: "/Features/sheild.png"
    },
    {
      title: "No Contact Sells",
      description: "No contract sells to fund the marketing wallets",
      link: "https://google.com",
      image: "/Features/phone.png"
    },
    {
      title: "CrossDex Support",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
      link: "https://meta.com",
      image: "/Features/bar.png"
    }
  ];