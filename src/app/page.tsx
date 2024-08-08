import LandingCarousel from "@components/components/LandingCarousel";
import LandingServices from "@components/components/LandingServices";
import LandingAbout from "@components/components/LandingAbout";
import LandingManage from "@components/components/LandingManage";
import SoftwareDevelpoment from "@components/components/SoftwareDevelopment";
import Clients from "@components/components/Clients";
import Reviews from "@components/components/Reviews";
import Layout from "@components/components/Layout";

export default function Home() {
  return (
    <Layout>
      <LandingCarousel></LandingCarousel>
      <LandingServices />
      <LandingAbout title="COMPUTECH" subtitle="Business IT Solution" desc="Abccomputech is dedicated to providing first class IT services to
            businesses that want to grow and cut costs. With monthly rates, and
            our month to month plan you get strategic IT support. Our goal is to
            give you a better service with the lower cost and help you reach
            your business goals. We value long term relationships with out
            clients and will work closely with your business to ensure that you
            have the resources you need to be successful." connectButton={true}></LandingAbout>
      <Reviews />
      <LandingManage></LandingManage>
      <SoftwareDevelpoment />
      <Clients></Clients>
    </Layout>
    // <main className="flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-stone-50 via-cyan-300 to-teal-500">
    //   <NavBar></NavBar>
    //   <section className="flex flex-col w-full space-y-5 md:space-y-10">
    //     <LandingCarousel></LandingCarousel>
    //     <LandingServices />
    //     <LandingAbout></LandingAbout>
    //     <Reviews/>
    //     <LandingManage></LandingManage>
    //     <SoftwareDevelpoment/>
    //     <Clients></Clients>
    //     <Footer></Footer>
    //   </section>
    // </main>
  );
}
