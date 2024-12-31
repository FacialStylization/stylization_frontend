"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";

const cardData = [
  {
    imgSrc: "/examples/yanjun.png",
    quote: "Yanjun Style",
    title: "by Yanjun Chen  ",
    description:
      "digital painting, young woman, blonde hair, bubblegum, close-up, colorful highlights, ... artistic portrait",
  },
  {
    imgSrc: "/examples/cari.png",
    quote: "Cari Style",
    title: "by Faych",
    description:
      "caricature, black man, will smiths, crew cut, big ears, beard, ... black background",
  },
  {
    imgSrc: "/examples/fushigi.jpg",
    quote: "Fushigi Style",
    title: "by Fushigi Ebi",
    description:
      "fushigi_ebi, touhou, koakuma, bad_id, bad_pixiv_id, translated, 0_0, 1girl, bat_wings, ... wings",
  },
  {
    imgSrc: "/examples/disney.jpg",
    quote: "Disney Style",
    title: "by Disney",
    description:
      "disney, disney princess, disney style, disneyland, disney world, ... disneyland",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Image Stylization
          </h1>
          <p className="mt-2 text-gray-600">One-click to style transfer</p>
          <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
            Enter &rarr;
          </button>
        </div>
      </header>

      {/* Examples Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-800">Examples</h2>
          <p className="text-gray-600">Try it yourself</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 flex flex-col items-center space-y-4"
              >
                <Image
                  src={card.imgSrc}
                  alt={`Example ${index + 1}`}
                  className="h-12 w-12 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center text-center flex-grow">
                  <h3 className="text-gray-800 font-medium">{card.quote}</h3>
                  <p className="text-gray-600 text-sm">{card.title}</p>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center">
            {/* Column 1 */}
            <div className="flex flex-col items-center md:items-center">
              <h3 className="font-semibold text-gray-800">Use cases</h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-center">
                <li>Van Gogh Style</li>
                <li>JoJo Style</li>
                <li>Disney Style</li>
                <li>Arcane Style</li>
                <li>Rusty Lake Style</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col items-center md:items-center">
              <h3 className="font-semibold text-gray-800">Explore</h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-center">
                <li>IP-Adapter</li>
                <li>LoRA</li>
                <li>Flux</li>
                <li>SDXL</li>
                <li>PUIID</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col items-center md:items-center">
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-center">
                <li>Blog</li>
                <li>Best practices</li>
                <li>Models</li>
                <li>Papers</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
