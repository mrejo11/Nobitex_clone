import {MoveLeft} from 'lucide-react'

interface ProductListWindowProps {
    title: string;
  }


export default function ProductListShow({title}:ProductListWindowProps) {
  return (
    <>
      <div className='flex items-center font-semibold w-[450px] justify-between text-2xl border-b border-l p-16 hover:bg-purple-100 transition-colors duration-300'>
        <h2 >  {title} </h2>
        <button className='rounded-full bg-purple-800 p-1 text-white cursor-pointer'>
        <MoveLeft />
        </button>
      </div>
    </>
  )
}
