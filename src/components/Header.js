import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0 0;
    color: white;
`

const Header = () => (
    <Link to='/'>
        <HeaderWrapper>
            Back To Boards
        </HeaderWrapper>
    </Link>
)

export default Header;
