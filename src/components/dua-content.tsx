import { Bookmark, Copy, Share2, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dua } from "@/lib/types"

interface DuaContentProps {
  dua: Dua
}

export function DuaContent({ dua }: DuaContentProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#e8f3ee] p-2 rounded-full">
          <span className="text-[#4a8d7a] font-medium">{dua.id.toString().padStart(2, "0")}</span>
        </div>
        <h3 className="text-[#4a8d7a] font-medium">{dua.dua_name_en}</h3>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 whitespace-pre-line">{dua.top_en}</p>
      </div>

      {dua.dua_arabic && (
        <div className="my-6">
          <p className="text-right text-2xl leading-loose font-arabic">{dua.dua_arabic}</p>
        </div>
      )}

      {dua.transliteration_en && (
        <div className="my-4">
          <p className="text-gray-700 italic">{dua.transliteration_en}</p>
        </div>
      )}

      {dua.translation_en && (
        <div className="my-4 p-4 bg-gray-50 rounded-md">
          <p className="text-gray-700">{dua.translation_en}</p>
        </div>
      )}

      <div className="mt-6 text-gray-600">
        <p>Reference: {dua.refference_en}</p>
      </div>

      <div className="mt-6 flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" size="icon" className="rounded-full">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
