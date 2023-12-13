import Star from './Star'

export default function ReviewCard({ text, className = '' }: { text: string; className: string }) {
  return (
    <div
      className={`bg-light-grayish-magenta flex flex-col items-center justify-center gap-4 rounded-lg p-4 px-16 lg:flex-row lg:px-8 ${className}`}
    >
      <div className="flex gap-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-very-dark-magenta text-[1.0625rem] font-bold">Rated 5 Stars in Reviews</p>
    </div>
  )
}
