import { CommentsForm } from "./CommentsForm";

export function Contact() {
  return (
    <section className="py-12 px-8 md:px-16 flex flex-col md:flex-row items-center relative justify-between gap-12">
      <div className="z-10">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Entre em contato{" "}
          <span className="text-[var(--orange-bg)]">comigo!</span>
        </h2>
        <div className="ml-14">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/avatar.png"
              alt="Mateus Ranzani"
              className="w-24 h-24 rounded-full border-4 border-[var(--orange-bg)]"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Mateus Ranzani
              </h3>
              <p className="text-gray-400">Desenvolvedor full-stack</p>
            </div>
          </div>
          <ul className="space-y-4 mt-6">
            <li className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-12 h-12 flex items-center justify-center bg-[var(--orange-bg)]/30 rounded-[4px]">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 2.75968L8.6406 8.04552C9.3124 8.49559 10.1876 8.49559 10.8594 8.04552L18.75 2.75968M0.75 2.75968C0.75 1.64976 1.64543 0.75 2.75 0.75H16.75C17.8546 0.75 18.75 1.64976 18.75 2.75968M0.75 2.75968V12.8081C0.75 13.918 1.64543 14.8177 2.75 14.8177H16.75C17.8546 14.8177 18.75 13.918 18.75 12.8081V2.75968"
                      stroke="#FD6F00"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href="mailto:mateusranzani238@gmail.com"
                    className="text-gray-300 hover:text-[var(--orange-bg)] transition"
                  >
                    mateusranzani238@gmail.com
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-12 h-12 flex items-center justify-center bg-[var(--orange-bg)]/30 rounded-[4px]">
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.2143 0H1.78013C0.797991 0 0 0.821289 0 1.82949V23.5455C0 24.5537 0.797991 25.375 1.78013 25.375H23.2143C24.1964 25.375 25 24.5537 25 23.5455V1.82949C25 0.821289 24.1964 0 23.2143 0ZM7.5558 21.75H3.85045V9.64023H7.56138V21.75H7.5558ZM5.70312 3.625C6.27293 3.625 6.81939 3.85475 7.2223 4.2637C7.62521 4.67266 7.85156 5.22732 7.85156 5.80566C7.85156 6.38401 7.62521 6.93867 7.2223 7.34763C6.81939 7.75658 6.27293 7.98633 5.70312 7.98633C5.13332 7.98633 4.58686 7.75658 4.18395 7.34763C3.78104 6.93867 3.55469 6.38401 3.55469 5.80566C3.55469 5.22732 3.78104 4.67266 4.18395 4.2637C4.58686 3.85475 5.13332 3.625 5.70312 3.625ZM21.4453 21.75H17.74V15.8594C17.74 14.4547 17.7121 12.6479 15.8147 12.6479C13.8839 12.6479 13.5882 14.1771 13.5882 15.7574V21.75H9.88281V9.64023H13.4375V11.2941H13.4877C13.9844 10.3426 15.1953 9.34004 16.9978 9.34004C20.7478 9.34004 21.4453 11.8492 21.4453 15.1117V21.75Z"
                      fill="#FD6F00"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/mateus-ranzani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--orange-bg)] transition"
                  >
                    linkedin.com/in/mateus-ranzani
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-12 h-12 flex items-center justify-center bg-[var(--orange-bg)]/30 rounded-[4px]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5 0C6.93625 0 0 6.9698 0 15.575C0 22.4669 4.43687 28.2881 10.5981 30.3517C11.3731 30.488 11.6637 30.0208 11.6637 29.6119C11.6637 29.242 11.6444 28.0155 11.6444 26.7111C7.75 27.4314 6.7425 25.7571 6.4325 24.881C6.25812 24.4333 5.5025 23.051 4.84375 22.6811C4.30125 22.389 3.52625 21.6687 4.82438 21.6492C6.045 21.6298 6.91687 22.7784 7.2075 23.2457C8.6025 25.6014 10.8306 24.9394 11.7219 24.5306C11.8575 23.5182 12.2644 22.8368 12.71 22.4474C9.26125 22.0581 5.6575 20.7147 5.6575 14.7573C5.6575 13.0635 6.25812 11.6618 7.24625 10.5715C7.09125 10.1821 6.54875 8.58571 7.40125 6.44415C7.40125 6.44415 8.69938 6.03531 11.6637 8.04058C12.9037 7.69015 14.2213 7.51493 15.5388 7.51493C16.8563 7.51493 18.1738 7.69015 19.4138 8.04058C22.3781 6.01584 23.6763 6.44415 23.6763 6.44415C24.5288 8.58571 23.9862 10.1821 23.8313 10.5715C24.8194 11.6618 25.42 13.044 25.42 14.7573C25.42 20.7342 21.7969 22.0581 18.3481 22.4474C18.91 22.9342 19.3944 23.8687 19.3944 25.3288C19.3944 27.412 19.375 29.0863 19.375 29.6119C19.375 30.0208 19.6656 30.5075 20.4406 30.3517C26.5631 28.2881 31 22.4474 31 15.575C31 6.9698 24.0637 0 15.5 0Z"
                      fill="#FD6F00"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-white">Github</p>
                  <a
                    href="https://github.com/MateusRanzani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--orange-bg)] transition"
                  >
                    github.com/MateusRanzani
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 bg-[#1b1b1b] rounded-2xl p-8 shadow-lg w-full md:w-auto">
        <CommentsForm />
      </div>
      <div className="absolute top-0 left-0 w-[100px] h-full bg-[var(--orange-bg)] rounded-tr-[48px] rounded-br-[48px]"></div>
    </section>
  );
}
