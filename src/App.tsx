/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor="#E07A5F">
      <Text fontSize='4xl' as='b' color="#333333">MatchAbility</Text>
      <Tabs variant='soft-rounded' colorScheme='red'>
        <TabList>
          <Tab color="#333333">Forms</Tab>
          <Tab color="#333333">Our Volunteers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Match to a Volunteer</p>
            <p>Become a Volunteer</p>
          </TabPanel>
          <TabPanel>
            <p>Person</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </ChakraProvider>
)
