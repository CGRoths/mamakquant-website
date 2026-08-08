import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-mark" href="/" aria-label="MAMAKQUANT home">
      <span className="brand-mark__symbol">
        <Image
          src="/brand/mamakquant-mark.png"
          alt=""
          fill
          preload
          sizes={compact ? "36px" : "42px"}
        />
      </span>
      <span className="brand-mark__word">MAMAKQUANT</span>
    </Link>
  );
}
