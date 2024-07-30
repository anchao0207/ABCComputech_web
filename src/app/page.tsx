import Image from "next/image";
import NavBar from "@components/components/NavBar";
import LandingCarousel from "@components/components/LandingCarousel";
import LandingServices from "@components/components/LandingServices";
import LandingAbout from "@components/components/LandingAbout";
import LandingManage from "@components/components/LandingManage";
import SoftwareDevelpoment from "@components/components/SoftwareDevelopment";
import Clients from "@components/components/Clients";
import Footer from "@components/components/Footer";
import Reviews from "@components/components/Reviews";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-stone-50 via-cyan-300 to-teal-500">
      <NavBar></NavBar>
      <section className="flex flex-col w-full space-y-5 md:space-y-10">
        <LandingCarousel></LandingCarousel>
        <LandingServices />
        <LandingAbout></LandingAbout>
        <Reviews/>
        <LandingManage></LandingManage>
        <SoftwareDevelpoment/>
        <Clients></Clients>
        <Footer></Footer>
      </section>
    </main>
  );
}
