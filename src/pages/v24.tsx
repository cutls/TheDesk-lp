import * as React from "react"
import Page from '../component/V24'

export default function Home() {
  const [isDefault, setIsDefault] = React.useState(true)
  React.useEffect(() => {
    setIsDefault(!!navigator.language.match(/^ja/))
  }, [])
  return (
    <Page lang="ja" isDefault={isDefault} />
  )
}
