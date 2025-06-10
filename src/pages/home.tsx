import { ImageLazy } from "@/components/ui/imageLazy";
import { LinksCard } from "@/components/view/linksCard";
import { Link } from "react-router";

import rateLimitImg from "@/assets/images/rate-limit.jpeg";

export const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-1 max-w-2xl h-screen py-30 m-auto ">
      <h1 className="text-3xl font-bold">Woovi Tecnical Challenge</h1>
      <h2 className="text-md">
        Developed by{" "}
        <Link to="https://github.com/CaueFer" className="hover:underline">
          Caue Fernandes
        </Link>
      </h2>
      <LinksCard />

      <div className="flex flex-col justify-center items-start mt-7">
        <h3 className="font-bold mt-10">Challenge</h3>
        <p>
          Develop a PIX transaction API with Rate Limiting, URL Owners,
          Authentication, and using the Token Bucket Algorithm.{" "}
        </p>

        <h3 className="font-bold mt-10">Rate Limit Strategy</h3>
        <p>
          The Token Bucket algorithm was implemented, with each user allocated a
          bucket of 10 tokens for spending and a refill rate of 1 token/hour.
        </p>
        <ImageLazy
          className="mt-3"
          src={rateLimitImg}
          alt="Token Bucket Rate Limit"
        />
      </div>
    </div>
  );
};
