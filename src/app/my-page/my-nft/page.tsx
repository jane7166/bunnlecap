"use client";
import React from 'react';
import styled from "styled-components";
import { useRouter } from 'next/navigation';

const nfts = [
  { image: "/sliver_nft(1).png" },
  { image: "/sliver_nft(2).png" },
  { image: "/gold_nft(1).png" },
  { image: "/gold_nft(2).png" },
];


const MyNFT: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/my-page');
  };

  return (
      <Container>
        <Header>
          <BackButton onClick={handleBack}>←</BackButton>
          <Title>My NFT</Title>
        </Header>

        <ContentContainer>
          <NFTGrid>
            {nfts.map((nft, index) => (
              <NFTCard key={index}>
                <a href="/my-page/my-nft/my-nft-detail">
                  <img src={nft.image} alt={`NFT ${index + 1}`} />
                </a>
              </NFTCard>
            ))}
          </NFTGrid>
        </ContentContainer>

        <BottomNav>
          <BottomNavItem>
            <img 
              src="/event.png" 
              alt="Event" 
              style={{ width: '30px', height: '30px' }}
            />
          </BottomNavItem>
          <BottomNavItem>
            <img 
              src="/chat.png" 
              alt="Chat" 
              style={{ width: '30px', height: '30px' }}
            />
          </BottomNavItem>
          <BottomNavItem>
            <img 
              src="/home.png" 
              alt="Home" 
              style={{ width: '30px', height: '30px' }}
            />
          </BottomNavItem>
          <BottomNavItem>
            <a href="/my-page">
              <img 
                src="/mypage.png" 
                alt="My Page" 
                style={{ width: '25px', height: '30px' }}
              />  
            </a>
          </BottomNavItem>
        </BottomNav>
      </Container>
  );
};

export default MyNFT;

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

const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #0b1927;

  &:hover {
    color: #007bff;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  overflow-y: auto;
`;

const NFTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const NFTCard = styled.div`
  width: 100%;
  position: relative;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
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

