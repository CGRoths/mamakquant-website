import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-mark" href="/" aria-label="MAMAKQUANT home">
      <Image
        src="/brand/mamakquant-signature.png"
        alt=""
        width={795}
        height={152}
        sizes={compact ? "(max-width: 740px) 144px, 172px" : "212px"}
        loading={compact ? "eager" : "lazy"}
      />
    </Link>
  );
}
