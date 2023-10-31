
type titleProps = {badge:string,title:string,description:string}
export const SectionTitle = ({badge,title,description}:titleProps) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="text-center my-5">
        <p className="text-primary text-xl">{badge}</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-white">{title}</h2>
        <p className="text-gary text-sm py-2 md:w-[50%] mx-auto text-white/70">{description}</p>
    </div>
  )
}
