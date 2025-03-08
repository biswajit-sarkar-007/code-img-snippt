"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-40">
      <Link
        className="text-sm font-medium hover:text-blue-400 ease-in-out transition-all duration-500"
        href="https://github.com/biswajit-sarkar-007"
      >
         Welcome CodeImg &nbsp;&#129109;
      </Link>
      <Link
        href="https://github.com/biswajit-sarkar-007"
        className="flex items-center text-sm font-medium hover:text-blue-400 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
         
        <span className="pl-1 font-medium text-blue-600">Biswajit Sarkar + AI</span>
      </Link>   
      <Link
        href="https://github.com/biswajit-sarkar-007"
        className="flex items-center text-sm font-medium hover:text-blue-400 ease-in-out transition-all duration-500"
      >
         Many things are coming soon... &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;