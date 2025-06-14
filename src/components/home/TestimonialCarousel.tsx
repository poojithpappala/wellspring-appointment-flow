
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  quote: string;
  author: string;
  stars: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-md mx-auto md:mx-0"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} aria-roledescription="slide" aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}>
            <div className="p-1">
              <Card className="bg-background shadow-soft rounded-2xl">
                <CardContent className="flex flex-col items-center md:items-start justify-center p-6 space-y-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="sr-only">{testimonial.stars} out of 5 stars</span>
                  </div>
                  <p className="text-base text-charcoal leading-body italic">
                    "{testimonial.quote}"
                  </p>
                  <span className="font-semibold text-deep-teal">— {testimonial.author}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex disabled:opacity-30" aria-label="Previous testimonial"/>
      <CarouselNext className="hidden md:flex disabled:opacity-30" aria-label="Next testimonial"/>
    </Carousel>
  );
};

export default TestimonialCarousel;
