"use client";
import { categories, getCategory } from "@/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainSidebar from "@/components/main-sidebar-copy";
import { TCategoriesResponse, TCategory } from "@/lib/types";

export default function DuaCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data: any) => {
        setCategories(data.categories);
        setLoading(false);
      });
  }, []);



  if (isLoading) return <p>Loading...</p>;
  if (!categories) return <p>No category data</p>;
  console.log(categories);
  return (
    <>
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <MainSidebar categories={categories} />
      <div className="flex-1 ml-[70px] pl-[250px] overflow-auto">
        <div className="grid grid-cols-4 gap-4">
        {categories?.map((category) => (
          <DoaCard category={category} key={category.id} />
        ))}
      </div>
      </div>
    </div>
      
    </>
  );
}

const DoaCard = ({ category }: { category: any }) => {
  return (
    <div className="px-4 py-2">
      <Link
        href={`/dua-categories/${category.id}`}
      >
        <div
          className={`flex items-center gap-3 p-2 rounded-md bg-[#e8f3ee] hover:bg-gray-100
                      `}
        >
          <div className="bg-[#ffefc1] p-2 rounded-md">
            <span className="text-[#e6b53f]">🤲</span>
          </div>
          <div>
            <h3 className="font-medium">{category.name}</h3>
            <p className="text-xs text-gray-500">
              {/* {category.subcategories.length}  */}
              ** Subcategories |{" "}
              {/* {category.duaCount}  */}
              ** Duas
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
