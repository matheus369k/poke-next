'use client'

import styled, { keyframes } from "styled-components";

const loading = keyframes`
    0% {
        content: '';
    }
    25% {
        content: '.';
    }
    50% {
        content: '..';
    }
    75% {
        content: '...';
    }
`;

export const StyledHome = styled.main`
    color: ${props => props.theme['gray-100']};

    min-height: 80vh;
    max-width: 70rem;
    
    margin: auto;
    
    display: flex;
    flex-direction: column;

    gap: 2.5rem;

    position: relative;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .4rem;

        h1 {
            color: ${props => props.theme.red};

            text-align: center;

            font-size: 3rem;

            span {
                color: ${props => props.theme["gray-100"]};
            }
        }
    }

    &>button {
        position: fixed;
        top: 2rem;
        right: 2rem;

        background: transparent;
        box-shadow: 0;
        outline: 0;
        border: 0;

        color: white;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        flex-wrap: wrap;

        padding: 0 0.5rem;
        gap: 1rem;
    }

    &>p {
        width: 200px;

        margin: auto;

        font-size: 2rem;

        &::after {
            content: '';
        
            animation-name: ${loading};
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
    }
`;