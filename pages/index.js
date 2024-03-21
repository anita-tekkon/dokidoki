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
      {/* <SeoHead title={`${COMPANY_NAME} Landing Page`} /> */}
      <div
        style={{
          height: '100vh',
          margin: 'auto',
          position: 'relative'
        }}
      >

        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal"

          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
          }}>
          <strong>OOPS </strong>
          <br />
          <p className="my-16"><strong>Wrong Site</strong>.</p>


        </h1>
      </div >
    </>
  );
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
