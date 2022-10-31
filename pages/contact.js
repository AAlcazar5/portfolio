import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoPaperPlaneOutline,
} from "react-icons/io5";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact - Portfolio</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-4">Contact Details</h3>
        <div className="mt-3">
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-lg font-semibold">
              Let's talk about everything! 🗣️
            </h2>
            <h3 className="text-sm md:text-md">
              Don't like forms? Send me an email
            </h3>
            <h4>
              <span className="text-sm md:text-md font-semibold">Email : </span>
              aalcazar5@proton.me
            </h4>
            <h4>
              <span className="text-sm md:text-md font-semibold">
                Mobile :{" "}
              </span>{" "}
              (209) 360-7406
            </h4>
            <div className="mt-2">
              <div className="text-black text-xl flex gap-5">
                <Link href="https://www.linkedin.com/in/alejandro-alcazar-a45998103/">
                  <IoLogoLinkedin className="hover:text-pink-600 cursor-pointer" />
                </Link>
                <Link href="https://github.com/AAlcazar5?tab=repositories">
                  <IoLogoGithub className="hover:text-pink-600 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-4">Contact Form</h3>
        <div className="flex flex-col gap-2 px-4">
          <form>
            <div className="grid grid-cols-1 gap-6 md:max-w-md lg:max-w-lg">
              <label className="block">
                <span className="text-gray-900">Full Name</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="John Doe 👤"
                  name="Name"
                  id="Name"
                />
              </label>
              <label className="block">
                <span className="text-gray-900">Email Address</span>
                <input
                  type="email"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="user@domain.com 📩"
                  name="Email"
                  id="Email"
                />
              </label>
              <label className="block">
                <span className="text-gray-900">Subject</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Say Hello 👋"
                  name="Subject"
                  id="Subject"
                />
              </label>

              <label className="block">
                <span className="text-gray-900">Message</span>
                <textarea
                  className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={4}
                  placeholder="Input Message 🖋️"
                  name="Message"
                  id="Message"
                ></textarea>
              </label>
              <button
                type="submit"
                className="flex gap-1 items-center w-max border-none rounded px-3 py-1 bg-green-700 text-white hover:bg-green-600"
              >
                <IoPaperPlaneOutline />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}
