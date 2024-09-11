import { Head, Html, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

export default function Document() {
	const [lang, setLang] = useState('en')
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
