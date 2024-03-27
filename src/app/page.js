import Image from "next/image";
import HomeNavbar from "./component/HomeNavbar";
import Banner from "./component/Banner";
import CardVideoSection from "./component/CardVideoSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="">
      <HomeNavbar />
      <Banner />
      <CardVideoSection />
      <Footer />
    </main>
  );
}
