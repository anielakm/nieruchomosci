import styled from 'styled-components'


const PopupWindow = styled.div`
background-color:rgba(0,0,0,0.5);
position:fixed;
top:0;
left:0;
height:100vh;
width:100vw;
justify-content:center;
align-items:center;
display:none;
z-index:999;
`;

export default PopupWindow;