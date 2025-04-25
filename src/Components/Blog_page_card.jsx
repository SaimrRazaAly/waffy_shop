import Image from "next/image";
const Blog_Post_Card = ({
  image,
  title,
  description,
  date,
  comments,
  author,
}) => {
  <div className="border border-amber-400 p-2">
    <div className="relative w-[400px] h-[200px]">
      <Image src={image} alt={title} fill />
    </div>
    <div>
      <h2 className="text-4xl">{title}</h2>
      <ul>
        <li>{author}</li>
        <li>{date}</li>
        <li>{comments}</li>
      </ul>
      <p>{description}</p>
    </div>
  </div>;
};

export default Blog_Post_Card;
