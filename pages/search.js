import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import SearchData from "../components/data/SearchData.json";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} guests`}
      ></Header>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {" "}
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3 
            text-gray-800 whitespace-nowrap"
          >
            <p className="button">Cancellation Flexibility</p>

            <p className="button">Type Of Place</p>
            <p className="button">Price</p>

            <p className="button">Rooms And Beds</p>
            <p className="button">More Filters</p>
          </div>


      <div className="flex flex-col">
          {SearchData?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                title={item.title}
                location={item.location}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}

              ></InfoCard>
            ))}

</div>

        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Search;
