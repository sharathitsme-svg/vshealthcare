"use client";

import Image from "next/image";
import "../styles/loader.css";

export default function Loader() {
  return (
    <div className="loaderContainer">
      <div className="loaderContent">
        <Image
          src="/images/logo/logo.png"
          alt="VS Health Care"
          width={130}
          height={130}
          className="loaderLogo"
          priority
        />

        <h1>VS Health Care</h1>

        <p>Healing • Wellness • Trust</p>

        <div className="spinner"></div>
      </div>
    </div>
  );
}