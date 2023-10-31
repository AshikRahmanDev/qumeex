import { SectionTitle } from "../shared/SectionTitle"
import {CgWebsite} from 'react-icons/cg'
import {MdOutlineAddBusiness,MdSettingsApplications} from "react-icons/md"

export const Service = () => {
  return (
    <div className="xl:w-[1200px] w-[90%] mx-auto">
        <SectionTitle
        badge="service"
        title="Web Development Solutions"
        description="Tailored digital solutions to meet your specific business needs. From concept to creation, we design and build custom websites that set you apart in the online world."
        />
        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            {/* service */}
            <div data-aos="fade-right" data-aos-duration="1000" className="min-h-[280px] flex flex-col items-center justify-center shadow-2xl border-white/5 border rounded-md">
              <CgWebsite className="text-primary text-7xl"/>
              <div className="text-white text-center px-4 mt-7">
                <h2 className="text-3xl font-bold">Custom Web Development</h2>
                <p className="text-white/70">Whether you need a brand-new website or want to revamp an existing one, we're here to make it happen.</p>
              </div>
            </div>
            {/* service */}
            <div data-aos="zoom-in" data-aos-duration="1000" className="min-h-[280px] flex flex-col items-center justify-center shadow-2xl border-white/5 border rounded-md">
              <MdOutlineAddBusiness className="text-primary text-7xl"/>
              <div className="text-white text-center px-4 mt-7">
                <h2 className="text-3xl font-bold">E-Commerce Solutions</h2>
                <p className="text-white/70">We build secure and scalable e-commerce websites, helping you take your products and services online.</p>
              </div>
            </div>
            {/* service */}
            <div data-aos="fade-left" data-aos-duration="1000" className="min-h-[280px] flex flex-col items-center justify-center shadow-2xl border-white/5 border rounded-md">
              <MdSettingsApplications className="text-primary text-7xl"/>
              <div className="text-white text-center px-4 mt-7">
                <h2 className="text-3xl font-bold">Web Application Development</h2>
                <p className="text-white/70">From booking systems to social networks, we create powerful web applications tailored to your requirements.</p>
              </div>
            </div>
        </div>
    </div>
  )
}