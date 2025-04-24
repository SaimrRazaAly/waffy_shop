import Image1 from "../../public/images/1.jpg";
import Image2 from "../../public/images/2.jpg";
import Image3 from "../../public/images/hero.jpg";

export const images = {
  Image1,
  Image2,
  Image3,
};

export const Offer_data = [
  { id: 1, title: "Dried Seeds", image: "/images/4.jpg" },
  { id: 2, title: "Good Seeds", image: "/images/4.jpg" },
  { id: 3, title: "Bad Seeds", image: "/images/4.jpg" },
  { id: 4, title: "Bad Seeds", image: "/images/4.jpg" },
];

export const products = [
  { id: 1, title: "Dried Seeds", price: 100, image: "/images/1.jpg" },
  { id: 2, title: "Good Seeds", price: 99, image: "/images/1.jpg" },
  { id: 3, title: "Bad Seeds", price: 120, image: "/images/1.jpg" },
  { id: 4, title: "Bad Seeds", price: 120, image: "/images/1.jpg" },
];

export const Team_data = [
  { id: 1, title: "ali", profession: "Develper", image: "/images/1Client.jpg" },
  { id: 2, title: "H2", profession: "Develper", image: "/images/1Client.jpg" },
  {
    id: 3,
    title: "asdjflkasf",
    profession: "Develper",
    image: "/images/1Client.jpg",
  },
  {
    id: 4,
    title: "Bad Seeds",
    profession: "Develper",
    image: "/images/1Client.jpg",
  },
];

export const Premium_Products_data = [
  {
    id: 1,
    title: "Dried Seeds",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/images/5.jpg",
  },
  {
    id: 2,
    title: "Good Seeds",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/images/5.jpg",
  },
  {
    id: 3,
    title: "Bad Seeds",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/images/5.jpg",
  },
  {
    id: 4,
    title: "Bad Seeds",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/images/5.jpg",
  },
];
// imports

import { IoIosTimer } from "react-icons/io";
import { GrPowerCycle } from "react-icons/gr";
import { FaShoppingBag } from "react-icons/fa";
export const Services_data = [
  {
    id: 1,
    title: "Dried Seeds",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: <FaShoppingBag />,
  },
  {
    id: 2,
    title: "Good Seeds",
    description:
      "Sit amet dolor consecteur adipisicing elitsed do eiusmod tempor incididunt ulabore et dolore ulabore et dolore.",
    image: <GrPowerCycle />,
  },
  {
    id: 3,
    title: "Bad Seeds",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: <IoIosTimer />,
  },
];

export const Blog_Post_data = [
  {
    id: 1,
    title: "Dried Seeds",
    author: "Ram M",
    date: "2023-10-01",
    comments: 5,
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    title: "Good Seeds",
    author: "Ram M",
    date: "2023-10-01",
    comments: 5,
    description:
      "Sit amet dolor consecteur adipisicing elitsed do eiusmod tempor incididunt ulabore et dolore ulabore et dolore.",
    image: "/images/1.jpg",
  },
];
export const Items_data = [
  {
    id: 1,
    title: "Dried Seeds",
    description: "Fenugreek",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    title: "Dried Seeds",
    description: "Fenugreek",
    image: "/images/2.jpg",
  },

  {
    id: 3,
    title: "Dried Seeds",
    description: "Fenugreek",
    image: "/images/4.jpg",
  },

  {
    id: 4,
    title: "Dried Seeds",
    description: "Fenugreek",
    image: "/images/4.jpg",
  },

  {
    id: 5,
    title: "Dried Seeds",
    description: "Fenugreek",
    image: "/images/1.jpg",
  },
  {
    id: 6,
    title: "Dried Seeds",
    description: "Fenugreek",
    image: "/images/4.jpg",
  },
];

export const Navbar_data = [
  { id: 1, title: "Home", link: "/" },
  { id: 3, title: "Gourmet Foods", link: "/collections" },
  { id: 4, title: "Shop", link: "/collections/all" },
  { id: 5, title: "Grocery", link: "/collections/roaster-seeds" },
  { id: 6, title: "Cooking Oil", link: "/collections/dried-masalas" },
  { id: 7, title: "Beverages", link: "/collections/spicy-seeds" },
  {
    id: 8,
    title: "Pages",
    link: "#",
    children: [
      { id: 21, title: "About", link: "/pages/about-us" },
      { id: 22, title: "FAQs", link: "/pages/faqs" },
      { id: 23, title: "Blog", link: "/blogs/new" },
      { id: 24, title: "Contact", link: "/pages/contact-us" },
    ],
  },
];

