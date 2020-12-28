import styled from 'styled-components'

export const ButtonContainer = styled.button
`
font-size:1.2rem;
background:${prop=>prop.shop ? "var(--mainBlue)" : prop.cart ? "var(--lightBlue)" : "transparent"};
border:0;
color:var(--mainWhite);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0.2rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:${prop=>prop.cart ? "var(--style)" : ""};
    color:var(--mainWhite);
}
&:focus{
    outline:none;
}
`
;