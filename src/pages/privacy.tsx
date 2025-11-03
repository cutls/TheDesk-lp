import { Badge, Box, Container, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import { files } from '../meta'
import { getColorOfCodename } from '../utils/getColorOfCodename'

export default function Home() {
	return (
		<Container centerContent={true} h="100vh" justifyContent="center">
			<Head>
				<title>Privacy Policy - TheDesk</title>
				<meta name="description" content="TheDesk - Mastodon client for PC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/desk.svg" />
			</Head>
			<Box>
				<Text fontSize={25}>Privacy Policy</Text>
				<Text>このアプリケーションはサーバーにアクセスするための認証情報を保持しますが、開発元に送信することはありません。</Text>
				<Text>最新データを取得するために、開発元のサーバーにアクセスし、そのデータを表示しますが、開発元に送信することはありません。IPアドレス等の個人を特定しうる情報は取得・保存していません。</Text>
				<Text>Spotifyと連携するために、開発元のサーバーにアクセスしますが。あなたのデータやSpotifyの認証情報を保存することはありません。</Text>
				<Text>開発元はAWS(Amazon Web Services)を利用しこれらのサービスを提供しています。</Text>
			</Box>
		</Container>
	)
}
