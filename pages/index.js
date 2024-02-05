import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { COMPANY_NAME } from "../env";

export default function Home() {
  return (
    <>
      <SeoHead title={`${COMPANY_NAME} Landing Page`} />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
