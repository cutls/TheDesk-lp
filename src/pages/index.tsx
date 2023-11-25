import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Page from '../component/Page'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page lang="ja" isDefault={!!navigator.language.match(/^ja/)} />
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <html lang="ja" />
  <title>TheDesk - Mastodon Client for PC</title>
</>
