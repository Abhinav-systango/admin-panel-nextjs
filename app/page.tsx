import Slider from "@/components/slider/Slider";
import React from "react";

const data = [
  { img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+A" },
  { img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+B" },
  { img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+C" },
  { img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+D" },
  { img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+E" },
  { img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+F" },
];

function Root() {
  return (
    <div>
      <Slider
        data={data}
        items={1}
        margin={10}
        breakpoints={{
          0: { items: 1 },
          600: { items: 2 },
          900: { items: 4 },
        }}
        // renderer={
        //   <>
        //     {data.map((item) => (
        //       <div>
        //         <img src={item.img} alt="" className="p-10 bg-red-400" />
        //       </div>
        //     ))}
        //   </>
        // }
      />
    </div>
  );
}

export default Root;
