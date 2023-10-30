import { SectionTitle } from "../shared/SectionTitle"

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
            <div className="min-h-[280px] shadow-2xl border-white/5 border">

            </div>
            <div className="min-h-[280px] shadow-2xl border-white/5 border">

            </div>
            <div className="min-h-[280px] shadow-2xl border-white/5 border">

            </div>
        </div>
    </div>
  )
}