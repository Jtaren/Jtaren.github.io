import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube,} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/JtAren.jpg";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import tags from "../public/tags.png";
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jtaren Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className= "min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h6 className="text-xl font-burtons">developedbyAren</h6>
            <ul className="flex items-center gap-16">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="https://github.com/Jtaren" target="_blank" rel="noreferrer noopener">GitHub</a></li>
            </ul>
          </nav>
          
          <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">Jatau Solomon Aren</h2>
          <h3 className="text-2xl py-2 dark:text-white">Full Stack Developer and Cloud Engineer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">I am committed to development in blockchain and Web 3.0 technology as a path to a 
          decentralised web. My objective has always been to change the lives of others, using the opportunities provided by these technologies.
          </p>
          </div>
          <div className="text-5xl flex justify-center gap-20 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://twitter.com/jt_aren" target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle /></a>
          <a href="https://www.linkedin.com/in/jtaren/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin /></a>
          <a href="https://www.youtube.com/" target="_blank " rel="noreferrer noopener"><AiFillYoutube /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden">
            <Image alt="JtAren" src={deved} layout="fill" objectFit="cover"/>
          </div>

        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Since the beginning of my journey as a full stack web developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500" > startups </span> and collaborated with talented people to create digital products for both business and consumer use. Find the link to my GitHub for projects I have executed.
               </p>
               <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer a wide range of services, including programming and teaching. 
               </p>
          </div>
          <div className="lg:flex gap-5">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image  alt="code" src={code} width={300} height={300} />    
              <p className="text-lg font-medium pt-8 pb-2">Writing clean and well-structured code suited for your application with Flaskr and React</p>
              <h4 className="py-4 text-teal-600">Programming languages I have proficiency</h4>
              <p className="text-gray-800 py-1">HTML & CSS</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">SQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="code" src={tags} width={300} height={300} />
              <p className="text-lg font-medium pt-8 pb-2">I teach full Stack web development courses for absolute beginners that are passionate about coding, with fundamentals in HTML, CSS and Javascript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image alt="consulting" src={consulting} width={300} height={300} />
              <p className="text-lg font-medium pt-8 pb-2">for improving the online presence of clients and their businesses, I offer practical suggestions with focus on website strategy, engagement, 
              navigational paths, user experience journey, content strategy, prototyping, user interface design, and more 
              </p>
            </div> 
        </div>    
        </section>
        <section>
          <div className="lg:flex gap-5">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h2 className="text-lg font-medium pt-8 pb-2">CONTACT ME</h2>
              <h4><span>Email:  Jatauaren@gmail.com</span></h4>
              <h4><span>Mobile Number:  +2347033979258</span></h4>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}
