import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import GithubLogoIcon from "./icons/github-logo-icon";
import Link from "next/link";

function GetInTouch(){
    return(
        <div className="flex flex-col gap-y-4 text-black dark:text-white w-full">
            <Footer/>
        </div>
    )

}

interface SocialLink {
    icon:React.ReactNode,
    href:string,
    label:string
}

const socialLinks :  SocialLink[] = [
    {
        icon:<Github className="w-5 h-5"/>,
        href:"https://github.com/Shivrajsoni",
        label:'Github'
    },
    {
        icon:<Mail className="w-5 h-5"/>,
        href:'mailto:whothehellwasthat.dev@gmail.com',
        label:'Mail'
    },
    {
        icon:<Linkedin className="w-5 h-5"/>,
        href:"https://www.linkedin.com/in/shivraj-soni-34572b226/",
        label:'LinkedIn'
    },
    {
        icon:<Twitter className="w-5 h-5"/>,
        href:"https://x.com/_callmeXavier_",
        label:'X'
    },
]

function Footer(){
    return(
        <footer>
            <div className="flex justify-center space-x-6">
                {
                    socialLinks.map((link,index)=>(
                        <Link
                        key={index}
                        href={link.href}
                        className="text-gray-400 dark:hover:text-white hover:text-zinc-900 transition-colors duration-200"
                        aria-label={link.label}
                        >
                            {link.icon}
                        </Link>
                    ))
                }

            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shivraj Soni. All rights reserved.
      </div>
      <div className="mt-4 text-center text-sm">
        Made with ❤️ by Shivraj Soni
      </div>
        </footer>
    )
}
export default GetInTouch;