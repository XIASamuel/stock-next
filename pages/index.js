import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>CHUANGJIAN XIA Page</title>
    </Head>
    <h1>CHUANGJIAN XIA Page</h1>
    <p>
      This is a sample page for CHUANGJIAN XIA.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
