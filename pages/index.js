import Head from "next/head";
import {
  IoBookOutline,
  IoFlaskOutline,
  IoCodeSlash,
  IoBarbellOutline,
} from "react-icons/io5";
import React from "react";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import WhatDoing from "@/components/WhatDoing";

export default function Index() {
  const hobbyData = {
    reading: {
      title: "Reading",
      desc: "I am an avid reader: from classics like Saarte, Nietzshe, Camus and Huxley to more contemporary business works like Sapiens and Blue Ocean Strategy.",
    },
    workout: {
      title: "Working Out",
      desc: "As a long time long distance runner, I've transitioned from running in Cross Country and Track & Field in high school to more recreational running. I also enjoy soccer, yoga and weight lifting.",
    },
  };
  const WDData = {
    wd: {
      title: "Software Developer",
      desc: "I started my journey as a software dev with an interest in Artificial Intelligence and picked up Python, before going on to learn JavaScript, Angular, React and React Native.",
    },
    flc: {
      title: "Business Owner",
      desc: "I founded a CBD ecommerce business Potion Herb because CBD helps with my anxiety and chronic aches/pains from my active lifestyle. I wanted to ensure that CBD was adequately marketed towards younger people.",
    },
  };

  return (
    <>
      <Head>
        <title>Home - Portfolio</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4">What I&apos;m Doing</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <WhatDoing title={WDData.flc.title} desc={WDData.flc.desc}>
            <IoFlaskOutline className="text-blue-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.wd.title} desc={WDData.wd.desc}>
            <IoCodeSlash className="text-green-500 text-6xl" />
          </WhatDoing>
        </div>
        <h1 className="text-lg font-semibold my-4">Hobbies</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <Hobbies
            title={hobbyData.reading.title}
            desc={hobbyData.reading.desc}
          >
            <IoBookOutline className="text-purple-500 text-6xl" />
          </Hobbies>
          <Hobbies
            title={hobbyData.workout.title}
            desc={hobbyData.workout.desc}
          >
            <IoBarbellOutline className="text-red-500 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}
