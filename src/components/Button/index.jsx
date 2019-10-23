import React from "react"
import {Wrapper} from "./styles"

function Button({ as,children, href }) {
    return (
        <Wrapper as={as} href={href}>{children}</Wrapper>
    )
}
export default Button;
