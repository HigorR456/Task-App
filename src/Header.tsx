import styled from 'styled-components';

const HeaderStyle = styled.header`
margin: 0;
padding: 0;
font-family: sans-serif;
font-size: 70px;
font-weight: bold;
line-height: 100px;
color: white;
text-align: center;
background: rgba(0, 0, 0, 0.5);
-webkit-text-stroke: 2px rgb(255,255,255,0.9);
`

const Header = () => {
    return (
        <>
            <HeaderStyle>
                Task App
            </HeaderStyle>
        </>
    );
};

export default Header;