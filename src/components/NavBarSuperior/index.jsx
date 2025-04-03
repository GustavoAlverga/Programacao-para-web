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
                    <LinkComponent to="/colaboradores/criar" onClick={() => setIsDropdownOpen(false)}>
                        <p>Criar</p>
                    </LinkComponent>
                    
                    <LinkComponent to="/colaboradores/editar" onClick={() => setIsDropdownOpen(false)}>
                        <p>Editar</p>
                    </LinkComponent>
                </DropdownContent>
            </DropdownContainer>

            <LinkComponent to="/colaboradores">
            <p>Colaboradores</p>
            </LinkComponent>
            
            <LinkComponent to="/eventos">
            <p>Eventos</p>
            </LinkComponent>
                
            <LinkComponent to="/contato">
            <p>Contato</p>
            </LinkComponent>
        </Container>
    );
}