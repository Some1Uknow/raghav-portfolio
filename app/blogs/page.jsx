'use client'
import React, { useEffect } from "react";

export default function page() {
  const getData = async () => {
    const res = await fetch("https://some1uknow.hashnode.dev/rss.xml");
    const data = await res.text();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
}
