import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import AboutFeature from "../components/AboutFeature";
import RoadMap from "../components/RoadMap";
import ReadyStart from "../components/ReadyStart";

export default function Home() {
  return (
    <>
      <SeoHead title="NetTao AI" />
      <Layout>
        <Hero />
        <Feature />
        <AboutFeature />
        <RoadMap />
        <ReadyStart />
      </Layout>
    </>
  );
}
