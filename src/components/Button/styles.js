import styled from "styled-components"

export const Wrapper = styled.button`
    display: inline-block;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    color: #000;
    background-color: #ff0000;
    transition: background-color .3s;
    will-change: background-color;

    &:hover{
        background-color: #ff0;
    }
`