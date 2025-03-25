
import Introduction from "@/components/introduction"
import ProofOfWork from "@/components/proof-of-work"
import WorkExperience from "@/components/work-experience"
import BlogPost from "./[slug]/page"
import BlogSection from "@/components/blog-section"

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 justify-center items-start mx-auto">
      <Introduction />

      <ProofOfWork />

      <WorkExperience />

      <BlogSection />
    </main>
  )
}
