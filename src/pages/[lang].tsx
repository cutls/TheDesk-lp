import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Badge,
	Box,
	Button,
	ButtonGroup,
	Code,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Stat,
	StatArrow,
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
} from '@chakra-ui/react'
import Head from 'next/head'
import type React from 'react'
const DeskLogo = '/desk.svg'
const LP1 = '/lp1-new.png'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import type { GetStaticPropsContext } from 'next'
import { useEffect, useState } from 'react'
import { files } from '../meta'
import { getColorOfCodename } from '../utils/getColorOfCodename'
const { assets } = files
const { win, linuxDeb, linuxZip, mac } = assets
const ja = {
	olderV24: '過去バージョン(v24以前)はこちら',
	olderV24Notice: 'v24以前とは互換性がありません。v25以降をインストールすると以前の設定は全て削除されます。ご了承ください。',
	installer: 'インストーラー',
	portable: 'ポータブル',
	download: 'ダウンロード',
	run: '実行',
	other: 'その他',
	otherText: '過去バージョン',
	winNotice: 'Windows SmartScreenによってインストールができない場合がありますが、「詳細情報」を押すと実行できます。',
	macNotice: 'Intel/Apple Silicon両対応。公証されており、セキュリティ設定の変更は必要ありません。',
	webNotice: 'Chrome, Firefoxで最新版が利用いただけます。一部機能はご利用いただけません。',
	noticeHead: 'TheDesk(v25~)はFedistarの改造版です。',
	difference: 'Fedistarとの違い',
	lp1: {
		title: 'TheDeskのUI（TheDesk v24 ライクなUI）',
		contents: ['フローティング投稿ボックス', 'カラムやアカウントごとに色分けできます。', '柔軟かつ直感的にに横幅をリサイズできるタイムライン'],
	},
	lp2: {
		title: 'TheDeskの設定',
		contents: [
			'タイムラインに表示する時間の形式を変更可能(絶対/相対時間)',
			'アイコンのアニメーション有無の設定',
			'長い投稿の自動折りたたみと省略表示',
			'投稿後に投稿ボックスを開いたままにするかどうかの設定',
			'セカンダリー投稿ボタンで投稿の表示を簡単に変更可能',
		],
	},
	lp3: {
		title: 'TheDeskの機能',
		contents: ['Spotify NowPlaying', 'Apple Music/iTunes NowPlaying(macOS)', 'タイムライン読み上げ(棒読みちゃんも利用可能)', 'メディアだけのタイムライン'],
	},
	others: {
		title: 'その他',
		contents: ['Misskeyの部分的サポート'],
	},
	donate: 'ご支援のお願い',
	donateText: 'TheDeskは営利目的ではないため、有料機能や広告は一切ありません。皆様の支援により開発を続けています。',
}

