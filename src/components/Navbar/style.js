import styled from "styled-components";

export const Button = styled.button`
    transition: all 0.3s linear;
    border-radius: 50%;
    &:hover{
        transform: rotate(360deg);
        background-color: aqua;
    }
`

export const Li = styled.li`
    &:hover{
        color: aqua;
        cursor: pointer;
    }
`