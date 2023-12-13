import type { MetaFunction } from '@remix-run/node'
import ReviewCard from './ReviewCard'
import TestimonialCard from './TestimonialCard'

export const meta: MetaFunction = () => {
  return [{ title: 'Social Proof Section' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="z-1 relative px-6 py-20">
      <h1 className="text-very-dark-magenta mb-4 p-4 text-center text-[2.5rem] font-bold leading-8 tracking-[0.08931rem]">
        10,000+ of our users love our products.
      </h1>
      <p className="text-dark-grayish-magenta mb-[2.44rem] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[0.03956]">
        We only provide great products combined with excellent customer service. See what our satisfied customers are
        saying about our services.
      </p>
      <ReviewCard text="Rated 5 Stars in Reviews" />
      <ReviewCard text="Rated 5 Stars in Report Guru" />
      <ReviewCard text="Rated 5 Stars in BestTech" />
      <div className="mt-8">
        <TestimonialCard
          name="Colton Smith"
          text="“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"
          img="/images/image-colton.jpg"
        />
        <TestimonialCard
          name="Irene Roberts"
          text="“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”"
          img="/images/image-irene.jpg"
        />
        <TestimonialCard
          name="Anne Wallace"
          text="“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”"
          img="/images/image-anne.jpg"
        />
      </div>
    </main>
  )
}
