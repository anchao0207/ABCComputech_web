import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactElement } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-stone-50 via-cyan-300 to-teal-500">
      <NavBar></NavBar>
      <section className="flex flex-col w-full space-y-5 md:space-y-10">
        {children}
        <Footer />
      </section>
    </main>
  );
}
