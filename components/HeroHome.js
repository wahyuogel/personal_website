import Image from "next/image";
import Wahyu from "../public/wahyu.svg";

export default function HeroHome() {
  return (
    <div class="relative overflow-hidden flex items-center justify-between">
      <div class="mx-auto w-1/2">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Hi, My name is Wahyu Nugraha</span>
            <br />
            <span class="block text-indigo-600 xl:inline">
              Creative Technologist
            </span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Specialized in Front-end Architect, who has specialisation for
            develop cutting edge web & mobile applications.
            Based in Jakarta, Indonesia.
            With years of experience in many industries, such as Banking, B2B
            commerce, Tax, Blockchain, Social Media Platform, Marketing
            & Analytics
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                href="https://linkedin.com/in/wahyuadityanugraha"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                LinkedIn
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="https://github.com/wahyuogel"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto w-1/2">
        <Image class="w-full h-96" src={Wahyu} alt="" />
      </div>
    </div>
  );
}
