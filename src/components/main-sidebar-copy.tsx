"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TCategory } from "@/lib/types";
// import { categories } from "@/lib/data"

export default function MainSidebar({ categories }: { categories: TCategory[] }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  // Extract current category and subcategory IDs from the pathname
  const pathParts = pathname.split("/");
  const currentCategoryId = pathParts[2] ? Number.parseInt(pathParts[2]) : null;
  const currentSubcategoryId = pathParts[4]
    ? Number.parseInt(pathParts[4])
    : null;

  return (
    <div className="fixed left-[70px] top-0 h-full w-[250px] bg-[#f5f9f6] border-r overflow-y-auto">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="font-bold text-lg">Dua & Ruqyah</h1>
            <p className="text-xs text-gray-500">Hisnul Muslim</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search By Category"
            className="pl-9 bg-gray-100 border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1">
        {categories.filter(
            (category) =>
              searchQuery === "" ||
              category.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((category) => (
            <div key={category.id} className="mb-2">
              <div className="px-4 py-2">
                <Link
                  href={`/dua-categories/${category.id}`}
                >
                  <div
                    className={`flex items-center gap-3 p-2 rounded-md ${
                      currentCategoryId === category.id
                        ? "bg-[#e8f3ee]"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="bg-[#ffefc1] p-2 rounded-md">
                      <span className="text-[#e6b53f]">🤲</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{category.cat_name_en}</h3>
                      <p className="text-xs text-gray-500">
                        {/* {category.subcategories.length} */}
                         ** Subcategories |{" "}
                        {/* {category.duaCount} */}
                         ** Duas
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {currentCategoryId === category.id && (
                <div className="ml-4 pl-4 border-l border-gray-200">
                  <ul className="space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          href={`/category/${category.id}/subcategory/${subcategory.id}`}
                        >
                          <div
                            className={`px-3 py-2 text-sm rounded-md ${
                              currentSubcategoryId === subcategory.id
                                ? "bg-[#e8f3ee] text-[#4a8d7a] font-medium"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {subcategory.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
