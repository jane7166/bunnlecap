"use client";
import React from 'react';
import Link from 'next/link';
import { AppProps } from 'next/app';
import styled from "styled-components";
import styles from './Home.module.css';

const MyPage: React.FC = () => {
  return (
    <Container>
      <Main>
        <Header>
          <img 
            src="/bubble.png" 
            alt="Club Logo" 
            style={{ width: '110px', height: '110px' }}
            className={styles.clubLogo}
          />
          <ClubInfo>
            <ClubName>Name of the Club</ClubName>
            <Nickname>Nickname</Nickname>
          </ClubInfo>
        </Header>

        <ItemContainer>
          <StyledLink href="/my-page/my-nft">
            <Item>
              <ItemIcon>⚾</ItemIcon>
              <ItemDetails>My NFT</ItemDetails>
            </Item>
          </StyledLink>
          
          <StyledLink href="/my-page/my-cap">
            <Item>
              <ItemIcon>🧢</ItemIcon>
              <ItemDetails>My Cap</ItemDetails>
            </Item>
          </StyledLink>

          <StyledLink href="/my-page/my-info">
            <Item>
              <ItemIcon>👤</ItemIcon>
              <ItemDetails>My Info</ItemDetails>
            </Item>
          </StyledLink>
        </ItemContainer>

        <Footer>
          <StyledLink href="/my-page/payments">
            <FooterItem>Payments</FooterItem>
          </StyledLink>
          <FooterItem>Service Center</FooterItem>
          <FooterItem>Logout</FooterItem>
        </Footer>
      </Main>
      
      <BottomNav>
        <BottomNavItem>
        <img 
            src="/event.png" 
            alt="navi event Logo" 
            style={{ width: '30px', height: '30px' }}
          />
        </BottomNavItem>
        <BottomNavItem>
        <img 
            src="/chat.png" 
            alt="navi chat Logo" 
            style={{ width: '30px', height: '30px' }}
          />
        </BottomNavItem>
        <BottomNavItem>
        <img 
            src="/home.png" 
            alt="navi home Logo" 
            style={{ width: '30px', height: '30px' }}
          />
        </BottomNavItem>
        <BottomNavItem>
        <a href= "/my-page">
          <img 
              src="/mypage.png" 
              alt="navi mypage Logo" 
              style={{ width: '25px', height: '30px' }}
            />  
        </a>
        </BottomNavItem>
      </BottomNav>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 393px; 
  height: 852px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 50px 20px 10px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ClubInfo = styled.div`
  margin-left: 15px;
`;

const ClubName = styled.h2`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
`;

const Nickname = styled.p`
  font-size: 16px;
  color: #888888;
  margin: 5px 0 0;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 35px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const ItemIcon = styled.div`
  font-size: 24px;
  margin-right: 15px;
`;

const ItemDetails = styled.p`
  font-size: 18px;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const FooterItem = styled.p`
  font-size: 16px;
  color: #0b1927;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const BottomNav = styled.nav`
  width: 100%;
  background-color: #fcf0d5;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  padding: 25px;
`;

const BottomNavItem = styled.div`
  text-align: center;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;
