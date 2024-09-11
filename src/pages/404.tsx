import { Badge, Box, Container, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import { files } from '../meta'
import { getColorOfCodename } from '../utils/getColorOfCodename'

export default function Home() {
	return (
		<Container centerContent={true} h="100vh" justifyContent="center">
			<Head>
				<html lang="en" />
				<title>404 - TheDesk</title>
				<meta name="description" content="TheDesk - Mastodon client for PC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/desk.svg" />
			</Head>
			<Box textAlign="center">
				<Text fontSize={25}>404 Not Found</Text>
				<Text fontStyle="italic">You're in complete darkness.</Text>
				<Text>アドレスをお確かめください。</Text>
				<Text mt={3}>
					<Link color="teal" href="https://thedesk.top" target="_blank" rel="noopener">
						TheDesk
					</Link>
				</Text>
				<Badge colorScheme={getColorOfCodename(files.semanticVersion)} textTransform="initial">
					{files.semanticVersion} ({files.codename})
				</Badge>
			</Box>
		</Container>
	)
}
