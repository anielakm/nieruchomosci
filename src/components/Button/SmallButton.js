import styled from 'styled-components'
import Button from './Button'

const SmallButton = styled(Button)`

background-color:${(props) => props.delete ? '#ff6150' : '#54d2d2'};
border-color:${(props) => props.delete ? '#ff6150' : '#54d2d2'};
padding:2% 4%;

&:hover{
    background-color:transparent;
    color:${(props) => props.delete ? '#ff6150' : '#54d2d2'};
}
`;

export default SmallButton;