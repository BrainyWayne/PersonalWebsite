import React from 'react';
import { Section,SectionText, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import STLViewer from 'stl-viewer'

// we kept the data inside our file instead of putting it on constants because it contains just 6 lines.
const data = [
    { number: 30, text: 'Open Source Projects' },
    { number: 1000, text: 'Students taught through Google DSC', },
    { number: 500, text: 'Twitter Followers', },
    { number: 5000, text: 'Github Stars', }
];

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

const Skyline = () => (
    <Section>
        <a href='https://skyline.github.com/brainywayne/2022'><SectionTitle>Skyline</SectionTitle></a>
        <SectionText>
            Check out my <a href='https://skyline.github.com/brainywayne/2022'><span style={{color:"#00ffff",cursor:"pointer"}}>github skyline</span> </a>
          </SectionText>
    </Section>
);

export default Skyline;
