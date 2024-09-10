import Head from "next/head";
import Page from "../component/V25";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDefault, setIsDefault] = useState(true)
  useEffect(() => {
    setIsDefault(!navigator.language.match(/^ja/))
  }, [])
  return (
    <>
      <Head>
        <html lang="en" />
        <title>TheDesk</title>
        <meta name="description" content="TheDesk - Mastodon client for PC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/desk.svg" />
      </Head>
      <Page lang="en" isDefault={isDefault} />
    </>
  )
}
