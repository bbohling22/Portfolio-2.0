import { Inter } from 'next/font/google'
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillGoogleSquare } from "react-icons/ai";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className='  min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>Bryan Bohling</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillFileEarmarkPersonFill className='cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md ml-8' href='#'>Resume</a>
            </li>
          </ul>
        </nav>
        <div>

        </div>
        <div>
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiFillTwitterCircle/>
          <AiFillGoogleSquare/>
        </div>
      </section>
    </main>
  )
}
