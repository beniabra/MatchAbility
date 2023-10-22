import React, {useState} from "react"
import {Volunteers} from "../interfaces/volunteers";
import volunteers from "../volunteers.json";

export const {VOLUNTEERS}: Record<string, Volunteers[]> =
    volunteers as Record<string, Volunteers[]>;

export function VolunteerDisplay(): JSX.Element {
    const [volunteers, setVolunteers] = useState<Volunteers[]>(VOLUNTEERS);
    return (
        <div>
            Hi
        </div>
    )
}