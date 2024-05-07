"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const AddFood = () => {
    const router = useRouter()
  type FoodT = {
    name: string;
    ingredients: string;
    Image: string;
    description: string;
    instructions: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FoodT>();
  const onSubmit: SubmitHandler<FoodT> = (data) => {
    console.log(data)
    router.push('/dashboard/foods')
  };
  return (
    <div className="grid grid-cols-12">
      <div className="md:col-span-6"></div>
      <div className="col-span-12 md:col-span-6 h-full">
        <form className="flex gap-4 flex-col h-full justify-center " onSubmit={handleSubmit(onSubmit)}>
          <p className="font-bold text-2xl text-center">Add food</p>
          <div>
            <p>Name</p>
            <input
              type="text"
              {...register("name")}
              className="py-2 outline-none border border-700 focus:border-500 px-5 bg-transparent rounded-lg w-full"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div>
            <p>Ingredients</p>
            <input
              type="text"
              {...register("ingredients")}
              className="py-2 outline-none border border-700 focus:border-500 px-5 bg-transparent rounded-lg w-full"
              placeholder="write multiple with comma seperated"
            />
            {errors.ingredients && <span>This field is required</span>}
          </div>
          <div>
            <p>Image</p>
            <input
              type="text"
              {...register("Image")}
              className="py-2 outline-none border border-700 focus:border-500 px-5 bg-transparent rounded-lg w-full"
            />
            {errors.Image && <span>This field is required</span>}
          </div>
          <div>
            <p>description</p>
            <input
              type="text"
              {...register("description")}
              className="w-full py-2 outline-none border border-700 focus:border-500 px-5 bg-transparent rounded-lg"
            />
            {errors.description && <span>This field is required</span>}
          </div>
          <div>
            <button type="submit" className="py-2 px-4 bg-gray-800 border border-gray-700 rounded-lg">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
