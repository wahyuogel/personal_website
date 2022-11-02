import Image from "next/image";
import Wahyu from "../public/wahyu.svg";

export default function Header() {
  return (
    <div>
      <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div class="flex w-full items-center justify-between md:w-auto">
              <a href="#">
                <Image
                  alt="Wahyu Nugraha"
                  class="h-8 w-auto sm:h-10"
                  src={Wahyu}
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            <a href="https://linkedin.com/in/wahyuadityanugraha" class="font-medium text-gray-500 hover:text-gray-900">
              About
            </a>

            <a href="https://linkedin.com/in/wahyuadityanugraha" class="font-medium text-gray-500 hover:text-gray-900">
              Experience
            </a>
            <a
              href="mailto:wahyuadityanugraha@rocketmail.com"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>

      <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
        <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
          <div class="flex items-center justify-between px-5 pt-4">
            <div>
              <Image
                alt="Wahyu Nugraha"
                class="h-8 w-auto sm:h-10"
                src={Wahyu}
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a
              href="https://linkedin.com/in/wahyuadityanugraha"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>

            <a
              href="https://linkedin.com/in/wahyuadityanugraha"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Experience
            </a>
          </div>
          <a
            href="mailto:wahyuadityanugraha@rocketmail.com"
            class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
