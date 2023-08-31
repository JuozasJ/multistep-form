import styled from 'styled-components'

export const ButtonOutline = styled.button`

    width: 100px;
    height: 50px;
    background: var(--contrast);
    border-radius: 26px;
    font-size: 16px;
    font-weight: 500;
    color: var(--primary);
    border: solid 1px var(--primary);
    cursor: pointer;

    @media only screen and (max-width: 550px) {
        width: 86px;
        height: 42px;
    }
`