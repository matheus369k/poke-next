'use client'

import styled from "styled-components";

export const StyledAbout = styled.main`
    color: ${props => props.theme['gray-100']};

    min-height: 80vh;
    max-width: 70rem;
    
    margin: auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 80vh;
    width: max-content;

    margin: 0 auto;
    padding: 0 1rem;

    background: ${props=> props.theme["gray-900"]};

    border-radius: 6px;

    h1 {
        font-size: 2rem;
            
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1.5rem;

        max-width: 31.25rem;

        text-align: center;
    }

    @media (max-width: 469px) {
        width: 100%;
    }
`