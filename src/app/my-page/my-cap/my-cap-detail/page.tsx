"use client";
import React from 'react';
import styled from "styled-components";

const Home: React.FC = () => {
  return (
      <MainContainer>
        <ContentContainer>
          <NFTCard>
            <img src="/party_ticket.png" alt="NFT" />
          </NFTCard>
        </ContentContainer>

        <Footer>
          <a href= "/my-page/my-cap">
            <OKButton>OK</OKButton>
          </a>
        </Footer>
      </MainContainer>   
  );
};

export default Home;

const MainContainer = styled.main`
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

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const NFTCard = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OKButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px; /* Reduced padding */
  background-color: ${props => (props.disabled ? '#ddd' : '#0b1927')};
  color: ${props => (props.disabled ? '#aaa' : '#fff')}; 
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.disabled ? '#ddd' : '#f70047')}; 
  }
`;