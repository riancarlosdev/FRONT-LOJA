import Link from "next/link";

export default function Compra_Endereco():JSX.Element {
  return (
    <>
      <div className="w-6 h-4 bg-1 mt-5 duration-300"></div>
      <Link href={'/compra/forma_pagamento'}>
        <a>Next</a>
      </Link>
    </>
  )
}