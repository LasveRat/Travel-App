import React from "react";
import SectionHeading from "../../Helpers/SectionHeading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section Heading */}
      <SectionHeading heading="Exciting Travel News for You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCard
            image="/images/n1.jpg"
            title="Chasing Sunsets in Uluwatu: The Cliffside Paradise"
            date="October 2, 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Discover the Hidden Gems of Bali. A Guide to Off-the-Beaten-Path."
            date="October 10, 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/images/n3.jpg"
            title="Sacred Waters: Visiting Tirta Empul Temple"
            date="October 17, 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCard
            image="/images/n4.jpg"
            title="Jungle Adventures in Sidemen Valley"
            date="October 25, 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
