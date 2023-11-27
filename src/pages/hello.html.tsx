import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Box, Button, Container, Flex, Input, Text, useToast } from "@chakra-ui/react"
import { getUrlParams } from "../utils/getUrlParams"
import { CopyIcon } from "@chakra-ui/icons"

const IndexPage: React.FC<PageProps> = () => {
  const ref = React.useRef<null | HTMLInputElement>(null)
  const toast = useToast()
  const [code, setCode] = React.useState('')
  const [useEn, setUseEn] = React.useState(true)
  React.useEffect(() => {
    setUseEn(!navigator.language.match(/^ja/))
  }, [])
  React.useEffect(() => {
    const obj = getUrlParams()
    setCode(obj.code)
  }, [])
  const showMessage = () => {
    toast({
      title: useEn ? 'Copied' : 'コピーしました',
      description: useEn ? 'Paste to TheDesk' : 'TheDeskに戻って貼り付けてください。',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  const copy = () => {
    {
      if (navigator.clipboard) {
        return navigator.clipboard.writeText(code).then(function () {
          showMessage()
        })
      } else {
        ref.current?.select()
        document.execCommand('copy')
        showMessage()
      }
    }
  }
  return (
    <Container centerContent={true} h="100vh" justifyContent="center">
      <Box textAlign="center">
        <Text fontSize={25}>Your Mastodon meets TheDesk</Text>
        <Text mt={5}>{useEn ? 'Paste it to the box on TheDesk' : 'コピーしてTheDeskに貼り付けてください。'}</Text>
        <Flex>
          <Input type="text" ref={ref} value={code} onChange={() => true} />
          <Button ml={3} leftIcon={<CopyIcon />} onClick={() => copy()}>{useEn ? 'Copy' : 'コピー'}</Button>
        </Flex>

      </Box>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>TheDesk - 404</title>
