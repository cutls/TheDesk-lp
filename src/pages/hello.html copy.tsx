import { CopyIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Input, Text, useToast } from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import { getUrlParams } from '../utils/getUrlParams'

export default function Home() {
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
		if (navigator.clipboard) {
			return navigator.clipboard.writeText(code).then(() => {
				showMessage()
			})
		}
		ref.current?.select()
		document.execCommand('copy')
		showMessage()
	}
	return (
		<html lang="en">
			<Head>
				<title>Integration - TheDesk</title>
				<meta name="description" content="TheDesk - Mastodon client for PC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/desk.svg" />
			</Head>
			<Container centerContent={true} h="100vh" justifyContent="center">
				<Box textAlign="center">
					<Text fontSize={25}>Your Mastodon meets TheDesk</Text>
					<Text mt={5}>{useEn ? 'Paste it to the box on TheDesk' : 'コピーしてTheDeskに貼り付けてください。'}</Text>
					<Flex>
						<Input type="text" ref={ref} value={code} onChange={() => true} />
						<Button ml={3} leftIcon={<CopyIcon />} onClick={() => copy()}>
							{useEn ? 'Copy' : 'コピー'}
						</Button>
					</Flex>
				</Box>
			</Container>
		</html>
	)
}
