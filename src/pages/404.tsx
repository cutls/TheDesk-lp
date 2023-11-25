import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Badge, Box, Container, Link, Text } from "@chakra-ui/react"
import { files } from "../meta"
import { getColorOfCodename } from "../utils/getColorOfCodename"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container centerContent={true} h="100vh" justifyContent="center">
      <Box textAlign="center">
        <Text fontSize={25}>404 Not Found</Text>
        <Text fontStyle="italic">You're in complete darkness.</Text>
        <Text>アドレスをお確かめください。</Text>
        <Text mt={3}><Link color="teal" href="https://thedesk.top" target="_blank" rel="noopener">TheDesk</Link></Text>
        <Badge colorScheme={getColorOfCodename(files.version)} textTransform="initial">{files.version} ({files.codename})</Badge>
      </Box>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>TheDesk - 404</title>
