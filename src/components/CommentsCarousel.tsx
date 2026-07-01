"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
};

export function CommentsCarousel({ comments }: { comments: Comment[] }) {
  return (
    <section className="px-4 lg:px-12 pb-16 lg:pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold text-white">
          O que <span className="text-[var(--orange-bg)]">dizem</span>
        </h2>
        <p className="text-[var(--terciary-bg)] text-sm mt-2 opacity-70">
          Mensagens de quem entrou em contato
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0:    { slidesPerView: 1.1 },
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <div className="flex flex-col gap-5 p-6 bg-[var(--primary-bg)] rounded-2xl h-full min-h-[200px]">
              {/* Quote icon */}
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 22V13.5455C0 11.5152 0.378788 9.56061 1.13636 7.68182C1.89394 5.78788 2.98485 4.09848 4.40909 2.61364C5.83333 1.1288 7.53788 0.0378788 9.52273 -0.659091e-7L11.3636 3.31818C9.84848 3.71212 8.53788 4.5 7.43182 5.68182C6.32576 6.84091 5.65909 8.22727 5.43182 9.84091H11.3636V22H0ZM16.6364 22V13.5455C16.6364 11.5152 17.0152 9.56061 17.7727 7.68182C18.5303 5.78788 19.6212 4.09848 21.0455 2.61364C22.4697 1.1288 24.1742 0.0378788 26.1591 -0.659091e-7L28 3.31818C26.4848 3.71212 25.1742 4.5 24.0682 5.68182C22.9621 6.84091 22.2955 8.22727 22.0682 9.84091H28V22H16.6364Z"
                  fill="var(--orange-bg)"
                  fillOpacity="0.6"
                />
              </svg>

              {/* Message */}
              <p className="text-[var(--terciary-bg)] text-sm leading-relaxed flex-1 line-clamp-5">
                {comment.message}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-[var(--orange-bg)]/20 flex items-center justify-center text-[var(--orange-bg)] font-bold text-sm flex-shrink-0">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    {comment.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(comment.createdAt).toLocaleDateString("pt-BR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
