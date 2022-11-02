import Wahyu from "./Wahyu";

export default function PageBlock({children}) {
  return (
    <div class="relative overflow-hidden flex items-center justify-between">
      <div class="mx-auto w-1/2">
        {children}
      </div>
      <div class="mx-auto w-1/2">
        <Wahyu />
      </div>
    </div>
  );
}
