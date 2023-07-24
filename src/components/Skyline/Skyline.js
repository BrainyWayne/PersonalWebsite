import React from 'react';

// Add comments to explain the purpose and functionality of the class `Skyline`
// The `Skyline` component is a functional component that represents a section of a webpage.
// It displays a title and a text, and provides a link to the author's GitHub skyline.

def example():
    a = 4

// Add comments to explain the purpose and functionality of the constants `style`, `data`, and `url`
// The `style` constant is an object that defines the CSS styles for the `Skyline` component.
// It sets the top, left, width, and height properties to cover the entire viewport.

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

// The `data` constant is an array of objects that represent data points for the `Skyline` component.
// Each object has a `number` property and a `text` property, which are used to display information.

const data = [
    { number: 30, text: 'Open Source Projects' },
    { number: 1000, text: 'Students taught through Google DSC', },
    { number: 500, text: 'Twitter Followers', },
    { number: 5000, text: 'Github Stars', }
];

// The `url` constant is a string that represents the URL of a 3D model file.
// It is used as a source for the `STLViewer` component.

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"

const Skyline = () => (
    <Section>
        <a href='https://skyline.github.com/brainywayne/2022'><SectionTitle>Skyline</SectionTitle></a>
        <SectionText>
            Check out my <a href='https://skyline.github.com/brainywayne/2022'><span style={{color:"#00ffff",cursor:"pointer"}}>github skyline</span> </a>
          </SectionText>
    </Section>
);

export default Skyline;
