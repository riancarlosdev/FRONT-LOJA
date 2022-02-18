import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/tmp/logo.png'

export default function Logo1_component():JSX.Element {
  return (
    <div>
      <Link href="/">
        <a className="cursor-pointer">
          <img width={82} height={56} src={'images/tmp/logo.png'} alt="imagem" />
        </a>
      </Link>
    </div>
  )
}