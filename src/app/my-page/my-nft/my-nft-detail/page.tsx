"use client";
import React from 'react';
import styled from "styled-components";
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <MainContainer>
      <Header>
        <BackButton onClick={handleBack}>←</BackButton>
      </Header>

      <NFTGrid>
        {Array(1).fill("").map((_, index) => (
          <NFTCard key={index}>
            <img src="/sliver_nft(1).png" alt="NFT" />
            <TextContainer>
              <p>Name of the Club</p>
              <p>Name</p>
              <p>Number</p>
              <p>Role</p>
            </TextContainer>
          </NFTCard>
        ))}
      </NFTGrid>

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
          <a href="/my-page">
            <img 
              src="/mypage.png" 
              alt="navi mypage Logo" 
              style={{ width: '25px', height: '30px' }}
            />  
          </a>
        </BottomNavItem>
      </BottomNav>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 393px; 
  height: 852px;
  background-color: #f8f8f8;
  margin: 0 auto;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #0b1927;
  margin-right: auto; /* Aligns button to the left */

  &:hover {
    color: #007bff;
  }
`;

const NFTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  padding: 10px;
  background-color: #f8f8f8; 
  padding-top: 60px;
`;

const NFTCard = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #0b1927;
  font-weight: bold;
  border-radius: 5px;
  box-sizing: border-box;

  p {
    margin: 0;
    font-size: 18px;
    text-align: center;
  }
`;

const BottomNav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #fcf0d5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;

const BottomNavItem = styled.div`
  text-align: center;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }

  img {
    display: block;
    margin: 0 auto;
  }
`;