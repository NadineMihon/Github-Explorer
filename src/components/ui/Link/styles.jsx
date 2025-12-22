import styled from "styled-components";
import { Link } from "react-router-dom";

export const SimpleLink = styled(Link)`
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        color: rgba(255, 142, 142, 1);
    }
`