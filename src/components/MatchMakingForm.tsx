/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Volunteers } from "../interfaces/volunteers";
import { Multiselect } from "multiselect-react-dropdown";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function MatchMakingForm() {
    const [selectedDisabilities, setSelectedDisabilities] = useState([]);
    const [timeSlot, setTimeSlot] = useState("");

    const disabilitiesList = [
        { name: "Visual Impairment" },
        { name: "Hearing Impairment" },
        { name: "Physical Disability" },
        { name: "Intellectual Disability" },
    ];

    const notify = () => toast("Match Made!");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        notify();
        // Process form data, if necessary
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Multiselect
                    options={disabilitiesList}
                    selectedValues={selectedDisabilities}
                    onSelect={(selectedList) => setSelectedDisabilities(selectedList)}
                    onRemove={(selectedList) => setSelectedDisabilities(selectedList)}
                    displayValue="name"
                />
                <label>
                    Time Slot:
                    <input
                        type="text"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                    />
                </label>
                <Button type="submit">Submit</Button>
            </form>
            <ToastContainer />
        </div>
    );
}