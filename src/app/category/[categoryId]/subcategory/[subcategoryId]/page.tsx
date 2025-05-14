import { Breadcrumb } from "@/components/bredcrumb";
import { DuaContent } from "@/components/dua-content";
import { getDuasBySubcategory, getCategory, getSubcategory } from "@/lib/data";

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string; subcategoryId: string };
}) {
  const categoryId = Number.parseInt(params.categoryId);
  const subcategoryId = Number.parseInt(params.subcategoryId);

  const category = getCategory(categoryId);
  const subcategory = getSubcategory(categoryId, subcategoryId);
  const duas = getDuasBySubcategory(categoryId, subcategoryId);

  return (
    <div className="p-6 bg-[#f5f9f6] min-h-screen">
      <Breadcrumb
        category={category?.name || ""}
        subcategory={subcategory?.name || ""}
      />

      <div className="mt-6">
        <h1 className="text-2xl font-medium text-[#4a8d7a]">
          Category: {category?.name || ""}
        </h1>

        <h2 className="text-xl mt-4 text-[#4a8d7a]">
          Section: {subcategory?.name || ""}
        </h2>

        <div className="mt-8 space-y-8">
          {duas.map((dua) => (  
            <DuaContent key={dua.id} dua={dua} />
          ))}
        </div>
      </div>
    </div>
  );
}
