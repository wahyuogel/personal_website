import Image from "next/image";
import Wahyu from "../public/wahyu.svg";

export default function Header() {
  return (
    <div>
      <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
          <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div class="flex w-full justify-between md:w-auto items-center">
              <a href="/">
                <Image
                  alt="Wahyu Nugraha"
                  class="h-8 w-auto sm:h-10"
                  src={Wahyu}
                />
              </a>
              <a
              href="https://linkedin.com/in/wahyuadityanugraha"
              class="font-medium px-3 text-gray-500 hover:text-gray-900"
            >
              Resume
            </a>
            <a
              href="/works"
              class="font-medium px-3 text-gray-500 hover:text-gray-900"
            >
              Works
            </a>
            <a
              href="/experience"
              class="font-medium px-3 text-gray-500 hover:text-gray-900"
            >
              Experience
            </a>
            <a
              href="mailto:wahyuadityanugraha@rocketmail.com"
              class="font-medium px-3 text-indigo-600 hover:text-indigo-500"
            >
              Contact
            </a>
            </div>
          </div>
      </div>
    </div>
  );
}
