"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function Expertise() {
  return (
    <section className="expertise-section lg:my-12 lg:px-12">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {/* Front-end */}
        <SwiperSlide>
          <div className="expertise-card p-8 bg-[var(--primary-bg)] rounded-2xl h-full">
            <div className="flex gap-4">
              <h5 className="text-white font-semibold text-lg">Front-end</h5>
              <hr className="expertise-hr border-t-2 border-[var(--orange-bg)] my-4 flex-1" />
            </div>

            <div className="mt-2 text-white text-sm">
              <p>
                Gosto de criar do zero e transformar ideias em experiências
                vivas no navegador.
              </p>
              <br />
              <p>
                <span className="font-bold text-[var(--orange-bg)]">
                  Ferramentas:
                </span>{" "}
                NextJS, ReactJS, JavaScript, HTML, CSS
              </p>
              <br />
              <p>
                Possuo ampla experiência em frontend, trabalhando tanto com
                frameworks modernos quanto com JavaScript puro.
                <br />
                <br />
                Experiência: 4 anos
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Back-end */}
        <SwiperSlide>
          <div className="expertise-card p-8 bg-[var(--primary-bg)] rounded-2xl h-full">
            <div className="flex gap-4">
              <h5 className="text-white font-semibold text-lg">Back-end</h5>
              <hr className="expertise-hr border-t-2 border-[var(--orange-bg)] my-4 flex-1" />
            </div>

            <div className="mt-2 text-white text-sm">
              <p>Todo bom site nasce de uma arquitetura bem planejada.</p>
              <br />
              <p>
                <span className="font-bold text-[var(--orange-bg)]">
                  Ferramentas:
                </span>{" "}
                PHP, Java, Node.js
              </p>
              <br />
              <p>
                Atuei em projetos de back-end focados em estruturas sólidas,
                organização e boas práticas.
                <br />
                <br />
                Experiência: 4 anos
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Design */}
        <SwiperSlide>
          <div className="expertise-card p-8 bg-[var(--primary-bg)] rounded-2xl h-full">
            <div className="flex gap-4">
              <h5 className="text-white font-semibold text-lg">
                Designer Gráfico
              </h5>
              <hr className="expertise-hr border-t-2 border-[var(--orange-bg)] my-4 flex-1" />
            </div>

            <div className="mt-2 text-white text-sm">
              <p>Cada criação começa com uma faísca de criatividade.</p>
              <br />
              <p>
                <span className="font-bold text-[var(--orange-bg)]">
                  Ferramentas:
                </span>{" "}
                Figma, Photoshop, Illustrator, CorelDraw
              </p>
              <br />
              <p>
                Experiência em design gráfico aplicada hoje na criação de
                interfaces criativas, funcionais e amigáveis.
                <br />
                <br />
                Experiência: 4 anos
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
