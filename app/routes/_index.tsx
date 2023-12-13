import type { MetaFunction } from '@remix-run/node'
import ReviewCard from './ReviewCard'
import TestimonialCard from './TestimonialCard'

export const meta: MetaFunction = () => {
  return [{ title: 'Social Proof Section' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="z-1 relative mt-auto grid h-full max-w-6xl place-items-center px-6 py-20 lg:grid-cols-[27.8125rem_2rem_1fr] lg:py-28">
      <div className="text-center lg:text-left">
        <h1 className="text-very-dark-magenta mb-4 text-[2.5rem] font-bold leading-8 tracking-[0.08931rem] lg:text-[3.5rem] lg:leading-[3rem]">
          10,000+ of our users love our products.
        </h1>
        <p className="text-dark-grayish-magenta mb-[2.44rem] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[0.03956] lg:mt-4">
          We only provide great products combined with excellent customer service. See what our satisfied customers are
          saying about our services.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:col-start-3 lg:grid-cols-[3rem_3rem_1fr_3rem_3rem]">
        <ReviewCard text="Rated 5 Stars in Reviews" className="lg:col-span-3" />
        <ReviewCard text="Rated 5 Stars in Report Guru" className="lg:col-span-3 lg:col-start-2" />
        <ReviewCard text="Rated 5 Stars in BestTech" className="lg:col-span-3  lg:col-start-3" />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:max-w-xl lg:col-span-3 lg:max-w-none lg:grid-cols-3 lg:grid-rows-[1rem_1rem_1fr_1rem_1rem] lg:gap-[1.88rem] lg:gap-x-[1.88rem] lg:gap-y-0">
        <TestimonialCard
          name="Colton Smith"
          text="“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"
          img="/images/image-colton.jpg"
          className="lg:col-start-1 lg:row-span-3"
        />
        <TestimonialCard
          name="Irene Roberts"
          text="“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”"
          img="/images/image-irene.jpg"
          className="lg:col-start-2 lg:row-span-3 lg:row-start-2"
        />
        <TestimonialCard
          name="Anne Wallace"
          text="“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”"
          img="/images/image-anne.jpg"
          className="lg:col-start-3 lg:row-span-3 lg:row-start-3"
        />
      </div>
    </main>
  )
}
