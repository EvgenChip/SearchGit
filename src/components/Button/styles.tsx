import { styled } from "styled-components"

export const SButton = styled.button `
 background: transparent;
    border: none;
    padding-left: 3px;
    cursor: pointer;
    transition: 0.8s;
`
export const SButtonActive = styled(SButton) `
    transform: rotate(180deg);
`