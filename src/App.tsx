/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
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
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
      <img src="./images/MAlogo.png" alt=""></img>
      <Text fontSize='4xl' as='b' color="#333333">MatchAbility</Text>
      <Text fontSize='1xl' color="#333333">Profile</Text>
    </Grid>
            
      <Tabs variant='soft-rounded' colorScheme='red'>
        <TabList>
          <Tab color="#333333">Home</Tab>
          <Tab color="#333333">Our Volunteers</Tab>
          <Tab color="#333333">MatchMaking Form</Tab>
          <Tab color="#333333">Register</Tab>
          <Tab color="#333333">About</Tab>
        </TabList>
        <TabPanels backgroundColor="white">
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
  </ChakraProvider>
)