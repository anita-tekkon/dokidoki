import Feature from "../components/Feature";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { COMPANY_NAME } from "../env";
import Testimoni from "../components/Testimoni";

export default function Home() {
  return (
    <>
      <SeoHead title={`${COMPANY_NAME} Landing Page`} />
      <Layout>
        <Hero />
        <Feature />
        <Services />
        <Testimoni />

      </Layout>
    </>
  );
}
