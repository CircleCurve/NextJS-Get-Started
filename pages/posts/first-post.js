import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Layout from "../../components/layout";

export default function FirstPost() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState();
  const [apiResponse, setApiResponse] = useState({ value: 234 });
  const plusOne = () => {
    setValue((prevValue) => {
      console.log("prevValue ;", prevValue);
      prevValue = prevValue + 1;
      return prevValue;
    });
  };

  useEffect(() => {
    console.log("Mounted!");
    const timeOut = setTimeout(() => {
      setApiResponse({ value: 123 });
    }, 2000);
    return () => {
      console.log("clear timeout");
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    console.log("use effect");
    const selectedColor = value % 2 === 0 ? "red" : "blue";
    setColor(selectedColor);
    return () => {
      console.log("clean up");
    };
  }, [value]);

  //watch
  //computed
  console.log("re-render!!! value :", value, " | color :", color);

  return (
    <>
      <Layout>
        {/* <img src="/images/profile.jpg" alt="Your Name" /> */}
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Head>
          <title>First Post</title>
          {
            // It may slow down the page
            /* <script src="https://connect.facebook.net/en_US/sdk.js" /> */
          }
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <div>First Post</div>
        <button onClick={plusOne}>Plus one</button>
        <div>{value}</div>
        <div style={{ color: color }}>123123 </div>

        <div>Show api response : {apiResponse.value}</div>
        <Link href="/">Back to home</Link>
      </Layout>
    </>
  );
}
