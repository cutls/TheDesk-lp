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
	Heading,
	IconButton,
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
	useColorMode,
} from '@chakra-ui/react'
import type React from 'react'

const DeskLogo = '/desk.svg'
const LP1 = '/lp1.png'
const LP2 = '/lp2.png'

import { ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import type { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { files } from '../../meta.v24'
import { getColorOfCodename } from '../../utils/getColorOfCodename'
import { state } from '@/utils/lang'

const { assets } = files
const { winIa32, winIa32P, winX64, winX64P, linuxDeb, linuxSnap, linuxZip, mac } = assets
const ja = {
	installer: 'インストーラー',
	portable: 'ポータブル',
	download: 'ダウンロード',
	run: '実行',
	other: 'その他',
	winOtherText: 'ARM版、過去バージョンなど',
	otherText: '過去バージョン',
	winNotice: 'Windows SmartScreenによってインストールができない場合がありますが、「詳細情報」を押すと実行できます。',
	macNotice: 'Intel/Apple Silicon両対応。公証されており、セキュリティ設定の変更は必要ありません。',
	webNotice: 'Chrome, Firefoxで最新版が利用いただけます。一部機能はご利用いただけません。',
	lp1: {
		title: '縦に横に無限に',
		desc: 'アカウントの壁を超えて、何個でも。',
	},
	lp2: {
		title: '圧倒的な設定項目数',
		desc: '使い込むほどに、あなたのクライアントになる。',
	},
	donate: 'ご支援のお願い',
	donateText: 'TheDeskは営利目的ではないため、有料機能や広告は一切ありません。皆様の支援により開発を続けています。',
}
const en = {
	installer: 'Installer',
	portable: 'Portable',
	download: 'Download',
	run: 'Run',
	other: 'Others',
	winOtherText: 'for ARM(arm64), older version',
	otherText: 'Older version',
	winNotice: 'Installation may not be possible due to Windows SmartScreen, but you can run it by pressing "More info".',
	macNotice: 'for both Intel & Apple Silicon. It is notarized and does not require any changes to your security settings.',
	webNotice: 'The latest version is available for Chrome and Firefox. Some features are not available.',
	lp1: {
		title: 'Infinitely vertically and horizontally',
		desc: 'As many as you want, beyond the walls of your account.',
	},
	lp2: {
		title: 'Countless preferences',
		desc: 'The more you use it, the more it becomes your client.',
	},
	donate: 'Donation',
	donateText: 'TheDesk is not for profit, so there are no paid features or advertisements. We continue to develop with your support.',
}
const i18n = {
	ja,
	en,
}
interface IProps {
	lang: 'ja' | 'en'
	isDefault: boolean
}
const s = (size: number) => `${Math.floor((size / 1024 / 1024) * 10) / 10}MB`

export default function Home(props: IProps) {
	const { colorMode, toggleColorMode } = useColorMode()
	const [isDefault, setIsDefault] = useState(true)
	useEffect(() => {
		const isJa = !!navigator.language.match(/^ja/)
		setIsDefault(lang === 'ja' ? isJa : !isJa)
	}, [])
	const { lang } = props
	state.locale = lang
	const t = i18n[lang]
	const alpha = colorMode === 'light' ? 'whiteAlpha' : ''
	return (
		<main>
			<Head>
				<title>TheDesk</title>
				<meta name="description" content="TheDesk - Mastodon client for PC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/desk.svg" />
			</Head>
			<Container centerContent={true} p={10}>
				<IconButton onClick={toggleColorMode} pos="absolute" top={5} right={5} aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'}`} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />	
				<Image src={DeskLogo} w={70} />
				<Heading as="h1" fontSize={40} textAlign="center">
					TheDesk
				</Heading>
				<Badge colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
					{files.semanticVersion} ({files.codename})
				</Badge>
				<Text mt={1} mb={30} textAlign="center">
					Mastodon client for PC with myriad features
				</Text>
				{!isDefault ? (
					<Button as="a" href={lang === 'ja' ? '/v24.en' : '/v24'} size="lg" mb={3} colorScheme="orange">
						Switch to {lang === 'ja' ? 'English' : '日本語'}
					</Button>
				) : null}
				<Box h={450} borderColor="#E2E8F0" borderWidth={1} overflowY="scroll" p={3} mb={10} borderRadius={5}>
					<Tabs w={600} maxW="calc(100vw - 2rem)">
						<TabList>
							<Tab>Windows</Tab>
							<Tab>Linux</Tab>
							<Tab>macOS</Tab>
							<Tab>Web</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Text>{t.winNotice}</Text>
								<Text fontWeight="bold">{t.installer}</Text>
								<ButtonGroup>
									<Button as="a" href={winX64.url} colorScheme="teal" w={120}>
										64bit
										<Badge colorScheme={alpha} ml={2}>
											{s(winX64.size)}
										</Badge>
									</Button>
									<Button as="a" href={winIa32.url} colorScheme="blue" w={120}>
										32bit
										<Badge colorScheme={alpha} ml={2}>
											{s(winIa32.size)}
										</Badge>
									</Button>
								</ButtonGroup>
								<Text fontWeight="bold" mt={3}>
									{t.portable}
								</Text>
								<ButtonGroup>
									<Button as="a" href={winX64P.url} colorScheme="blue" w={120}>
										64bit
										<Badge colorScheme={alpha} ml={2}>
											{s(winX64P.size)}
										</Badge>
									</Button>
									<Button as="a" href={winIa32P.url} colorScheme="blue" w={120}>
										32bit
										<Badge colorScheme={alpha} ml={2}>
											{s(winIa32P.size)}
										</Badge>
									</Button>
								</ButtonGroup>
								<Text fontWeight="bold" mt={3}>
									{t.other}
								</Text>
								<Text>{t.winOtherText}</Text>
								<Button as="a" href="https://github.com/cutls/TheDesk/releases" target="_blank" rel="noopener" mb={3}>
									GitHub
								</Button>
								<a href="https://github.com/cutls/TheDesk/actions/workflows/build.yml" target="_blank" rel="noreferrer noopener">
									<Image src="https://github.com/cutls/TheDesk/actions/workflows/build.yml/badge.svg" alt="Windows build" />
								</a>
							</TabPanel>
							<TabPanel>
								<a href="https://snapcraft.io/thedesk" target="_blank" rel="noreferrer noopener">
									<Image src="https://snapcraft.io/static/images/badges/en/snap-store-black.svg" />
								</a>
								<Text fontWeight="bold" mt={3}>
									{t.download}
								</Text>
								<ButtonGroup>
									<Button as="a" href={linuxDeb.url} colorScheme="teal" w={120}>
										Deb
										<Badge colorScheme={alpha} ml={2}>
											{s(linuxDeb.size)}
										</Badge>
									</Button>
									<Button as="a" href={linuxSnap.url} colorScheme="blue" w={120}>
										Snap
										<Badge colorScheme={alpha} ml={2}>
											{s(linuxSnap.size)}
										</Badge>
									</Button>
									<Button as="a" href={linuxZip.url} colorScheme="blue" w={120}>
										ZIP
										<Badge colorScheme={alpha} ml={2}>
											{s(linuxZip.size)}
										</Badge>
									</Button>
								</ButtonGroup>
								<Text fontWeight="bold" mt={3}>
									{t.other}
								</Text>
								<Text>{t.otherText}</Text>
								<Button as="a" href="https://github.com/cutls/TheDesk/releases" target="_blank" rel="noopener" mb={3}>
									GitHub
								</Button>
								<a href="https://github.com/cutls/TheDesk/actions/workflows/build-linux.yml" target="_blank" rel="noreferrer noopener">
									<Image src="https://github.com/cutls/TheDesk/actions/workflows/build-linux.yml/badge.svg" alt="Linux build" />
								</a>
							</TabPanel>
							<TabPanel>
								<Text fontWeight="bold">Homebrew</Text>
								<p>
									<Code>brew cask install thedesk</Code>
								</p>
								<Text fontWeight="bold" mt={3}>
									{t.download}
								</Text>
								<Button as="a" href={mac.url} colorScheme="teal">
									Universal
									<Badge colorScheme={alpha} ml={2}>
										{s(mac.size)}
									</Badge>
								</Button>
								<Text>{t.macNotice}</Text>
								<Text fontWeight="bold">{t.other}</Text>
								<Text>{t.otherText}</Text>
								<Button as="a" href="https://github.com/cutls/TheDesk/releases" target="_blank" rel="noopener" mb={3}>
									GitHub
								</Button>
								<a href="https://github.com/cutls/TheDesk/actions/workflows/build-macos.yml" target="_blank" rel="noreferrer noopener">
									<Image src="https://github.com/cutls/TheDesk/actions/workflows/build-macos.yml/badge.svg" alt="macOS build" />
								</a>
							</TabPanel>
							<TabPanel>
								<Text>{t.webNotice}</Text>
								<Button as="a" href="https://app.thedesk.top" target="_blank" rel="noopener" colorScheme="teal" mb={3}>
									{t.run}
								</Button>
								<a href="https://app.netlify.com/sites/thedesk/deploys" target="_blank" rel="noreferrer noopener">
									<Image src="https://api.netlify.com/api/v1/badges/6916503b-2882-43f7-9681-ab814e6d28f9/deploy-status" alt="PWA build" />
								</a>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
				<Image src={LP1} borderRadius={5} />
				<Heading as="h2" mt={3} fontSize={22}>
					{t.lp1.title}
				</Heading>
				<Text>{t.lp1.desc}</Text>
				<Box h={20} />
				<Image src={LP2} borderRadius={5} />
				<Heading as="h2" mt={3} fontSize={22}>
					{t.lp2.title}
				</Heading>
				<Text>{t.lp2.desc}</Text>
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
				<StatGroup w={600} maxW="100%" borderColor="#E2E8F0" borderWidth={1} overflowY="scroll" p={3} mb={10} borderRadius={5}>
					<Stat>
						<StatLabel>LICENSE</StatLabel>
						<StatNumber>GPL-3.0</StatNumber>
						<StatHelpText>
							<Link color="teal" href="https://github.com/cutls/TheDesk" target="_blank" rel="noopener">
								Source code
							</Link>
						</StatHelpText>
					</Stat>
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
				</StatGroup>
				<Text>(c) 2018 TheDesk</Text>
				<Text fontWeight="bold">
					Made by Cutls P and contributors with love
					<Image ml={0.5} w={3} src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/2764.png" display="inline-block" />
				</Text>
				<Text>
					Contact:{' '}
					<Link color="teal" href="https://kirishima.cloud/@Cutls" target="_blank" rel="noopener">
						@Cutls@kirishima.cloud
					</Link>
					, e-mail: p@cutls.dev
				</Text>
				<Badge mt={3} colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
					{files.semanticVersion} ({files.codename})
				</Badge>
			</Container>
		</main>
	)
}
export async function getStaticPaths() {
	return { paths: [{ params: { lang: 'ja' } }, { params: { lang: 'en' } }], fallback: false }
}
export async function getStaticProps(context: GetStaticPropsContext) {
	const lang = context.params?.lang
	return {
		props: {
			lang,
		},
	}
}
