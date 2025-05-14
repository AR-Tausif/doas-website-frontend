import type { Category, Dua, Subcategory } from "./types";

// Sample data for categories and subcategories
export const categories: Category[] = [
  {
    id: 1,
    name: "Dua's Importance",
    duaCount: 21,
    subcategories: [
      { id: 1, name: "The servant is dependent on his Lord" },
      { id: 2, name: "The most important thing to ask Allah for" },
      { id: 3, name: "Ask for paradise & protection from fire" },
      { id: 4, name: "Dua to remain steadfast on the religion" },
      { id: 5, name: "Dua of good outcome in all deeds" },
      { id: 6, name: "Seeking whatever good Allah can bestow" },
      {
        id: 7,
        name: "Shelter from horror, misery, evil consequences and rejoicing of the enemy",
      },
    ],
  },
  {
    id: 2,
    name: "Dua's Excellence",
    duaCount: 13,
    subcategories: [
      { id: 1, name: "Excellence of Dua" },
      { id: 2, name: "Times when Dua is accepted" },
    ],
  },
];

// Sample data for duas
export const duas: Dua[] = [
  {
    id: 1,
    cat_id: 1,
    subcat_id: 1,
    dua_id: 1,
    dua_name_bn: "বান্দা তার রবের মুখাপেক্ষী #১",
    dua_name_en: "The servant is dependent on his Lord #1",
    top_bn:
      "সকল মানুষ নিজেদের দ্বীন-দুনিয়ার বিভিন্ন বিষয়ে নিজেদের কল্যাণ-সাধন ও অনিষ্ট প্রতিরোধের ক্ষেত্রে আল্লাহ্‌ তা'আলার মুখাপেক্ষী। আল্লাহ্‌ তা'আলা বলেন -\n\n\"হে মানুষ, তোমরা আল্লাহ্‌র প্রতি মুখাপেক্ষী আর আল্লাহ্‌ অমুখাপেক্ষী ও প্রশংসিত।\"",
    top_en:
      "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning):\n\nO mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
    dua_arabic: null,
    dua_indopak: null,
    clean_arabic: null,
    transliteration_bn: null,
    transliteration_en: null,
    translation_bn: null,
    translation_en: null,
    bottom_bn: null,
    bottom_en: null,
    refference_bn: "সূরা আল-ফাতিরঃ ৩৫:১৫",
    refference_en: "Surah Al-Fatir 35:15",
    audio: null,
  },
  {
    id: 2,
    cat_id: 1,
    subcat_id: 1,
    dua_id: 2,
    dua_name_bn: "বান্দা তার রবের মুখাপেক্ষী #২",
    dua_name_en: "The servant is dependent on his Lord #2",
    top_bn:
      "নবী (ﷺ) প্রত্যেক সালাতের শেষে সালাম ফিরিয়ে বলতেন - বান্দা তার দ্বীন-দুনিয়ার সকল প্রয়োজন তার রবের কাছে চাইবে, কারণ সব কিছুর ভাণ্ডার আল্লাহ্‌ তা'আলার হাতে। আল্লাহ্‌ তা'আলা বলেন -\n\n\"আর প্রতিটি বস্তুরই ভান্ডারসমূহ রয়েছে আমার কাছে এবং আমি তা অবতীর্ণ করি কেবল নির্দিষ্ট পরিমাণে।\" (সূরা আল-হিজরঃ ১৫:২১)\n\nআল্লাহ্‌ যা দেন, তা কেউ আটকে রাখতে পারে না; আবার তিনি যা রুখে দেন, তা কেউ দিতে পারে না।",
    top_en:
      'Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning):\n\n"And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure." (Sura Al-Hijr 15:21)\n\nNo one can withhold what Allah gives; And, no one can give what he resists.',
    dua_arabic:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    dua_indopak:
      "لَا اِلٰهَ اِلَّا اللّٰهُ وَحْدَهٗ لَا شَرِيْكَ لَهٗ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ، اَللّٰهُمَّ لَا مَانِعَ لِماَ اَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    clean_arabic:
      "لا اله الا الله وحده لا شريك له له الملك وله الحمد وهو علي كل شيء قدير اللهم لا مانع لما اعطيت ولا معطي لما منعت ولا ينفع ذا الجد منك الجد",
    transliteration_bn:
      "লা- ইলা-হা ইল্লাল্লা-হু, ওয়া'হদাহু লা- শারীকা লাহু, লাহুল মুলকু ওয়া লাহুল 'হামদু, ওয়া হুআ 'আলা- কুল্লি শাইয়্যিন ক্বাদীর, আল্লা-হুম্মা লা- মা-নি'আ লিমা-আ'অ্‌ত্বাইতা, ওয়ালা- মু'অ্‌ত্বিয়া লিমা- মানা'অ্‌তা, ওয়ালা- ইয়ান্‌ফা'উ যাল জাদ্দি মিনকাল জাদ্দু",
    transliteration_en:
      "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu",
    translation_bn:
      "আল্লাহ্‌ ছাড়া কোনো সত্য মাবুদ নেই, তিনি একক, তার কোনো শরীক নেই। রাজত্ব তারই এবং প্রশংসা তারই। তিনি সবকিছুর উপর ক্ষমতাবান। হে আল্লাহ্‌! তুমি যা দাও, তা কেউ রুখতে পারে না; তুমি যা রুখে দাও, তা কেউ দিতে পারে না; তোমার বিপরীতে ধনীর প্রাচুর্য তার কোনও কাজে লাগে না।",
    translation_en:
      "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
    bottom_bn: null,
    bottom_en: null,
    refference_bn: "বুখারীঃ ৮৪৪",
    refference_en: "Bukhari: 844",
    audio: "http://www.ihadis.com/duaaudiofinal/2.mp3",
  },
];

// Helper functions to get data
export function getCategory(categoryId: number): Category | undefined {
  return categories.find((category) => category.id === categoryId);
}

export function getSubcategory(
  categoryId: number,
  subcategoryId: number
): Subcategory | undefined {
  const category = getCategory(categoryId);
  return category?.subcategories.find(
    (subcategory) => subcategory.id === subcategoryId
  );
}

export function getDuasBySubcategory(
  categoryId: number,
  subcategoryId: number
): Dua[] {
  return duas.filter(
    (dua) => dua.cat_id === categoryId && dua.subcat_id === subcategoryId
  );
}
