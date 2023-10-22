import * as React from "react"

const disabilityInfoStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
  };
  
  const headingStyle = {
    fontSize: '1.5rem',
    color: '#333',
  };
  
  const paragraphStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.4',
  };

export function About() {
    return (
        <div style={{margin: '30px'}}>
            <h1><b>We support a range of disabilities and we are working everyday to expand our reach! Here is some information about our current services.</b></h1>
            <br></br>
            <br></br>
            <div style={disabilityInfoStyle}>
        <h2 style={headingStyle}>Visual Impairments</h2>
        <p style={paragraphStyle}>
          Visual impairments encompass a range of conditions that affect a person's vision. These conditions can vary from mild to severe and can include blindness, low vision, and color blindness. People with visual impairments often use tools like braille, screen readers, and white canes to navigate and access information. It's essential to provide accessible content and environments to accommodate their needs.
        </p>
      </div>

      <div style={disabilityInfoStyle}>
        <h2 style={headingStyle}>Hearing Impairments</h2>
        <p style={paragraphStyle}>
          Hearing impairments involve difficulties with hearing or complete deafness. Individuals with hearing impairments may communicate using sign language, lip-reading, or hearing aids. Providing closed captions, sign language interpreters, and assistive listening systems can make information and events more accessible to the Deaf and hard of hearing community.
        </p>
      </div>

      <div style={disabilityInfoStyle}>
        <h2 style={headingStyle}>Mobility Impairments</h2>
        <p style={paragraphStyle}>
          Mobility impairments affect a person's ability to move and control their body. Conditions like paralysis, cerebral palsy, and amputations fall under this category. Mobility aids such as wheelchairs and prosthetics enable people with these impairments to lead active lives. Ensuring physical accessibility in buildings and public spaces is crucial to inclusivity.
        </p>
      </div>
        </div>
    )
}

