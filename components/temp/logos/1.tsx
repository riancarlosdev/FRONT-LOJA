import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/tmp/logo.png'

export default function Logo1():JSX.Element {
  return (
    <div>
      <Link href="/">
        <a className="cursor-pointer">
          <Image width={82} height={56} src={Logo} />
        </a>
      </Link>
    </div>
  )
}