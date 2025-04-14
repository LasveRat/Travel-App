import React from "react";

type Props = {
  image: string;
  title: string;
  date: string;
};

const NewsCard = ({ date, image, title }: Props) => {
  return (
    <div>
      <div className="h-[300px]">
        {/* Image */}
        <img
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg cursor-pointer"
        />
      </div>
      {/* content */}
      <h1 className="mt-6 text-lg font-semibold text-gray-950 hover:text-blue-950 transition-all duration-200">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3 font-medium">{date}</p>
    </div>
  );
};

export default NewsCard;
