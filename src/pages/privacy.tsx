import { state } from '@/utils/lang'
import { Box, Container, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()
	const [isJa, setIsJa] = useState(false)
	const change = (lang: 'ja' | 'en') => {
		state.locale = lang
		setIsJa(lang === 'ja')
		document.getElementsByTagName('html')[0].lang = lang
	}
	useEffect(() => {
		const isJaTF = !!navigator.language.match(/^ja/)
		change(isJaTF ? 'ja' : 'en')
	}, [])
	return (
		<Container>
			<Head>
				<title>プライバシーポリシー / Privacy Policy - TheDesk</title>
				<meta name="description" content="TheDesk - Mastodon client for PC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/desk.svg" />
			</Head>
			<Box>
				<IconButton zIndex={2} onClick={toggleColorMode} pos="absolute" top={5} right={5} aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'}`} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
				<Tabs onChange={(index) => change(index === 0 ? 'ja' : 'en')} index={isJa ? 0 : 1}>
					<TabList>
						<Tab>日本語</Tab>
						<Tab>English</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Text fontSize={25} fontWeight="bold">
								プライバシーポリシー
							</Text>
							<Text my={2}>発効日：2025年11月10日</Text>
							<Text my={2}>
								このプライバシーポリシーは、TheDesk（以下「本アプリ」）の利用者から取得する情報、その利用方法、および利用者のプライバシー保護に関するcutls（以下「開発者」）の方針をご説明するものです。開発者は利用者のプライバシーを最大限尊重し、その保護に細心の注意を払っています。
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								1. 取得する情報と利用目的
							</Text>
							<Text my={2} ml={5}>
								本アプリは、その機能を提供するにあたり、必要最小限の情報のみを取り扱います。
							</Text>
							<Text my={2} fontWeight="bold" ml={5}>
								(1) アプリケーションの基本機能について
							</Text>
							<Text my={2} ml={5}>
								本アプリは、最新データを取得し表示するために、開発者が管理するサーバーにアクセスします。
							</Text>
							<Text my={2} ml={5}>
								この通信の際、開発者は利用者のIPアドレス、デバイス固有ID、その他個人を特定しうる情報を一切取得せず、また保存もいたしません。通信は機能の提供のみを目的としています。
							</Text>
							<Text my={2} fontWeight="bold" ml={5}>
								(2) 認証情報の取り扱いについて
							</Text>
							<Text my={2} ml={5}>
								本アプリは、特定のサーバー（※）へアクセスするための認証情報（ID、パスワード、トークンなど）を利用者のデバイス内に安全に保持します。
							</Text>
							<Text my={2} ml={5}>
								これらの認証情報は、本アプリが機能するために利用者のデバイス内部でのみ利用されます。いかなる場合も、これらの情報が開発者のサーバーに送信されたり、開発者が閲覧・収集したりすることはありません。
							</Text>
							<Text my={2} ml={5}>
								（※これは本アプリが連携する、開発者管理のサービスまたはサーバー以外を指します）
							</Text>
							<Text my={2} ml={5} fontWeight="bold">
								(3) Spotifyとの連携機能について
							</Text>
							<Text my={2} ml={5}>
								本アプリは、Spotifyとの連携機能を提供するために、開発者のサーバーにアクセスする場合があります。
							</Text>
							<Text my={2} ml={5}>
								この処理は、Spotifyとの認証や機能連携を中継するためにのみ行われます。開発者のサーバーは、利用者のSpotifyアカウントに関するデータ（個人情報、再生履歴など）や、Spotifyの認証情報を一切保存いたしません。
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								2. サービス提供の基盤について
							</Text>
							<Text my={2} ml={5}>
								開発者は、本アプリのサービス（上記1-(1)および1-(3)におけるサーバー機能）を提供するためのインフラストラクチャとして、Amazon Web Services (AWS)
								、Vercelを利用しています。同社のプライバシー慣行に関する詳細は、AWS、Vercelのプライバシーポリシーをご確認ください。
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								3. 情報の第三者への提供
							</Text>
							<Text my={2} ml={5}>
								開発者は、本ポリシーの第1項に記載の通り、利用者の個人を特定しうる情報を原則として取得・保存しておりません。
							</Text>
							<Text my={2} ml={5}>
								万が一、将来的に何らかの個人情報を取得する場合においても、以下のいずれかに該当する場合を除き、利用者の同意なく個人情報を第三者に開示または提供することはありません。
							</Text>
							<Text my={2} ml={10} as="li">
								日本の法令に基づき開示が義務付けられる場合
							</Text>
							<Text my={2} ml={10} as="li">
								人の生命、身体または財産の保護のために必要がある場合であって、利用者の同意を得ることが困難である場合
							</Text>
							<Text my={2} ml={10} as="li">
								公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、利用者の同意を得ることが困難である場合
							</Text>
							<Text my={2} ml={10} as="li">
								国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用者の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								4. プライバシーポリシーの変更
							</Text>
							<Text my={2} ml={5}>
								開発者は、法令の改正、本アプリの機能変更、またはサービス内容の変更等に伴い、本プライバシーポリシーを改定することがあります。
							</Text>
							<Text my={2} ml={5}>
								重要な変更が生じた場合は、本アプリ内または開発者の公式ウェブサイト等を通じて、利用者に分かりやすい方法で通知いたします。最新のプライバシーポリシーは、常に本ページにてご確認いただけます。
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								5. お問い合わせ窓口
							</Text>
							<Text my={2} ml={5}>
								本プライバシーポリシーに関するご質問、ご懸念、またはプライバシーに関するお問い合わせがございましたら、以下の連絡先までご連絡ください。
							</Text>
							<Text my={2} ml={5}>
								p@cutls.dev (メールアドレス)
							</Text>
						</TabPanel>
						<TabPanel>
							<Text fontSize={25} fontWeight="bold">
								Privacy Policy
							</Text>
							<Text my={2}>Effective Date: November 10, 2025</Text>
							<Text my={2}>
								This Privacy Policy explains the information that TheDesk (the "App") handles, how that information is used, and cutls's (the "Developer") policy regarding the protection of your
								privacy. I hold your privacy in the highest regard and take meticulous care to protect it.
							</Text>
							<Text my={2}>
								This Privacy Policy is provided in Japanese and English. The English version is a translation provided for convenience only. In the event of any discrepancy or conflict between the Japanese version and the English version, the Japanese version shall prevail and be binding.
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								1. Information The Developer Collects and How They Use It
							</Text>
							<Text my={2} ml={5}>
								This App handles only the minimum information necessary to provide its features.
							</Text>
							<Text my={2} ml={5} fontWeight="bold">
								(1) Basic Application Functions
							</Text>
							<Text my={2} ml={5}>
								To retrieve and display the latest data, this App accesses servers managed by the Developer.
							</Text>
							<Text my={2} ml={5}>
								During this communication, the developer do not acquire or store any information that could identify you personally, such as your IP address or unique device identifiers. This
								communication is solely for the purpose of providing the App's features.
							</Text>
							<Text my={2} ml={5} fontWeight="bold">
								(2) Handling of Authentication Credentials
							</Text>
							<Text my={2} ml={5}>
								This App securely stores authentication credentials (such as IDs, passwords, or tokens) required to access specific servers (*) on your device.
							</Text>
							<Text my={2} ml={5}>
								These credentials are used exclusively within your device for the App to function. Under no circumstances is this information transmitted to the Developer's servers, nor is it viewed
								or collected by the Developer.
							</Text>
							<Text my={2} ml={5}>
								(*: This refers to services or servers not operated by the Developer, which the App integrates with.)
							</Text>
							<Text my={2} ml={5} fontWeight="bold">
								(3) Spotify Integration
							</Text>
							<Text my={2} ml={5}>
								To provide integration with Spotify, this App may access the Developer's servers.
							</Text>
							<Text my={2} ml={5}>
								This process is conducted solely to facilitate authentication and functional linkage with Spotify. The Developer's servers do not store any data related to your Spotify account (such
								as personal information or playback history) or your Spotify authentication credentials.
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								2. Service Infrastructure
							</Text>
							<Text my={2} ml={5}>
								The Developer uses Amazon Web Services (AWS) and Vercel as the infrastructure to provide the services for this App (specifically, the server functions described in 1-(1) and 1-(3)).
								For details on their privacy practices, please review the AWS and Vercel Privacy Policy.
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								3. Disclosure of Information to Third Parties
							</Text>
							<Text my={2} ml={5}>
								As stipulated in Section 1 of this policy, the Developer does not, in principle, collect or store information that can personally identify users.
							</Text>
							<Text my={2} ml={5}>
								In the unlikely event that the Developer collects any personal information in the future, the Developer will not disclose or provide such information to a third party without your
								consent, except in the following cases:
							</Text>
							<Text my={2} ml={10} as="li">
								When required by law. (This Privacy Policy shall be governed by and construed in accordance with the laws of Japan.)
							</Text>
							<Text my={2} ml={10} as="li">
								When it is necessary to protect human life, body, or property, and it is difficult to obtain your consent.
							</Text>
							<Text my={2} ml={10} as="li">
								When it is particularly necessary for improving public health or promoting the sound growth of children, and it is difficult to obtain your consent.
							</Text>
							<Text my={2} ml={10} as="li">
								When it is necessary to cooperate with a state or local government entity, or a party commissioned by them, in executing affairs prescribed by law, and obtaining your consent may
								impede the execution of such affairs.
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								4. Changes to This Privacy Policy
							</Text>
							<Text my={2} ml={5}>
								The Developer may revise this Privacy Policy in response to amendments in laws and regulations, changes to the App's features, or modifications to the Developer's services.
							</Text>
							<Text my={2} ml={5}>
								If significant changes occur, the Developer will notify you through the App or on their official website in an easy-to-understand manner. You can always review the latest Privacy
								Policy on this page.
							</Text>
							<Text my={2} fontSize={18} fontWeight="bold">
								5. Contact the Developer
							</Text>
							<Text my={2} ml={5}>
								If you have any questions, concerns, or inquiries regarding this Privacy Policy or privacy-related matters, please contact the Developer at the following:
							</Text>
							<Text my={2} ml={5}>
								email: p@cutls.dev
							</Text>
						</TabPanel>
					</TabPanels>
				</Tabs>
				<Text textAlign="center">(c) 2018 TheDesk</Text>
			</Box>
		</Container>
	)
}
