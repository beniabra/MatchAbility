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
import { Grid, GridItem } from '@chakra-ui/react'
import { VolunteerDisplay } from "./components/VolunteerDisplay"
import { MatchMakingForm } from "./components/MatchMakingForm"
import { Home } from "./components/Home"
import { Register } from "./components/Register"

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
            <Home></Home>
          </TabPanel>
          <TabPanel>
            <VolunteerDisplay></VolunteerDisplay>
          </TabPanel>
          <TabPanel>
            <MatchMakingForm></MatchMakingForm>
          </TabPanel>
          <TabPanel>
            <Register></Register>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    <VolunteerDisplay></VolunteerDisplay>
  </ChakraProvider>
)
