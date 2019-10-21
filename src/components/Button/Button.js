import styled from 'styled-components'

const Button = styled.button`
padding: 3% 7%;
font-size:14px;
background-color:#072448;
color:white;
cursor:pointer;
letter-spacing:1px;
box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
border:1px solid #072448;
font-weight:700;
text-transform:uppercase;
transition: 0.7s all;

&:hover{
    background-color:transparent;
    color:#072448;

}

@media(min-width:768px){
    padding: 1.5% 3%;
    font-size:11px;
}
`;

export default Button;