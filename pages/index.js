import Head from "next/head";
import LunchMenu from "../components/LunchMenu";
import { FeaturesPage, Landing, TickerPage, VideoPage } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mumtaz Family Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
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
