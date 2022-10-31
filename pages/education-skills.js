import React from "react";
import Layout from "@/components/Layout";
import EducationCard from "@/components/EducationCard";
import Pills from "@/components/Pills";
import {
  IoDiceOutline,
  IoLayersOutline,
  IoPersonOutline,
  IoServerOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Head from "next/head";

export default function education() {
  const eduData = {
    college: {
      degree: "Bachelors of Science in Business Administration",
      institute: "California State University - Stanislaus",
      year: "2014 – 2018",
      grade: "Cum Laude",
    },
    webDev: {
      degree: "Full Stack Web Development Certificate",
      institute: "Bay Valley Tech",
      year: "2020",
      grade: "HTML, CSS, JavaScript, Angular",
    },
    dataScience: {
      degree: "Data Science Certificate",
      institute: "Data Quest",
      year: "2019",
      grade: "Python, SQL",
    },
  };

  return (
    <>
      <Head>
        <title>Education & Skills - Portfolio</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Educational Background</h3>
        <div className="flex flex-col gap-4">
          <EducationCard
            degree={eduData.webDev.degree}
            institute={eduData.webDev.institute}
            year={eduData.webDev.year}
            grade={eduData.webDev.grade}
          />
          <EducationCard
            degree={eduData.dataScience.degree}
            institute={eduData.dataScience.institute}
            year={eduData.dataScience.year}
            grade={eduData.dataScience.grade}
          />
          <EducationCard
            degree={eduData.college.degree}
            institute={eduData.college.institute}
            year={eduData.college.year}
            grade={eduData.college.grade}
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Skills </h3>
        <div className="px-4">
          <div className="flex gap-2 items-center mt-6">
            <IoLayersOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Frontend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML" cname="bg-green-100 py-1 " />
            <Pills text="CSS" cname="bg-blue-100 py-1" />
            <Pills text="JavaScript" cname="bg-purple-100 py-1" />

            <Pills text="Angular" cname="bg-indigo-100 py-1" />
            <Pills text="NextJS" cname="bg-pink-100 py-1" />
            <Pills text="React" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoServerOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Backend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Python" cname="bg-blue-100 py-1" />
            <Pills text="Django" cname="bg-gray-100 py-1" />
            <Pills text="MySQL" cname="bg-blue-100 py-1" />
            <Pills text="PostgreSQL" cname="bg-purple-100 py-1 " />
            <Pills text="MongoDB" cname="bg-red-100 py-1" />
            <Pills text="Firebase" cname="bg-yellow-100 py-1 " />

            <Pills text="REST API" cname="bg-green-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Tools & Frameworks </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="TailwindCSS" cname="bg-purple-100 py-1 " />
            <Pills text="Bulma" cname="bg-pink-100 py-1 " />
            <Pills text="Bootstrap" cname="bg-gray-100 py-1 " />
            <Pills text="Webpack" cname="bg-green-100 py-1 " />
            <Pills text="Git" cname="bg-indigo-100 py-1 " />
            <Pills text="Github" cname="bg-blue-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoDiceOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Design & Others </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Google Analytics" cname="bg-blue-100 py-1 " />
            <Pills text="AWS" cname="bg-red-100 py-1 " />
            {/* <Pills text="DigitalOcean" cname="bg-pink-100 py-1 " /> */}
            <Pills text="MS Office" cname="bg-gray-100 py-1 " />
            <Pills text="Photoshop" cname="bg-green-100 py-1 " />
            {/* <Pills text=" After Effects" cname="bg-red-100 py-1 " /> */}
            <Pills text="Illustrator" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Personal </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Public Speaking" cname="bg-red-100 py-1 " />
            <Pills text="Project Management" cname="bg-blue-100 py-1 " />
            <Pills text="Leadership" cname="bg-yellow-100 py-1 " />
            <Pills text="Team Work" cname="bg-green-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
