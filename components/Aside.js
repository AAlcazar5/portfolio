import React from "react";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoMailOutline,
  IoLocationOutline,
  IoStorefrontOutline,
  IoPhonePortraitOutline,
  IoArrowDown,
} from "react-icons/io5";
import Pills from "@/components/Pills";
import Link from "next/link";

export default function Aside() {
  return (
    <>
      <aside className="lg:bg-white pb-4 lg:pb-0 top-0 w-full px-4 sm:px-12 md:px-16 lg:px-0 lg:w-3/12 h-full dark:bg-gray-800 ">
        <img
          src="/assets/img/profile-photo-2.jpeg"
          alt="Profile Photo"
          className="h-48 md:h-56 lg:h-60 my-4 rounded-full"
        />
        <h1 className="text-2xl font-bold">Alejandro Alcazar</h1>
        <h3 className="text-lg">AKA Alex</h3>
        <p className="py-2">
          Searching for opportunies in Artificial Intelligence, Prompt Engineering, and LLMs.
        </p>

        <div className="my-2">
          <a
            href="assets/resume/alejandro-alcazar-resume.pdf"
            download
            className="flex gap-1 items-center w-max border-none rounded px-3 py-1 bg-green-700 text-white hover:bg-green-600"
          >
            <IoArrowDown />
            Download Resume
          </a>
        </div>

        <div className="my-2">
          <h3 className="text-lg font-semibold pt-1">Basic Info</h3>
          <div className="mt-2 mb-4 text-lg flex flex-col gap-2">
            <div className="flex gap-x-2 items-center">
              <IoLocationOutline className="flex-none text-gray-500" /> Modesto,
              CA
            </div>
            <Link href="mailto:user@domain.com">
              <div className="flex gap-x-2 items-center">
                <IoMailOutline className="flex-none text-gray-500" />{" "}
                aalcazar1@proton.me
              </div>
            </Link>
            <div className="flex gap-x-2 items-center">
              <IoStorefrontOutline className="flex-none text-gray-500" />{" "}
              @potionherb
            </div>
            <Link href="tel:+2093607406">
              <div className="flex gap-x-2 items-center">
                <IoPhonePortraitOutline className="flex-none text-gray-500" />{" "}
                (209) 360-7406
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:hidden my-2">
          <h3 className="text-lg font-semibold pt-1">Social</h3>
          <div className="mt-2 mb-4 text-xl flex gap-2">
            <Link href="https://www.linkedin.com/in/alejandroalcazar1/">
              <IoLogoLinkedin className="hover:text-pink-600 cursor-pointer" />
            </Link>
            <Link href="https://github.com/AAlcazar5?tab=repositories">
              <IoLogoGithub className="hover:text-pink-600 cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className="my-2 mb-8">
          <h3 className="text-lg font-semibold pt-1">Skills</h3>
          <div className="mt-2 flex flex-wrap gap-3">
            <Pills text="Motivated" cname="bg-red-100 py-1" />
            <Pills text="Inventive" cname="bg-blue-100 py-1" />
            <Pills text="Organized" cname="bg-purple-100 py-1" />
            <Pills text="Problem Solver" cname="bg-green-100 py-1" />
            <Pills text="Leader" cname="bg-yellow-100 py-1" />
          </div>
        </div>
      </aside>
    </>
  );
}
