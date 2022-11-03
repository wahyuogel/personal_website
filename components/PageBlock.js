import Wahyu from "./Wahyu";

export default function PageBlock({children}) {
  return (
    <div class="md:max-lg:flex overflow-hidden flex items-center justify-between">
      <div class="flex">
        {children}
      </div>
      <div class="flex">
        <Wahyu class="visible md:invisible"/>
      </div>
    </div>
  );
}
