import Head from "next/head";
import LunchMenu from "../components/LunchMenu";
import { FeaturesPage, Landing, TickerPage, VideoPage } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mumtaz Family Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <FeaturesPage />
      <VideoPage />
      <LunchMenu />
      <TickerPage />
    </div>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return {
    props: {},
  };
}
