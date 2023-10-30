import banner from "../assets/banner/banner.png"

export const Banner = () => {
  return (
    <div className='xl:w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center min-h-[90vh]'>
        <div className='mt-5 md:mt-0'>
            <p className='text-primary text-2xl'>Welcome to</p>
            <h1 className='text-white text-4xl md:text-5xl lg:text-7xl'> Qu<span className='text-primary'>meex</span> – Your Partner in Web Development</h1>
            <p className='my-5 md:my-8 text-white'>At Qumeex, we are dedicated to turning your digital dreams into reality. Our web development services are designed to empower your business with a strong online presence, ensuring you stand out in the ever-evolving digital landscape.</p>
        </div>
        <div className='mt-5 md:mt-0'>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}
