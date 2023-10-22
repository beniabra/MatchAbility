/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react"
import {Volunteers} from "../interfaces/volunteers";
import volunteersdata from "../volunteers.json";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading,Grid, GridItem, Button, Avatar }from '@chakra-ui/react'

export const {VOLUNTEERS}: Record<string, Volunteers[]> =
    volunteersdata as Record<string, Volunteers[]>;

export function VolunteerDisplay(): JSX.Element {
    const [volunteers, setVolunteers] = useState<Volunteers[]>(VOLUNTEERS);

    function newVolunteer(newVolunteer: Volunteers) {
        if (!volunteers.includes(newVolunteer)) {
            const newList = [...volunteers, newVolunteer];
            setVolunteers(newList);
        }
    }

    return (
        <SimpleGrid columns={4} spacing={10}>
            {volunteers.map(volunteer => (
                <Card>
                    <Avatar name={ volunteer.name } src='https://bit.ly/broken-link' />
                    <CardHeader>
                        <Heading size='md'> { volunteer.name }</Heading>
                    </CardHeader>
                    <CardBody>
                        <p>{ volunteer.bio }</p>
                        <p style={{alignSelf: "left"}}>I can help with: { volunteer.disabilities.join(", ") }</p>
                        <p>Availability: { volunteer.availability }</p>
                    </CardBody>
                    <CardFooter>
                        <Button>Match me</Button>
                    </CardFooter>
              </Card>
            ))}
        
        </SimpleGrid>
    );
}