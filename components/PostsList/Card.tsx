// Card.jsx
import Reac from "react";
import { FaThumbsUp, FaComments, FaThumbsDown } from "react-icons/fa";
import { truncateText } from "@/helper/helpers";
import { useRouter } from "next/router";


interface CardProps {
  post: any;
}

const Card: React.FC<CardProps> = ({ post }) => {
  const router = useRouter();

  const numberdate = post.created_utc;
  const dateFormatted = new Date(numberdate * 1000);
  const finalDate = dateFormatted.toLocaleString("default", {
    day: "numeric",
    month: "short",
  });

  return (
    <section className="w-full">
      <div className="w-full mt-6 z-20 shadow-custom hover:shadow-custom-hover h-[30rem] lg:h-64 flex md:flex-col lg:flex-row flex-col">
        <div className=" h-full lg:h-[95%] md:w-[90%] w-[90%] m-3 bg-cover rounded-lg bg-no-repeat bg-[url(https://picsum.photos/300/300)] lg:w-[40%]">
          <button className="btn px-1 btn-primary m-3">{finalDate}</button>
        </div>
        <div className="px-4 w-full ">
          <div className="h-4/5">
            <h3 className="font-bold text-lg lg:text-2xl">
              {truncateText(post.title, 30)}
            </h3>
            <p className="overflow-hidden">{truncateText(post.selftext, 90)}</p>
            <p className="italic">posted by:{post.author}</p>
          </div>
          <div className="h-1/5 flex">
            <div className="svg-sm">
              {<FaThumbsUp className="w-full h-full fill-primary" />}
              <span className="indicator-c text-white bg-black">
                +{post.score}
              </span>
            </div>
            <div className="svg-sm">
              {<FaComments className="w-full h-full fill-accent" />}
              <span className="indicator-c bg-white text-black">
                +{post.num_comments}
              </span>
            </div>
            <div className="svg-sm">
              {<FaThumbsDown className="w-full h-full fill-primary" />}
              <span className="indicator-c text-white bg-black">
                +{post.downs}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
