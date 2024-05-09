"use client";
import React, { useState } from "react";

const DataTable = ({
  columns,
  data,
  count,
}: {
  columns: string[];
  data: any[];
  count: number;
}) => {
  const [page, setPage] = useState(1);
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    }
    return text;
  };
  return (
    <div className="my-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="my-3 w-full">
          <input
            type="text"
            className="p-2 bg-transparent w-full outline-none"
            placeholder="Search"
          />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              {columns.map((item) => {
                return (
                  <th scope="col" className="px-6 py-3" key={Math.random()}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data
              .slice(count * page - count, count * page)
              .map((item, index) => {
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 overflow-auto" key={Math.random()}>
                    {columns.map((col, colIndex) => (
                      <td key={Math.random()} className="px-6 py-4">
                        {col !== "Action" ? (
                          <span
                            style={{
                              maxHeight: "50px",
                              overflow: "hidden",
                              display: "block",
                            }}
                          >
                            {truncateText(item[col], 30)}
                          </span>
                        ) : (
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2 justify-end my-2 items-center">
        <button
          className="p-2 bg-gray-800 rounded"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <div className="p-2 rounded">{page}</div>
        <button
          className="p-2 bg-gray-800 rounded"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
