/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1661306409866-18a31687d71b?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Auto ResQ",
    desc: `AutoResQ is a web app that connects stranded motorists with nearby towing and repair services in real time. It features live GPS tracking, instant service matching, and secure authentication for quick, reliable roadside help. Built using React, Node.js, and MongoDB, and integrated with the Google Maps API, it ensures a seamless experience from request to rescue. Deployed via Cloudflare Workers, AutoResQ offers a fast, scalable, and user-friendly solution for on-road emergencies.`,
    url: "https://github.com/swaggyhustler/autoresq"
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Swift Shoppers",
    desc: `Swift Shoppers is a web app that simplifies local online shopping by connecting users to nearby stores. Using Mappls GeoLocation API, it fetches the nearest shops, enabling users to browse products, manage carts, and place orders seamlessly. Built with React, Node.js, and MongoDB, it offers real-time inventory updates, secure authentication, and an intuitive interface for a fast and personalized shopping experience.`,
    url: "https://github.com/swaggyhustler/hyper-local-ecommerce-application"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Student Genie",
    desc: `StudentGenie is an intelligent web app that enhances learning through AI-driven content generation. Built with Django REST Framework and React, it integrates machine learning models and LLMs to answer user queries and generate quizzes from video transcripts and PDFs. Developed collaboratively in a team of three, it features a robust backend, seamless frontend integration, and smart automation to make studying more interactive and personalized.`,
    url: "https://github.com/swaggyhustler/StudentGenie"
  },
  {
    id: 4,
    img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=1238&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wallet Watch",
    desc: `A smart web app built with Node.js, Express.js, EJS, and Axios that recommends food based on a user’s location and real-time weather. It integrates a Weather API to fetch temperature data and another API to generate contextual food suggestions tailored to local climate conditions, offering a personalized and dynamic user experience.`,
    url: "https://github.com/swaggyhustler/food-recommendation-system"
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
          <motion.div className="textContainer" style={{ y }}>
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