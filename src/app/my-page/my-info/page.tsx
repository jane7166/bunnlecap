"use client";
import React from 'react';
import styled from "styled-components";

const MyInfo: React.FC = () => {
  return (
    <MainContainer>
      <Content>
        <WelcomeMessage>Nickname, Welcome!</WelcomeMessage>
        <ProfileImage src="/bubble.png" alt="Profile" />
        
        <Section>
          <SectionTitle>Basic Information</SectionTitle>
          <InfoBox>
            <InfoRow>
              <InfoLabel>Name</InfoLabel>
              <InfoValue>Jieun Kim</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Birth Date</InfoLabel>
              <InfoValue>07/16/02</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Gender</InfoLabel>
              <InfoValue>Female</InfoValue>
            </InfoRow>
          </InfoBox>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <InfoBox>
            <InfoRow>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>abc123@gmail.com</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Cell Phone</InfoLabel>
              <InfoValue>010-1234-5678</InfoValue>
            </InfoRow>
          </InfoBox>
        </Section>

        <Section>
          <SectionTitle>Looking for something else?</SectionTitle>
          <LinkList>
            <LinkItem>Search Account</LinkItem>
            <LinkItem>View Support Options</LinkItem>
            <LinkItem>Send Feedback</LinkItem>
          </LinkList>
        </Section>
      </Content>

      <Footer>
      <a href= "/my-page">
      <OKButton>OK</OKButton>
      </a>
      </Footer>
    </MainContainer>
  );
};

export default MyInfo;

const MainContainer = styled.main`
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  width: 100%;
`;

const WelcomeMessage = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;
  color: #0b1927;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 90%;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #0b1927;
  margin-bottom: 10px;
`;

const InfoBox = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const InfoLabel = styled.div`
  font-size: 16px;
  color: #0b1927;
`;

const InfoValue = styled.div`
  font-size: 16px;
  color: #000;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkItem = styled.a`
  font-size: 16px;
  color: #0000ff;
  text-decoration: underline;
  cursor: pointer;
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

