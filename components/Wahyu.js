import Image from "next/image";
import WahyuImg from "../public/wahyu.svg";
export default function Wahyu() {
  return (
    <div>
      <Image class="w-full h-96" src={WahyuImg} alt="" />
    </div>
  );
}
