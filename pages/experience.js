import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import CareerCard from "@/components/CareerCard";

export default function skillsAndExperience() {
  const data = {
    potionherb: {
      title: "Potion Herb",
      date: "Mar 2021-Present",
      role: "Owner",
      place: "Modesto, CA",
      desc: "Developed React and Shopify based CBD ecommerce web application with CRUD API, shopping cart, and payment processing",
      link: "https://potionherb.com",
      linkText: "Website",
    },
    gallo: {
      title: "E&J Gallo Winery",
      date: "Jun 2020 - Dec 2020",
      role: "Progammer Analyst",
      place: "Modesto, CA",
      desc: "Develop scripts in ServiceNow utilizing JavaScript and create Automated Test Frameworks for data validation",
    },
    global: {
      title: "Global Distributors",
      date: "Nov 2018 - July 2019",
      role: "Digital Marketing Coordinator",
      place: "Turlock, CA",
      desc: "Coordinate projects to evaluate sales trends & boost customer engagement. Implement segmentation strategy through customer database evaluation.",
    },
  };

  return (
    <>
      <Head>
        <title>Experience - Portfolio</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Career</h3>
        <CareerCard
          title={data.potionherb.title}
          date={data.potionherb.date}
          place={data.potionherb.place}
          desc={data.potionherb.desc}
          link={data.potionherb.link}
          linkText={data.potionherb.linkText}
        />

        <CareerCard
          title={data.gallo.title}
          date={data.gallo.date}
          place={data.gallo.place}
          desig={data.gallo.desig}
          desc={data.gallo.desc}
        />
        <CareerCard
          title={data.global.title}
          date={data.global.date}
          place={data.global.place}
          desig={data.global.desig}
          desc={data.global.desc}
        />
      </Layout>
    </>
  );
}
