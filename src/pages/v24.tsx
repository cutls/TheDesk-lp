import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Page from '../component/V24'

const IndexPage: React.FC<PageProps> = () => {
  const [isDefault, setIsDefault] = React.useState(true)
  React.useEffect(() => {
    setIsDefault(!!navigator.language.match(/^ja/))
  }, [])
  return (
    <Page lang="ja" isDefault={isDefault} />
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <html lang="ja" />
  <title>TheDesk - Mastodon Client for PC</title>
</>
