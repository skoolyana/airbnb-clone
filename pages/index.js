import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ExploreData from "../components/data/ExploreData.json";
import CardData from "../components/data/CardData.json";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

export default function Home({ exploreData, cardData }) {
  exploreData;

  return (
    <div className="">
      <Head>
        <title>Sunil Papa Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore NearBy</h2>

          {/*  Pull some data from a server-API end points*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ExploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              ></SmallCard>
            ))}
          </div>
        </section>
        <section>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {CardData?.map((item) => (
              <MediumCard
                key={item.img}
                img={item.img}
                title={item.title}
              ></MediumCard>
            ))}
          </div>
        </section>

        <LargeCard img='https://links.papareact.com/4cj' 
        title='The Greatest OutDoors'
        description='WishList Curated By Airbnb.'
        buttonText='Get Inspired'
        
        ></LargeCard>      


      </main>
    </div>
  );
}
