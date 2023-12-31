/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { Volunteers } from "../interfaces/volunteers";
import volunteersdata from "../volunteers.json";
import {Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,} from '@chakra-ui/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  CheckboxGroup,
  Checkbox,
  Select,
  Button,
  Avatar,
  Tag
} from "@chakra-ui/react";


export const { VOLUNTEERS }: Record<string, Volunteers[]> =
  volunteersdata as Record<string, Volunteers[]>;

export function VolunteerDisplay(): JSX.Element {
  const [volunteers, setVolunteers] = useState<Volunteers[]>(VOLUNTEERS);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [disabilities, setDisabilities] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [daysAvailable, setDaysAvailable] = useState<string[]>([]);

  function generateId(): number {
    if (volunteers.length > 0) {
      const maxId = Math.max(...volunteers.map(v => v.id));
      return maxId + 1;
    } else {
      return 1;
    }
  }

  function addNewVolunteer(newVolunteer: Volunteers) {
        if (!volunteers.includes(newVolunteer)) {
            const newList = [...volunteers, newVolunteer];
            setVolunteers(newList);
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const volunteerData: Volunteers = {
          id: generateId(),
          name,
          bio,
          disabilities,
          availability,  // No changes here since it's already an array
          daysAvailable
        };
        addNewVolunteer(volunteerData);
        setName("");
        setBio("");
        setDisabilities([]);
        setAvailability([]);  // Reset the availability array
        setDaysAvailable([]);  
    }

  return (
    <div>
        <div style={{ margin: '30px' }}>
        {/* Volunteer Display */}
        <SimpleGrid columns={4} spacing={10}>
            {volunteers.map(volunteer => (
            <Card>
                <Avatar name={volunteer.name} src='https://bit.ly/broken-link"' />
                <CardHeader>
                <Heading size="md">{volunteer.name}</Heading>
                </CardHeader>
                <CardBody>
                <p>{volunteer.bio}</p>
                <p>I can help with: { volunteer.disabilities.map(disability => <Tag>{disability}</Tag>) }</p>
                <p>Days Available: {volunteer.daysAvailable.join(", ")}</p>
                <p>Availability: {volunteer.availability.join(", ")}</p>
                </CardBody>
                <CardFooter>
                <Button>Match me</Button>
                </CardFooter>
            </Card>
            ))}
        </SimpleGrid>
        
        <br></br>
        <br></br>
        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
            <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl>
            <FormLabel>Bio:</FormLabel>
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </FormControl>

            <FormControl>
            <FormLabel>Disabilities they can help with:</FormLabel>
            <CheckboxGroup
                value={disabilities}
                onChange={(values) => setDisabilities(values as string[])}
            >
                {/* Assuming these are the options, you can add more */}
                <Checkbox value="Blindness">Blindness</Checkbox>
                <Checkbox value="Mobility">Mobility</Checkbox>
                <Checkbox value="Hearing Impairment">Hearing Impairment</Checkbox>
                <Checkbox value="Dyslexia">Dyslexia</Checkbox>
            </CheckboxGroup>
            </FormControl>

            <FormControl>
                <FormLabel>Days Available:</FormLabel>
                <CheckboxGroup
                    value={daysAvailable}
                    onChange={(values) => setDaysAvailable(values as string[])}
                >
                    <Checkbox value="Monday">Monday</Checkbox>
                    <Checkbox value="Tuesday">Tuesday</Checkbox>
                    <Checkbox value="Wednesday">Wednesday</Checkbox>
                    <Checkbox value="Thursday">Thursday</Checkbox>
                    <Checkbox value="Friday">Friday</Checkbox>
                    <Checkbox value="Saturday">Saturday</Checkbox>
                    <Checkbox value="Sunday">Sunday</Checkbox>
                </CheckboxGroup>
            </FormControl>

            <FormControl>
                <FormLabel>Times they are available:</FormLabel>
                <CheckboxGroup
                    value={availability}
                    onChange={(values) => setAvailability(values as string[])}
                >
                    <Checkbox value="Morning">Morning</Checkbox>
                    <Checkbox value="Afternoon">Afternoon</Checkbox>
                    <Checkbox value="Evening">Evening</Checkbox>
                </CheckboxGroup>
            </FormControl>
            <br></br>
            <Button type="submit">Register</Button>
        </form>
        </div>
    </div>
  );
}
