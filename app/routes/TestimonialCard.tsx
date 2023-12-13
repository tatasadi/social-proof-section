export default function TestimonialCard({
  name,
  text,
  img,
  className = '',
}: {
  name: string
  text: string
  img: string
  className: string
}) {
  return (
    <div className={`bg-very-dark-magenta rounded-lg px-8 py-10 text-[1.0625rem] text-white ${className}`}>
      <div className="flex items-center gap-6">
        <img src={img} className="h-10 w-10 rounded-full" alt={name} />
        <div>
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-soft-pink">Verified Buyer</h2>
        </div>
      </div>
      <p className="font-medium leading-[1.375rem] tracking-[-0.019rem]">{text}</p>
    </div>
  )
}
