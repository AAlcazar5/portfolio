import React from "react";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import PageScrollBar from "@/components/PageScrollBar";

const Layout = (props) => (
  <>
    <div className="bg-white text-black">
      <Header />
      <PageScrollBar
        color="#0aa863"
        gradientColor="#2bf29c"
        gradient={true}
        height={4}
      />
      <div className="lg:px-12 xl:px-44 flex flex-col lg:flex-row">
        <Aside />
        <main className="flex-1 p-3 mt-3 lg:px-8 lg:pb-8 lg:pt-4 h-auto w-full ">
          <div
            className={`p-4 m-4 lg:px-6 lg:pb-6 lg:pt-2 border-gray-300 rounded ${props.border}`}
          >
            {props.children}
          </div>
        </main>
      </div>
    </div>
  </>
);

export default Layout;
