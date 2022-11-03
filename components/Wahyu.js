import Image from "next/image";
import WahyuImg from "../public/wahyu.svg";
export default function Wahyu() {
  return (
    <div>
      <Image class="object-contain " src={WahyuImg} alt="" />
    </div>
  );
}
