import Image from "next/image";

export default function TopBanner() {
  return (
    <div className="promoBanner">
      <div className="promoItem">
        <Image
          src="/assets/lorem.png"
          alt="icon"
          width={16}
          height={16}
          className="promoIcon"
        />
        <span className="promoText">Lorem ipsum dolor</span>
      </div>
      <div className="promoItem">
        <Image
          src="/assets/lorem.png"
          alt="icon"
          width={16}
          height={16}
          className="promoIcon"
        />
        <span className="promoText">Lorem ipsum dolor</span>
      </div>
      <div className="promoItem">
        <Image
          src="/assets/lorem.png"
          alt="icon"
          width={16}
          height={16}
          className="promoIcon"
        />
        <span className="promoText">Lorem ipsum dolor</span>
      </div>
    </div>
  );
}
