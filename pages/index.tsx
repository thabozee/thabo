import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Profile from "@/components/profile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {" "}
      <div className="flex flex-col w-full h-screen">
        <Navbar />
        <Hero />
        <Profile />
        <Body />
        <Footer />
      </div>
    </>
  );
}
