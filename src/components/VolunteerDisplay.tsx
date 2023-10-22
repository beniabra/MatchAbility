import React, { useState } from "react";
import { Volunteers } from "../interfaces/volunteers";
import volunteersdata from "../volunteers.json";
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
  Button
} from "@chakra-ui/react";

export const { VOLUNTEERS }: Record<string, Volunteers[]> =
  volunteersdata as Record<string, Volunteers[]>;

export function VolunteerDisplay(): JSX.Element {
  const [volunteers, setVolunteers] = useState<Volunteers[]>(VOLUNTEERS);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [disabilities, setDisabilities] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
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
          availability,
          daysAvailable  // <- Add this line
        };
        addNewVolunteer(volunteerData);
        setName("");
        setBio("");
        setDisabilities([]);
        setAvailability("");
        setDaysAvailable([]);  // <- Reset the daysAvailable
    }

  return (
    <div>
      {/* Volunteer Display */}
      <SimpleGrid columns={4} spacing={10}>
        {volunteers.map(volunteer => (
          <Card>
            <CardHeader>
              <Heading size="md">{volunteer.name}</Heading>
            </CardHeader>
            <CardBody>
              <p>{volunteer.bio}</p>
              <p style={{ alignSelf: "left" }}>
                I can help with: {volunteer.disabilities.join(", ")}
              </p>
              <p>Availability: {volunteer.availability}</p>
            </CardBody>
            <CardFooter>
              <Button>Match me</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

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
            <Checkbox value="disability1">Disability 1</Checkbox>
            <Checkbox value="disability2">Disability 2</Checkbox>
            <Checkbox value="disability3">Disability 3</Checkbox>
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
          <Select value={availability} onChange={(e) => setAvailability(e.target.value)}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </Select>
        </FormControl>

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
