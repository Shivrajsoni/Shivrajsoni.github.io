
import Introduction from "@/components/introduction"
import ProofOfWork from "@/components/proof-of-work"
import WorkExperience from "@/components/work-experience"
import BlogPost from "./[slug]/page"
import BlogSection from "@/components/blog-section"
import GetInTouch from "@/components/getIntouch"

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 justify-center items-start mx-auto">
      <Introduction />

      <ProofOfWork />

      <WorkExperience />

      <BlogSection />

      <hr className="border-zinc-900 dark:border-zinc-800 border-w-full"/>

      <GetInTouch/>
    </main>
  )
}
