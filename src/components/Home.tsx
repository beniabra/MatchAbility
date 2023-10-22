import * as React from "react"
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f6f9fc;
    color: #333;
`;

const Title = styled.h1`
    font-size: 1.9em;
    color: #3d405b;
    text-align: center;
`;

const Section = styled.section`
    margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
    font-size: 1.5em;
    color: #3d405b;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

const List = styled.ul`
    list-style-type: none;
`;

const ListItem = styled.li`
    margin-bottom: 20px;
`;

const Footer = styled.footer`
    text-align: center;
    padding: 20px;
    background-color: #3d405b;
    color: #fff;
`;

export function Home(): JSX.Element {
    return (
        <div style={{margin: '30px'}}>
        <br></br>
        <Container>
            <Title>Welcome to Matchability, our Volunteer Matching Service</Title>
            <p>Find volunteers who can help with disabilities.</p>
            <br></br>
            <Section>
                <SectionTitle>Our Mission</SectionTitle>
                <p>At MatchAbility, we believe in a world where everyone, regardless of ability, can navigate life seamlessly. Our mission is to connect individuals with disabilities to a community of compassionate helpers ready to assist in a variety of ways.</p>
            </Section>

            <Section>
                <SectionTitle>Who We Are</SectionTitle>
                <p>Born out of a desire to bridge the gap between those who need assistance and those willing to offer a helping hand, Matchability has grown into a trusted platform where connections are made every day. Whether it's guiding someone in a wheelchair around town, interpreting sign language for the hearing-impaired, or providing note-taking support for someone with dyslexia, we ensure that help is just a click away.</p>
            </Section>

            <Section>
                <SectionTitle>Our Services</SectionTitle>
                <List>
                    <ListItem><strong>Mobility Assistance</strong>: Navigating the world can be challenging for some. Our dedicated assistants provide hands-on support, ensuring safe and hassle-free movement for those in wheelchairs or with mobility challenges.</ListItem>
                    <ListItem><strong>Note-taking</strong>: Educational settings can pose hurdles for individuals with dyslexia or other learning disabilities. We connect such individuals with skilled note-takers, ensuring they don’t miss out on important information.</ListItem>
                    <ListItem><strong>Sign Interpreting</strong>: We believe communication is a fundamental right. Our sign language interpreters bridge the communication gap between the hearing-impaired and the world around them.</ListItem>
                    <ListItem><strong>Transportation Requests</strong>: Getting from point A to point B shouldn’t be a struggle. Our platform connects individuals with transportation services that understand and cater to their specific needs.</ListItem>
                </List>
            </Section>

            <Section>
                <SectionTitle>Join Us</SectionTitle>
                <p>Whether you're looking for assistance or have a heart full of help to offer, we invite you to be a part of our community. Let's create a world where everyone has the support they need to shine.</p>
            </Section>

            <Footer>
                Thank you for visiting Matchability. Together, we make a difference.
            </Footer>
        </Container>
        <br></br>

        
        <br></br>
    </div>
    )
}