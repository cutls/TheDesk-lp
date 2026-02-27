import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Badge,
	Box,
	Button,
	ButtonGroup,
	Container,
	Heading,
	IconButton,
	Image,
	Link,
	Stat,
	StatGroup,
	StatHelpText,
	StatLabel,
	StatNumber,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useColorMode,
} from '@chakra-ui/react'
import Head from 'next/head'
import type React from 'react'

const DeskLogo = '/desk.svg'
const LP1 = '/lp1-new.png'

import { ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import type { GetStaticPropsContext } from 'next'
import { useEffect, useState } from 'react'
import { state } from '@/utils/lang'

const ja = {
	title: 'TheDesk(mobile)',
	description: 'iOS向けに最適化されたTheDesk',
	privacyPolicy: 'プライバシーポリシー',
}

const en = {
	title: 'TheDesk(mobile)',
	description: 'TheDesk, Mastodon client for iOS',
	privacyPolicy: 'Privacy Policy',
}
const i18n = {
	ja,
	en,
}
interface IProps {
	t: typeof ja
	lang: 'ja' | 'en'
}
const s = (size: number) => `${Math.floor((size / 1024 / 1024) * 10) / 10}MB`

export default function Home({ t, lang }: IProps) {
	const [isDefault, setIsDefault] = useState(true)
	const { colorMode, toggleColorMode } = useColorMode()
	state.locale = lang
	useEffect(() => {
		const isJa = !!navigator.language.match(/^ja/)
		setIsDefault(lang === 'ja' ? isJa : !isJa)
	}, [])
	const alpha = colorMode === 'light' ? 'whiteAlpha' : ''
	return (
		<main>
			<Head>
				<title>TheDesk (mobile)</title>
				<meta name="description" content="TheDesk - Mastodon client for iOS" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/desk.svg" />
			</Head>
			<Container centerContent={true} p={10} maxW={650}>
				<IconButton
					onClick={toggleColorMode}
					pos="absolute"
					top={5}
					right={5}
					aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'}`}
					icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				/>
				<Image src={DeskLogo} w={70} />
				<Heading as="h1" fontSize={40} textAlign="center">
					{t.title}
				</Heading>
				<Text mt={1} mb={30} textAlign="center">
					{t.description}
				</Text>
				{!isDefault ? (
					<Button as="a" href={lang === 'ja' ? '/mobile/en' : '/mobile/ja'} size="lg" mb={3} colorScheme="orange">
						Switch to {lang === 'ja' ? 'English' : '日本語'}
					</Button>
				) : null}
				<Link href="https://apps.apple.com/jp/app/thedesk/id6754771838" isExternal>
					<Image src="/ios-app-store-badge.svg" width={180} />
				</Link>
				<Text>(c) 2026 TheDesk</Text>
				<Text fontWeight="bold">
					Made by cutls and contributors with love
					<Image ml={0.5} w={3} src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/2764.png" display="inline-block" />
				</Text>
				<Text>
					Contact:{' '}
					<Link color="teal" href="https://6m.cutls.dev/@cutls" target="_blank" rel="noopener">
						@cutls@6m.cutls.dev
					</Link>
					, e-mail: p@cutls.dev
				</Text>
				<Link color="teal" href="/privacy" mt={3}>
					{t.privacyPolicy}
				</Link>
			</Container>
		</main>
	)
}
export async function getStaticPaths() {
	return { paths: [{ params: { lang: 'ja' } }, { params: { lang: 'en' } }], fallback: false }
}
export async function getStaticProps(context: GetStaticPropsContext) {
	const lang = (context.params?.lang?.toString() as 'ja' | 'en') || 'en'
	return {
		props: {
			lang,
			t: i18n[lang],
		},
	}
}
