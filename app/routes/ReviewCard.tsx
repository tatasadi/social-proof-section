import Star from './Star'

export default function ReviewCard({ text }: { text: string }) {
  return (
    <div className="bg-light-grayish-magenta mb-4 flex flex-col items-center justify-center gap-4 rounded-lg p-4">
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
