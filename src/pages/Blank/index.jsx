import { Container, TextContent } from "./styles";
import Card from '../../components/Cards/BlogPageCard'
import Image from '/images/imgNoticia1.jpg'


export default function Blank() {

    const texts = [
        { path: Image, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { path: Image, text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { path: Image, text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { path: Image, text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { path: Image, text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
    ];

    return (
        <Container>
            <h1>Blank Page</h1>
 
            <Card path={texts[0].path} text={texts[0].text} />
            <Card path={texts[1].path} text={texts[1].text} />
            <Card path={texts[2].path} text={texts[2].text} />
            <Card path={texts[3].path} text={texts[3].text} />
            <Card path={texts[4].path} text={texts[4].text} />

        </Container>
    );
}