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
        { name: "Blindness" },
        { name: "Mobility" },
        { name: "Hearing Impairment" },
        { name: "Dyslexia" },
    ];

    const notify = () => toast("Match Made!");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        notify();
        // Process form data, if necessary
    };

    return (
        <div style={{ margin: '0 400px' }}>
            <b>Find a MatchAble buddy!</b>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                Disability:
                <Multiselect
                    options={disabilitiesList}
                    selectedValues={selectedDisabilities}
                    onSelect={(selectedList) => setSelectedDisabilities(selectedList)}
                    onRemove={(selectedList) => setSelectedDisabilities(selectedList)}
                    displayValue="name"
                />
                <br></br>
                <label>
                    Time Slot:
                    <input
                        type="text"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px 12px' }}
                    />
                </label>
                <br></br>
                <br></br>
                <Button type="submit" style={{
                    backgroundColor: '#81b29a', 
                    color: 'white', 
                    padding: '8px 12px', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Submit
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
}