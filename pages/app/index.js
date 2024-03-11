import Layout from "./Layout";
import Wmap from "./../../public/assets/Icon/WM.png";

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="font-semibold text-4xl text-primary">Live GPU NetTAO</h1>
        <div className="mx-auto w-full p-6">
          <img src={Wmap.src} className="mx-auto overflow-auto" />
        </div>
        <div></div>
      </Layout>
    </>
  );
}
