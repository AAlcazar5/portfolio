import React from "react";
import Layout from "@/components/Layout";
import ProjectCards from "@/components/ProjectCards";
import Head from "next/head";

export default function projects() {
  const projectData = {
    project1: {
      title: "PDF Prompting App",
      subTitle: "Prompt Engineering for PDFs",
      desc: "Finetuned and prompt engineered a Spanish Translator for PDFs of scientific papers",
      link: "https://github.com/AAlcazar5/pdf-prompting-app",
      linkText: "Github Repo",
      stacks: [
        { title: "Python", color: "text-red-200" },
        { title: "Git", color: "text-blue-200" },
        { title: "Streamlit", color: "text-gray-200" },
        { title: "LangChain", color: "text-yellow-200" },
        { title: "OpenAI API", color: "text-green-200" },
      ],
    },
    project2: {
      title: "Potion Herb",
      subTitle: "Ecommerce Site",
      desc: "Used NextJS, JSX, TailwindCSS , JavaScript, Git, Shopify API, Firebase. This project is hosted on Vercel.",
      link: "https://potionherb.com",
      linkText: "Website",
      stacks: [
        { title: "NextJS", color: "text-red-200" },
        { title: "Git", color: "text-blue-200" },
        { title: "Shopify API", color: "text-gray-200" },
        { title: "GraphQL", color: "text-yellow-200" },
        { title: "Firebase", color: "text-green-200" },
      ],
    },
    project3: {
      title: "Tinder Clone",
      subTitle: "A React Native version of Tinder",
      desc: "Used React Native, JSX, TailwindCSS , JavaScript, Git, Firebase.",
      link: "https://github.com/AAlcazar5/expo-tinder-clone",
      linkText: "Github Repo",
      stacks: [
        { title: "React Native", color: "text-red-200" },
        { title: "Git", color: "text-blue-200" },
        { title: "Firebase", color: "text-gray-200" },
        { title: "JavaScript", color: "text-yellow-200" },
        { title: "TailwindCSS", color: "text-green-200" },
      ],
    }
  };

  return (
    <>
      <Head>
        <title>Projects - Portfolio</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold my-4">
          Here&apos;s what I have worked on based on my interests...
        </h3>
        <div className="grid gap-4 mb-3">
          <ProjectCards
            key={projectData.project1.title}
            title={projectData.project1.title}
            subTitle={projectData.project1.subTitle}
            desc={projectData.project1.desc}
            link={projectData.project1.link}
            linkText={projectData.project1.linkText}
            stacks={projectData.project1.stacks}
          />
          <ProjectCards
            key={projectData.project2.title}
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
          />
          <ProjectCards
            key={projectData.project3.title}
            title={projectData.project3.title}
            subTitle={projectData.project3.subTitle}
            desc={projectData.project3.desc}
            link={projectData.project3.link}
            linkText={projectData.project3.linkText}
            stacks={projectData.project3.stacks}
          />
        </div>
      </Layout>
    </>
  );
}
