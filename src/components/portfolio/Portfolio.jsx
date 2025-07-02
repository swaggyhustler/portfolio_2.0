/* eslint-disable react/prop-types */
import {useRef} from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items=[
    {
        id: 1,
        img: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Travel Tracker",
        desc: `This application allows multiple users to locate countries that they have visited, highlight them according to
         the input of the user. It leverages the extensive use of Database and EJS to dynamically fetch and display the output
          to the user. Multiple users are able to log their details and access the data related to the each user on the single 
          click of a button on the Website. The main challenge that I've faced during building this project involved in managing 
          the database for each user.`,
        url: "https://github.com/swaggyhustler/travel-tracker"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Healthy Diet",
        desc: `This application prompt users for their details regarding health parameters and personal interests of food and generates food
              suggestions for the input. It leverages the use of Python Framework for Web Development called Flask which is considered to be the
              light weighted Framework for Web Development, and also the usage of API's (Open AI API) for the dynamic suggestions.
              It also consist of CSS Framework called Bootstrap, for the ease of styling and layout of the website. The main challenge that I have
              faced during development of this project was mainly integration of the Public API to the website.`,
        url: "https://github.com/swaggyhustler/healthy-diet"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Blogging Application",
        desc: `This is application that enables users to create the blog of their choice, prompting the Title, Author and the Content related to the blog
              to be posted. User will be able to list down the number of blogs the has been posted in the Explore section of the application. It
              demonstrates the extensive use of EJS (Embedded Javascript) and it's usage in building Dynamic Web Applications.`,
        url: "https://github.com/swaggyhustler/blog-application"
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Wallet Watch",
        desc: `This is an application where the user will be able to track their expenses and log their all the information about the monetary
              transactions. It uses the MongoDB Atlas (Cloud Storage) to persist the data and ensuring the availability upto 99.99%. It also
              leverages the extensive use of React Framework for building frontend of the application.`,
        url: "https://github.com/swaggyhustler/WalletWatch"
    }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" id="Projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;