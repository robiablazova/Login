import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    //Здесь также может быть запрос в серверу
    const handleLogout = () => {
        dispatch(logout());
        navigate('login')
    }
    return (
      <Main>
        <Button onClick={handleLogout}>Logout</Button>
      </Main>
    );
}

export default Logout

const Main = styled.div `
    display: flex;
    justify-content: center;
`

const Button = styled.button`
margin-top: 50px;
width: 300px;
    height: 30px;
    background-color: #3A5B22;
    border-radius: 10px;
    color: white;
    font-weight: bold;
`