import Image from "next/image";
import Banner from "@/components/Home/Banner";
import NewsMarquee from "@/components/Home/Marquee";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <NewsMarquee />
        <Banner />
        <FeaturedBooks></FeaturedBooks>
        <Stats></Stats>
        <Testimonials></Testimonials>        
      </main>
    </div>
  );
}
