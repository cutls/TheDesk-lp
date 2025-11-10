import { state } from '@/utils/lang'
import { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '@/utils/theme'

export default function Document() {
	return (
		<Html lang={state.locale}>
			<Head />
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
