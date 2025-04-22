import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter, FaPinterest } from "react-icons/fa";

const Product_Card = ({ title, price, image }) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-white transition-all duration-500 hover:border-amber-900 hover:scale-105 cursor-pointer px-4 py-2 shadow-lg ">
      <div>
        <Image src={image} alt="Dires" width={200} height={200} />
      </div>
      <h2 className="text-amber-900 font-extrabold text-3xl">{title}</h2>
      <p className="text-2xl font-bold mt-2">$ {price}</p>
    </div>
  );
};

export default Product_Card;

export const Team_Card = ({ name, profession, image }) => {
  return (
    <div className="  border   border-amber-400  w-[270px]">
      <div className="h-[200px] flex items-center justify-center bg-amber-400">
        <Image
          src={image}
          alt="Dires"
          width={150}
          height={150}
          className="rounded-full transition-all duration-500 border-8   hover:border-amber-900"
        />
      </div>
      <div className="h-[40%] flex flex-col items-center justify-center text-center mt-4 bg-white gap-6">
        <h2 className="text-4xl md:text-4xl font-bold font-serif text-amber-900 ">
          {name}
        </h2>
        <p className="font-extralight md:text-2xl ">{profession}</p>

        <div className="flex gap-4  mb-5  ">
          <FaPinterest />
          <FaTwitter />
          <TiSocialFacebook />
          <TfiYoutube />
        </div>
      </div>
    </div>
  );
};

export const Blog_Post_Card = ({
  image,
  title,
  description,
  date,
  comments,
  author,
}) => {
  <div>
    <div className="relative w-[80%] h-[50%]">
      <Image src={image} alt={title} fill />
    </div>
    <div>
      <h2 className="">{title}</h2>
      <ul>
        <li>{author}</li>
        <li>{date}</li>
        <li>{comments}</li>
      </ul>
      <p>{description}</p>
    </div>
  </div>;
};
