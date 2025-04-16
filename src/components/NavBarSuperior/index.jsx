import React, { useState, useEffect, useRef} from "react";
import { Container, Logo, LinkComponent, DropdownContainer, DropdownContent, DropdownButton} from "./styles";
import Image from '/images/Logo.png';

export default function NavBar() {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdownOpen]);

    return (
        <Container>
            <Logo to={'/'}>
                <img src={Image}/>
            </Logo>

            <DropdownContainer ref={dropdownRef}>
                <DropdownButton onClick={toggleDropdown}>
                    <p>Colaboradores</p>
                    <span>{isDropdownOpen ? '▲' : '▼'}</span>
                </DropdownButton>
                
                <DropdownContent isOpen={isDropdownOpen}>
                    <LinkComponent to="/parcerias" onClick={() => setIsDropdownOpen(false)}>
                        <p>Parceiros</p>
                    </LinkComponent>
                    
                    <LinkComponent to="/servicos" onClick={() => setIsDropdownOpen(false)}>
                        <p>Serviço</p>
                    </LinkComponent>
                </DropdownContent>
            </DropdownContainer>

            <LinkComponent to="/blog">
            <p>Noticias</p>
            </LinkComponent>
            
            <LinkComponent to="/eventos">
            <p>Eventos</p>
            </LinkComponent>
                
            <LinkComponent to="/faleConosco">
            <p>Contato</p>
            </LinkComponent>
        </Container>
    );
}