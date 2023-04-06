import styled from 'styled-components';

export const Container = styled.div`
   width: 250px;
   height: 100vh;
   background-color: rgb(5 2 54);
   color: #fff;
`
Container.Title = styled.h3`
font-size: 20px;
font-weight: 700;
text-align: center;
padding: 23px 0;
border-bottom: 2px solid #878585;
`

export const Menu = styled.ul`
margin-top: 40px;
`

Menu.Item = styled.li`
 a{
   margin-top: 10px;
   border-top-left-radius: 30px;
   border-bottom-left-radius: 30px;
   padding: 10px;
   display: block;
   padding: 15px;
 }
 a.active{
   background-color: #ced8db;
   color: rgb(5 2 54);
 }
`