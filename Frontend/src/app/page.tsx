"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
import FeatureOne from "@/components/Landing/Features/FeatureOne";
import FeatureTwo from "@/components/Landing/Features/FeatureTwo";
import FeatureThree from "@/components/Landing/Features/FeatureThree";
import FeatureFour from "@/components/Landing/Features/FeatureFour";

export default function Landing() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="p-5 max-w-5xl mx-auto">
      <Header />
      <Hero />
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-3xl font-semibold text-center">Why use Celestia?</p>
        <span className="text-xl font-light text-center">
          Explore below to see why Celestia is a simple, powerful, and secure
          messenger
        </span>
      </div>
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
      <footer className="flex flex-col items-center justify-center gap-4 my-4 bg-base-200 p-4 rounded-md">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Celestia. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