export const Unique_flavors_data = [
  {
    id: 1,
    title: "Flavoues",
    para: "Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl",
  },
  {
    id: 2,
    title: "Flavoues",
    para: "Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl",
  },
  {
    id: 3,
    title: "Flavoues",
    para: "Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl",
  },
  {
    id: 4,
    title: "Flavoues",
    para: "Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl",
  },
];

export const Clients_data = [
  {
    name: "Johanna",
    profession: "Designer",
    message:
      "Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ac felis donec et odio pellentesque diam volutpat. Justo nec ultrices dui sapien eget mi proin sed libero. Purus ut faucibus pulvinar elementum inte.",
  },
  {
    name: "Charlotte",
    profession: "Professor",
    message:
      "Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ac felis donec et odio pellentesque diam volutpat. Justo nec ultrices dui sapien eget mi proin sed libero. Purus ut faucibus pulvinar elementum inte.",
  },
  {
    name: "Maximilian",
    profession: "Developer",
    message:
      "Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ac felis donec et odio pellentesque diam volutpat. Justo nec ultrices dui sapien eget mi proin sed libero. Purus ut faucibus pulvinar elementum inte.",
  },
];




export const faqsData = [
  {
    question: "How will my order be delivered to me?",
    answer:
      "Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Eu augue ut lectus arcu bibendum at. Nunc sed augue lacus viverra vitae congue eu.",
  },
  {
    question: "What do I need to know?",
    answer:
      "Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut diam quam nulla porttitor massa id neque.",
  },
  {
    question: "How will I know if order is placed successfully?",
    answer:
      "Elementum eu facilisis sed odio morbi quis commodo. Mollis aliquam ut porttitor leo a diam sollicitudin tempor.",
  },
  {
    question: "How do I check the status of my order?",
    answer:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Enim eu turpis egestas pretium aenean.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Ut diam quam nulla porttitor massa id neque. Elementum eu facilisis sed odio morbi quis commodo.",
  },
]



export const blogData = [
  {
    id:1 ,
    title: "Black Pepper Powder",
    description:
      "Quis imperdiet massa tincidunt nunc pulvinar sapien et. Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nib...",
    image: "/images/2.jpg",
    link: "/blogs/1", // Example link to the blog post detail page
  },
  {
    id: 2,
    title: "Cayenne Pepper",
    description:
      "Cayenne pepper is a hot chili pepper that is used in many dishes to add heat and flavor. It’s also known for its health benefits, including improving metabolism...",
    image: "/images/4.jpg",
    link: "/blogs/2",
  },
  {
    id: 3,
    title: "Paprika Benefits",
    description:
      "Paprika is a popular spice used in various cuisines around the world. It is packed with vitamins and antioxidants that can support your overall health...",
    image: "/images/5.jpg",
    link: "/blogs/3",
  },
  {
    id: 4,
    title: "Black Pepper Powder",
    description:
      "Quis imperdiet massa tincidunt nunc pulvinar sapien et. Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nib...",
    image: "/images/2.jpg",
    link: "/blogs/1", // Example link to the blog post detail page
  },
  {
    id: 5,
    title: "Cayenne Pepper",
    description:
      "Cayenne pepper is a hot chili pepper that is used in many dishes to add heat and flavor. It’s also known for its health benefits, including improving metabolism...",
    image: "/images/4.jpg",
    link: "/blogs/8",
  },
  {
    id: 6,
    title: "Paprika Benefits",
    description:
      "Paprika is a popular spice used in various cuisines around the world. It is packed with vitamins and antioxidants that can support your overall health...",
    image: "/images/5.jpg",
    link: "/blogs/7",
  },
  {
    id: 7,
    title: "Black Pepper Powder",
    description:
      "Quis imperdiet massa tincidunt nunc pulvinar sapien et. Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nib...",
    image: "/images/1.jpg",
    link: "/blogs/8", // Example link to the blog post detail page
  },
  {
    id: 2,
    title: "Cayenne Pepper",
    description:
      "Cayenne pepper is a hot chili pepper that is used in many dishes to add heat and flavor. It’s also known for its health benefits, including improving metabolism...",
    image: "/images/5.jpg",
    link: "/blogs/2",
  },
  {
    id: 3,
    title: "Paprika Benefits",
    description:
      "Paprika is a popular spice used in various cuisines around the world. It is packed with vitamins and antioxidants that can support your overall health...",
    image: "/images/4.jpg",
    link: "/blogs/3",
  },
  // Add more blog data as needed
];