const en = {
	olderV24: 'Older than v24',
	olderV24Notice: 'It is not compatible with v24 and earlier; all previous settings will be deleted when v25 or later is installed.',
	installer: 'Installer',
	portable: 'Portable',
	download: 'Download',
	run: 'Run',
	other: 'Others',
	otherText: 'Older version',
	winNotice: 'Installation may not be possible due to Windows SmartScreen, but you can run it by pressing "More info".',
	macNotice: 'for both Intel & Apple Silicon. It is notarized and does not require any changes to your security settings.',
	webNotice: 'The latest version is available for Chrome and Firefox. Some features are not available.',
	noticeHead: 'TheDesk(v25~) is based on Fedistar.',
	difference: "What's different from Fedistar?",
	lp1: {
		title: 'TheDesk UI(like TheDesk ~v24)',
		contents: ['Floating post box', 'It can be color-coded by column or account', 'Flexible and intuitive width resizing timeline'],
	},
	lp2: {
		title: ' TheDesk config',
		contents: [
			'The format of the time displayed on the timeline can be changed(absolute/relative)',
			'Allow icons to animate or not',
			'Automatic folding and abbreviated display of long posts',
			'Setting whether to leave the post box open after posting',
			'Secondary post button to change visibility of post easily',
		],
	},
	lp3: {
		title: 'TheDesk features',
		contents: ['Spotify NowPlaying', 'Apple Music/iTunes NowPlaying(macOS)', 'Text-to-speech of timeline posts', 'Media only timeline'],
	},
	others: {
		title: 'Others',
		contents: ['Partial support for Misskey'],
	},
	donate: 'Donation',
	donateText: 'TheDesk is not for profit, so there are no paid features or advertisements. We continue to develop with your support.',
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
	useEffect(() => {
		const isJa = !!navigator.language.match(/^ja/)
		setIsDefault(lang === 'ja' ? isJa : !isJa)
	}, [])
	return (
		<html lang={lang}>
			<Head>
				<title>TheDesk</title>
				<meta name="description" content="TheDesk - Mastodon client for PC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/desk.svg" />
			</Head>
			<Container centerContent={true} p={10} maxW={650}>
				<Image src={DeskLogo} w={70} />
				<Heading as="h1" fontSize={40} textAlign="center">
					TheDesk
				</Heading>
				<Badge colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
					{files.semanticVersion} ({files.codename})
				</Badge>
				<Text mt={1} mb={30} textAlign="center">
					Mastodon (and Misskey) client for PC
				</Text>
				{!isDefault ? (
					<Button as="a" href={lang === 'ja' ? '/en' : '/'} size="lg" mb={3} colorScheme="orange">
						Switch to {lang === 'ja' ? 'English' : '日本語'}
					</Button>
				) : null}
				<Alert status="warning" my={10}>
					<AlertIcon />
					<Box>
						<AlertTitle>{t.olderV24}</AlertTitle>
						<AlertDescription>{t.olderV24Notice}</AlertDescription>
					</Box>
					<Button colorScheme="orange" as="a" href={lang === 'ja' ? '/v24/ja' : '/v24/en'}>
						v24
					</Button>
				</Alert>
				<Box h={450} borderColor="#E2E8F0" borderWidth={1} overflowY="scroll" p={3} mb={10} borderRadius={5}>
					<Tabs w={600} maxW="calc(100vw - 2rem)">
						<TabList>
							<Tab>Windows</Tab>
							<Tab>Linux</Tab>
							<Tab>macOS</Tab>
							<Tab isDisabled>Web</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Text>{t.winNotice}</Text>
								<Text fontWeight="bold">
									{t.installer}(msi)
									<Badge ml={2} mt={-1} colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
										{files.semanticVersion} ({files.codename})
									</Badge>
								</Text>
								<ButtonGroup>
									<Button as="a" href={win.url} colorScheme="teal" w={120}>
										64bit
										<Badge colorScheme="whiteAlpha" ml={2}>
											{s(win.size)}
										</Badge>
									</Button>
								</ButtonGroup>
								<Text fontWeight="bold" mt={3}>
									{t.other}
								</Text>
								<Text>{t.otherText}</Text>
								<Button as="a" href="https://github.com/cutls/thedesk-next/releases" target="_blank" rel="noopener" mb={3}>
									GitHub
								</Button>
							</TabPanel>
							<TabPanel>
								<Text fontWeight="bold" mt={3}>
									{t.download}
									<Badge ml={2} mt={-1} colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
										{files.semanticVersion} ({files.codename})
									</Badge>
								</Text>
								<ButtonGroup>
									<Button as="a" href={linuxDeb.url} colorScheme="teal" w={120}>
										Deb
										<Badge colorScheme="whiteAlpha" ml={2}>
											{s(linuxDeb.size)}
										</Badge>
									</Button>
									<Button as="a" href={linuxZip.url} colorScheme="blue" w={120}>
										ZIP
										<Badge colorScheme="whiteAlpha" ml={2}>
											{s(linuxZip.size)}
										</Badge>
									</Button>
								</ButtonGroup>
								<Text fontWeight="bold" mt={3}>
									{t.other}
								</Text>
								<Text>{t.otherText}</Text>
								<Button as="a" href="https://github.com/cutls/thedesk-next/releases" target="_blank" rel="noopener" mb={3}>
									GitHub
								</Button>
							</TabPanel>
							<TabPanel>
								<Text fontWeight="bold" mt={3}>
									{t.download}
									<Badge ml={2} mt={-1} colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
										{files.semanticVersion} ({files.codename})
									</Badge>
								</Text>
								<Button as="a" href={mac.url} colorScheme="teal">
									Universal
									<Badge colorScheme="whiteAlpha" ml={2}>
										{s(mac.size)}
									</Badge>
								</Button>
								<Text>{t.macNotice}</Text>
								<Text fontWeight="bold">{t.other}</Text>
								<Text>{t.otherText}</Text>
								<Button as="a" href="https://github.com/cutls/thedesk-next/releases" target="_blank" rel="noopener" mb={3}>
									GitHub
								</Button>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
				<Heading as="h1" my={3} fontSize={28}>
					{t.noticeHead}
				</Heading>
				<Link href="https://fedistar.net" isExternal mb={5}>
					Fedistar (© 2023 Akira Fukushima) <ExternalLinkIcon mx="2px" />
				</Link>
				<Image src={LP1} borderRadius={5} />
				<Heading as="h2" mt={3} fontSize={28}>
					{t.difference}
				</Heading>
				<Heading as="h3" mt={3} fontSize={22}>
					{t.lp1.title}
				</Heading>
				{t.lp1.contents.map((content, i) => (
					<Text key={`${i} ${content}`}>{content}</Text>
				))}
				<Heading as="h3" mt={3} fontSize={22}>
					{t.lp2.title}
				</Heading>
				{t.lp2.contents.map((content, i) => (
					<Text key={`${i} ${content}`}>{content}</Text>
				))}
				<Heading as="h3" mt={3} fontSize={22}>
					{t.lp3.title}
				</Heading>
				{t.lp3.contents.map((content, i) => (
					<Text key={`${i} ${content}`}>{content}</Text>
				))}
				<Heading as="h3" mt={3} fontSize={22}>
					{t.others.title}
				</Heading>
				{t.others.contents.map((content, i) => (
					<Text key={`${i} ${content}`}>{content}</Text>
				))}
				<Box h={20} />
				<Heading as="h2" mt={3} fontSize={22}>
					{t.donate}
				</Heading>
				<Text>{t.donateText}</Text>
				<ButtonGroup mt={5}>
					<Button as="a" href="https://www.patreon.com/cutls" target="_blank" rel="noopener" colorScheme="teal">
						Patreon
					</Button>
					<Button as="a" href="https://www.pixiv.net/fanbox/creator/28105985" target="_blank" rel="noopener" colorScheme="teal">
						Pixiv FANBOX
					</Button>
					<Button as="a" href="https://liberapay.com/cutls" target="_blank" rel="noopener" colorScheme="teal">
						Liberapay
					</Button>
				</ButtonGroup>
				<Box h={20} />
				<StatGroup w={600} maxW="100%" borderColor="#E2E8F0" borderWidth={1} p={3} mb={10} borderRadius={5}>
					<Stat>
						<StatLabel>LICENSE</StatLabel>
						<StatNumber>GPL-3.0</StatNumber>
						<StatHelpText>
							<Link color="teal" href="https://github.com/cutls/thedesk-next" target="_blank" rel="noopener">
								Source code
							</Link>
						</StatHelpText>
					</Stat>
					{files.lastDls >= 1000 && (
						<Stat>
							<StatLabel>
								DL of{' '}
								<Badge colorScheme={getColorOfCodename(files.lastVersion)} textTransform="initial">
									{files.lastVersion} ({files.lastCodename})
								</Badge>
							</StatLabel>
							<StatNumber>{files.lastDls.toLocaleString()}</StatNumber>
							<StatHelpText>
								<Text>Data of previous version</Text>
							</StatHelpText>
						</Stat>
					)}
				</StatGroup>
				<Text>(c) 2018 TheDesk</Text>
				<Text fontWeight="bold">
					Made by Cutls P and contributors with love
					<Image ml={0.5} w={3} src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/2764.png" display="inline-block" />
				</Text>
				<Text>
					Contact:{' '}
					<Link color="teal" href="https://kids.0px.io/@Cutls" target="_blank" rel="noopener">
						@cutls@kids.0px.io
					</Link>
					, e-mail: p@cutls.dev
				</Text>
				<Badge mt={3} colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
					{files.semanticVersion} ({files.codename})
				</Badge>
			</Container>
		</html>
	)
}
export async function getStaticPaths() {
	return { paths: [{ params: { lang: 'ja' } }, { params: { lang: 'en' } }], fallback: false }
}
export async function getStaticProps(context: GetStaticPropsContext) {
	const lang = context.params?.lang?.toString() as 'ja' | 'en' || 'en'
	return {
		props: {
			lang,
			t: i18n[lang]
		},
	}
}
