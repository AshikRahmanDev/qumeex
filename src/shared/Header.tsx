import logo from "../assets/logo/web_logo.png"
import {BiSolidRightArrow} from 'react-icons/bi'

export const Header = () => {
  return (
    <div className="shadow-lg">
      <div className='xl:w-[1200px] w-[90%] mx-auto h-[64px] flex items-center justify-between'>
          <img className="w-[140px] md:w-[180px]" src={logo} alt="" />
          <button className="text-primary border px-3 py-1 md:px-6 md:py-2 rounded-md flex items-center">Hire Us <BiSolidRightArrow className="ml-2" /></button>
      </div>
    </div>
  )
}
