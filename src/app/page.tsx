export const dynamic = "force-dynamic";

import Image from "next/image";
import { CircleArrowOutUpRight } from "lucide-react";
import { StackCarousel } from "@/components/StackCarousel";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { CommentsSection } from "@/components/CommentsSection";

interface SocialLinksProps {
  className?: string;
}

function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`hero-icons flex gap-6 ${className ?? ""}`.trim()}>
      <a
        href="https://github.com/MateusRanzani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub de Mateus Ranzani"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18.0001 0.52655C8.06019 0.52655 0 8.61341 0 18.5894C0 26.5701 5.15756 33.3408 12.3096 35.7292C13.2091 35.8964 13.5395 35.3374 13.5395 34.8603C13.5395 34.4296 13.5227 33.0066 13.5151 31.4973C8.50728 32.59 7.45061 29.3661 7.45061 29.3661C6.63181 27.2783 5.45204 26.7232 5.45204 26.7232C3.81897 25.6021 5.57514 25.6251 5.57514 25.6251C7.3827 25.7526 8.33448 27.4865 8.33448 27.4865C9.93988 30.248 12.5453 29.4496 13.5725 28.9882C13.734 27.8206 14.2006 27.0239 14.7153 26.5728C10.7173 26.1159 6.51436 24.5671 6.51436 17.646C6.51436 15.6741 7.21753 14.0626 8.36907 12.7977C8.18216 12.3427 7.56609 10.5056 8.54342 8.01757C8.54342 8.01757 10.0549 7.53209 13.4947 9.86911C14.9304 9.46877 16.4703 9.26818 18.0001 9.26138C19.5298 9.26818 21.0708 9.46877 22.5094 9.86911C25.9451 7.53209 27.4545 8.01757 27.4545 8.01757C28.4342 10.5056 27.8178 12.3427 27.6309 12.7977C28.785 14.0626 29.4834 15.6739 29.4834 17.646C29.4834 24.5836 25.2725 26.1113 21.2644 26.5583C21.91 27.1189 22.4852 28.2182 22.4852 29.9033C22.4852 32.3201 22.4643 34.2653 22.4643 34.8603C22.4643 35.3409 22.7883 35.9042 23.7009 35.7268C30.8489 33.3357 36 26.5674 36 18.5894C36 8.61341 27.9409 0.52655 18.0001 0.52655Z"
            fill="#E4E4E4"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/mateus-ranzani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Mateus Ranzani"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g clipPath="url(#linkedin-clip)">
            <path
              d="M0 1.29422C0 -0.248554 1.28802 -1.5 2.87616 -1.5H36.0458C37.634 -1.5 38.922 -0.248554 38.922 1.29422V34.7074C38.922 36.2501 37.634 37.5 36.0458 37.5H2.87616C1.28802 37.5 0 36.2501 0 34.7074V1.29422Z"
              fill="#E4E4E4"
            />
            <path
              d="M2.70825 4.45447H32.5299V33.0506H2.70825V4.45447Z"
              fill="#E4E4E4"
            />
            <path
              d="M10.9544 30.1272V13.92H5.57814V30.1272H10.9544ZM8.26769 11.708C10.142 11.708 11.3093 10.4631 11.3093 8.90748C11.2747 7.31711 10.142 6.10699 8.30376 6.10699C6.46407 6.10699 5.26215 7.31711 5.26215 8.90748C5.26215 10.4631 6.428 11.708 8.23306 11.708H8.26769ZM13.9296 30.1272H19.3058V21.0766C19.3058 20.5923 19.3404 20.108 19.4833 19.7624C19.8714 18.7937 20.7559 17.7918 22.2421 17.7918C24.1871 17.7918 24.9648 19.2781 24.9648 21.4569V30.1258H30.341V20.8337C30.341 15.8559 27.689 13.5398 24.1525 13.5398C21.2523 13.5398 19.9796 15.1634 19.2712 16.2694H19.3073V13.92H13.9296C14.0003 15.441 13.9296 30.1272 13.9296 30.1272Z"
              fill="#252525"
            />
          </g>
          <defs>
            <clipPath id="linkedin-clip">
              <rect width="36" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/mateus_ranzani/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de Mateus Ranzani"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12.001 18C12.001 14.6864 14.6864 11.9995 18 11.9995C21.3136 11.9995 24.0005 14.6864 24.0005 18C24.0005 21.3136 21.3136 24.0005 18 24.0005C14.6864 24.0005 12.001 21.3136 12.001 18ZM8.75722 18C8.75722 23.1048 12.8952 27.2428 18 27.2428C23.1048 27.2428 27.2428 23.1048 27.2428 18C27.2428 12.8952 23.1048 8.75722 18 8.75722C12.8952 8.75722 8.75722 12.8952 8.75722 18ZM25.4487 8.39074C25.4485 8.81794 25.575 9.23561 25.8122 9.59091C26.0494 9.94622 26.3867 10.2232 26.7813 10.3868C27.1759 10.5505 27.6102 10.5934 28.0292 10.5103C28.4483 10.4271 28.8332 10.2215 29.1354 9.91956C29.4376 9.6176 29.6435 9.23281 29.727 8.81384C29.8105 8.39488 29.7679 7.96056 29.6046 7.5658C29.4413 7.17105 29.1646 6.83359 28.8094 6.59611C28.4543 6.35862 28.0368 6.23177 27.6096 6.2316H27.6087C27.0361 6.23187 26.4869 6.4594 26.0819 6.86424C25.6769 7.26907 25.4492 7.8181 25.4487 8.39074ZM10.728 32.6516C8.97307 32.5716 8.01922 32.2793 7.38533 32.0324C6.54494 31.7052 5.94533 31.3155 5.3149 30.686C4.68446 30.0564 4.29422 29.4574 3.9685 28.617C3.72139 27.9834 3.42907 27.0292 3.3493 25.2743C3.26203 23.377 3.24461 22.807 3.24461 18.0001C3.24461 13.1933 3.26347 12.6249 3.3493 10.726C3.42922 8.97106 3.7237 8.01878 3.9685 7.38331C4.29566 6.54293 4.68533 5.94331 5.3149 5.31288C5.94446 4.68245 6.5435 4.29221 7.38533 3.96648C8.01893 3.71938 8.97307 3.42706 10.728 3.34728C12.6253 3.26002 13.1953 3.24259 18 3.24259C22.8047 3.24259 23.3752 3.26146 25.2742 3.34728C27.0291 3.4272 27.9814 3.72168 28.6168 3.96648C29.4572 4.29221 30.0568 4.68331 30.6873 5.31288C31.3177 5.94245 31.7065 6.54293 32.0337 7.38331C32.2808 8.01691 32.5731 8.97106 32.6529 10.726C32.7401 12.6249 32.7576 13.1933 32.7576 18.0001C32.7576 22.807 32.7401 23.3754 32.6529 25.2743C32.5729 27.0292 32.2792 27.9831 32.0337 28.617C31.7065 29.4574 31.3168 30.057 30.6873 30.686C30.0577 31.315 29.4572 31.7052 28.6168 32.0324C27.9832 32.2795 27.0291 32.5718 25.2742 32.6516C23.3768 32.7388 22.8069 32.7563 18 32.7563C13.1931 32.7563 12.6248 32.7388 10.728 32.6516ZM10.579 0.109008C8.66275 0.196272 7.35336 0.500112 6.20986 0.945072C5.0256 1.40458 4.02307 2.02104 3.02126 3.02126C2.01946 4.02149 1.40458 5.0256 0.945072 6.20986C0.500112 7.35408 0.196272 8.66275 0.109008 10.579C0.020304 12.4982 0 13.1118 0 18C0 22.8882 0.020304 23.5018 0.109008 25.421C0.196272 27.3374 0.500112 28.6459 0.945072 29.7901C1.40458 30.9737 2.0196 31.9789 3.02126 32.9787C4.02293 33.9785 5.0256 34.5941 6.20986 35.0549C7.35552 35.4999 8.66275 35.8037 10.579 35.891C12.4992 35.9783 13.1118 36 18 36C22.8882 36 23.5018 35.9797 25.421 35.891C27.3374 35.8037 28.6459 35.4999 29.7901 35.0549C30.9737 34.5941 31.9769 33.979 32.9787 32.9787C33.9805 31.9785 34.5941 30.9737 35.0549 29.7901C35.4999 28.6459 35.8052 27.3372 35.891 25.421C35.9783 23.5004 35.9986 22.8882 35.9986 18C35.9986 13.1118 35.9783 12.4982 35.891 10.579C35.8037 8.66261 35.4999 7.35336 35.0549 6.20986C34.5941 5.02632 33.979 4.02307 32.9787 3.02126C31.9785 2.01946 30.9737 1.40458 29.7916 0.945072C28.6459 0.500112 27.3372 0.194832 25.4225 0.109008C23.5032 0.021744 22.8897 0 18.0014 0C13.1132 0 12.4992 0.020304 10.579 0.109008Z"
            fill="#E4E4E4"
          />
        </svg>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main id="apresentacao" className="lg:flex lg:gap-8 h-screen">
        <div className="hidden lg:flex items-center flex-1">
          <div className="ml-12 gap-12 grid">
            <p className="hero-text-1 text-[var(--terciary-bg)] text-[32px]">
              Olá! Muito prazer, meu nome é Mateus
            </p>
            <p className="hero-title text-[var(--orange-bg)] text-[112px] font-bold text-start text leading-26">
              Desenvolvedor <br /> Full-Stack
            </p>
            <div className="hero-desc border-l-2 border-[var(--orange-bg)] pl-2">
              <p className="text-[var(--terciary-bg)] text-xl">
                Desenvolvedor <b>Full Stack</b>{" "}com experiência em&nbsp;
                <b>Next.js, Nodejs e Java.</b> <br />
                Também crio experiências digitais intuitivas através de{" "}
                <b>UI/UX</b>.
                <br />
                Sempre aprendendo, sempre evoluindo — porque com a lógica certa,
                tudo é possível. <br />
              </p>
            </div>
            <a
              href="#contato"
              className="hero-btn inline-flex items-center justify-center bg-[var(--orange-bg)] hover:bg-[#e06300] active:bg-[#c95800] text-white font-medium rounded-xl px-12 py-6 text-lg transition-colors duration-200"
            >
              Me contate
            </a>
            <SocialLinks />
          </div>
        </div>

        <div className="hero-img image-container relative w-full h-[100%] max-h-[95%] lg:w-[655px] lg:h-screen lg:mr-12">
          <div className="hero-img-wrapper w-full h-full rounded-b-[655px] overflow-hidden">
            <Image
              src="/main.png"
              alt="Imagem principal"
              fill
              className="object-cover"
            />
          </div>

          {/* Gradient overlay mobile */}
          <div className="absolute inset-0 lg:hidden rounded-b-[655px] bg-gradient-to-t from-[var(--primary-bg)] via-[var(--primary-bg)]/60 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full px-5 pb-8 flex lg:hidden flex-col gap-3">
            <div className="flex flex-col gap-2">
              <span className="self-start bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm py-1 px-4 rounded-full">
                Olá! Muito prazer
              </span>
              <span className="self-start ml-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base py-1.5 px-5 rounded-full">
                Meu nome é <strong>Mateus</strong>
              </span>
              <h1 className="text-white text-[28px] font-bold leading-tight mt-1">
                Desenvolvedor
                <br />
                <span className="text-[var(--orange-bg)]">Full-Stack</span>
              </h1>
            </div>
            <a
              href="#contato"
              className="hero-btn inline-flex items-center justify-center gap-2 bg-[var(--orange-bg)] hover:bg-[#e06300] active:bg-[#c95800] text-white font-medium rounded-xl w-full py-4 text-base transition-colors duration-200 mt-1"
            >
              Me contate <CircleArrowOutUpRight className="w-4 h-4" />
            </a>
            <SocialLinks className="mt-1" />
          </div>
        </div>
      </main>
      <div className="hero-desc border-l-2 border-[var(--orange-bg)] m-4 flex lg:hidden mt-12">
        <p className="text-[var(--terciary-bg)] text-base lg:text-xl ml-4">
          Desenvolvedor <b>Full Stack</b>{" "}com experiência em&nbsp;
          <b>Next.js, Nodejs e Java.</b> <br />
          Também crio experiências digitais intuitivas através de <b>UI/UX</b>
          .
          <br />
          Sempre aprendendo, sempre evoluindo — porque com a lógica certa, tudo
          é possível. <br />
        </p>
      </div>
      <section id="sobre">
        <StackCarousel />
        <div className="career-section w-full px-4 lg:px-12 my-12">
          <div className="career-card lg:py-12 bg-[var(--primary-bg)] rounded-2xl lg:grid lg:grid-cols-2">
            <div className="career-img relative w-full h-full hidden lg:flex">
              <Image
                src="/career.svg"
                alt="Imagem principal"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h5 className="career-title flex justify-center gap-2 lg:justify-start text-2xl lg:text-4xl font-semibold text-white">
                Minha <span className="text-[var(--orange-bg)]">carreira</span>
              </h5>
              <p className="career-text text-white mt-4 text-center lg:text-start">
                Sou <span className="text-[var(--orange-bg)]">graduado</span> em{" "}
                <span className="text-[var(--orange-bg)]">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                pela UNINTER, formação que me proporcionou a base necessária
                para atuar de forma sólida como desenvolvedor.
                <br />
                <br />
                Atuo como desenvolvedor{" "}
                <span className="text-[var(--orange-bg)]">full stack</span>, com
                experiência em tecnologias como{" "}
                <span className="text-[var(--orange-bg)]">
                  PHP, Angular, Next.js, React.js, Node.js, Java, MySQL e
                  PostgreSQL
                </span>
                , participando de projetos que vão desde plataformas de
                e-commerce e CRMs até sistemas para a administração pública —
                da criação de novas funcionalidades à evolução de sistemas
                legados, integrações e migrações. Antes de ingressar na área
                de desenvolvimento, trabalhei como designer gráfico,
                experiência que agregou criatividade, visão estética e a
                capacidade de unir técnica e design em projetos digitais.
                <br />
                <br /> Estou sempre em busca de novos desafios e oportunidades
                de aprendizado, com o objetivo de evoluir continuamente e
                construir uma carreira integrada, que valorize tanto o aspecto
                técnico quanto o criativo.
                <br />
                <br />
                Acredito que tudo é possível: com a lógica certa, sempre existe
                um caminho para superar desafios.
              </p>
            </div>
          </div>
        </div>
        <Expertise />
      </section>
      <Projects />
      <Contact />
      <CommentsSection />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
