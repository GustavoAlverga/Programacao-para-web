import { Container } from "./styles";

export default function Button({ children, path }) {

    return (
        <Container to={path}>
            {children}
        </Container>
    );
}