import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to the first category
  redirect("/category/1/subcategory/1")
}
