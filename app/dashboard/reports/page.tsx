"use client";
import Order from "@/components/print/Order";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const page = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    bodyClass: "p-16",
    documentTitle: "Test pdf",
  });

  return (
    <>
      <Order ref={componentRef} />
      <button
        onClick={handlePrint}
        className="border border-gray-700 bg-gray-800 px-5 py-2 rounded"
      >
        Print
      </button>
    </>
  );
};

export default page;
