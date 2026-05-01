"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, A11y } from "swiper/modules";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { testimonials } from "@/app/data/testimonials";
import Link from "next/link";
import styles from "./Testimonials.module.css";


function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    setIsClamped(el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition flex flex-col h-full">

      {/* Stars */}
      <div className="flex gap-1 text-yellow-400 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < t.rating ? "currentColor" : "none"}
            className={i < t.rating ? "" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Text */}
      <p
        ref={textRef}
        className="text-gray-700 leading-7 mb-4 flex-1 line-clamp-3"
      >
        “{t.text}”
      </p>

      {/* Read more (ONLY if clamped) */}
      {isClamped && (
        <Link
          href="/testimonials"
          className="text-primary font-medium text-sm hover:underline mb-4"
        >
          Read full testimonial →
        </Link>
      )}

      {/* Author */}
      <div>
        <p className="font-semibold">{t.name}</p>
        <p className="text-sm text-gray-500">{t.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Clients Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from clients who improved their website’s performance and stability.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          a11y={{
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            paginationBulletMessage: "Go to slide {{index}}",
          }}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4000 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          id="testimonials-swiper"
          className={styles.root}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex h-auto px-1">
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination (mobile only) */}
        <div className="custom-pagination mt-8 flex justify-center md:hidden" />

        <div className="hidden md:flex justify-end gap-3 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-base-300 bg-white hover:bg-primary hover:text-white hover:border-primary cursor-pointer transition"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-base-300 bg-white hover:bg-primary hover:text-white hover:border-primary cursor-pointer transition"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
}