"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ethers } from "hardhat";
// import "../../../../test/send.ts";

const teams = [
  { name: "New York Yankees", token: "Yankees" },
  { name: "Los Angeles Dodgers", token: "Dodgers" },
  { name: "Houston Astros", token: "Astros" },
  { name: "Atlanta Braves", token: "Braves" },
  { name: "Chicago Cubs", token: "Cubs" },
];

const Payments: React.FC = () => {
  const [teamBalances, setTeamBalances] = useState<{ [team: string]: number }>({
    "New York Yankees": 100,
    "Los Angeles Dodgers": 100,
    "Houston Astros": 100,
    "Atlanta Braves": 100,
    "Chicago Cubs": 100,
  });

  const [selectedTeam, setSelectedTeam] = useState<{ name: string; token: string } | null>(null);
  const [purchaseStatus, setPurchaseStatus] = useState('');
  const [nftResult, setNftResult] = useState('');
  const [chargeAmount, setChargeAmount] = useState('');
  const [chargeStatus, setChargeStatus] = useState('');

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");


  const connectWallet = async () => {
    if (window.ethereum) {
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      await newProvider.send("eth_requestAccounts", []);
      const newSigner = newProvider.getSigner();
      setProvider(newProvider);
      setSigner(newSigner);
      alert("Wallet connected");
    } else {
      alert("Please install MetaMask!");
    }
  };
  
  const sendEther = async () => {
    // 임의 값 설정
    setRecipient("0xcf55E51E583D4e150D374753F0600F2ec5594e24");
    setAmount("0.0000001");
  
    try {
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.utils.parseEther(amount),
      });
  
      await tx.wait();
      alert(`Transaction successful! Hash: ${tx.hash}`);
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed!");
    }
  };

  const handleSelectTeam = (team: { name: string; token: string }) => {
    setSelectedTeam(team);
    setPurchaseStatus('');
    setNftResult('');
    setChargeStatus('');
  };

  const handleBuyChatToken = () => {
    if (selectedTeam) {
      const { name, token } = selectedTeam;
      if (teamBalances[name] >= 10) {
        setTeamBalances({
          ...teamBalances,
          [name]: teamBalances[name] - 10,
        });
        setPurchaseStatus(`You have successfully bought a chat ticket for ${name} using ${token}!`);
      } else {
        setPurchaseStatus(`Not enough ${token}!`);
      }
    } else {
      setPurchaseStatus('Please select a team first.');
    }
  };

  const handleDrawNFT = () => {
    if (selectedTeam) {
      const { name, token } = selectedTeam;
      if (teamBalances[name] >= 20) {
        setTeamBalances({
          ...teamBalances,
          [name]: teamBalances[name] - 20,
        });
        setNftResult('Purchase complete! You\'ve received a Catch Chance.');
      } else {
        setNftResult(`Not enough ${token}!`);
      }
    } else {
      setNftResult('Please select a team first.');
    }
  };

  const handleChargeTokens = () => {
    if (selectedTeam) {
      const { name, token } = selectedTeam;
      const amount = parseInt(chargeAmount);
      if (isNaN(amount) || amount <= 0) {
        setChargeStatus('Invalid amount.');
        return;
      }
      setTeamBalances({
        ...teamBalances,
        [name]: teamBalances[name] + amount,
      });
      setChargeAmount('');
      setChargeStatus(`Successfully charged ${amount} ${token} to ${name}!`);
    } else {
      setChargeStatus('Please select a team first.');
    }
  };

  connectWallet();

  return (
    <MainContainer>
      <Header>
        <Title>MLB Chat and NFT</Title>
        <TokenBalance>
          {selectedTeam ? (
            <>
              {selectedTeam.name} Balance: {teamBalances[selectedTeam.name]} {selectedTeam.token}
            </>
          ) : (
            "Select a team to view balance"
          )}
        </TokenBalance>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Select Your Team</SectionTitle>
          <TeamList>
            {teams.map((team) => (
              <TeamButton
                key={team.name}
                onClick={() => handleSelectTeam(team)}
                isSelected={selectedTeam?.name === team.name}
              >
                {team.name}
              </TeamButton>
            ))}
          </TeamList>
        </Section>

        <Section>
          <SectionTitle>Buy Chat Token</SectionTitle>
          <InfoBox>
            <Button onClick={sendEther} disabled={!selectedTeam}>
              Buy Chat Token for {selectedTeam ? selectedTeam.name : 'a Team'} (10 {selectedTeam ? selectedTeam.token : 'Tokens'})
            </Button>
            {purchaseStatus && <StatusMessage>{purchaseStatus}</StatusMessage>}
          </InfoBox>
        </Section>

        <Section>
          <SectionTitle>Bubble Catch</SectionTitle>
          <InfoBox>
            <Button onClick={handleDrawNFT} disabled={!selectedTeam}>
              Bubble Catch (20 {selectedTeam ? selectedTeam.token : 'Tokens'})
            </Button>
            {nftResult && <StatusMessage>{nftResult}</StatusMessage>}
          </InfoBox>
        </Section>

        <Section>
          <SectionTitle>Charge Tokens</SectionTitle>
          <InfoBox>
            <Input
              type="number"
              value={chargeAmount}
              onChange={(e) => setChargeAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <Button onClick={handleChargeTokens} disabled={!selectedTeam}>
              Charge {selectedTeam ? selectedTeam.token : 'Tokens'} for {selectedTeam ? selectedTeam.name : 'a Team'}
            </Button>
            {chargeStatus && <StatusMessage>{chargeStatus}</StatusMessage>}
          </InfoBox>
        </Section>
      </Content>

      <Footer>
        <Link href="/my-page" passHref>
          <OKButton>OK</OKButton>
        </Link>
      </Footer>
    </MainContainer>
  );
};

export default Payments;

const MainContainer = styled.main`
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

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  color: #0b1927;
  background-color: #fcf0d5;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  z-index: 1000; /* Ensure header is above other content */
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem; 
  letter-spacing: 1.5px;
`;

const TokenBalance = styled.div`
  font-size: 1rem; 
  color: #0b1927;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 100px; 
  overflow: auto;
`;

const Section = styled.section`
  width: 100%;
  max-width: 393px; /* Match content width */
  margin-bottom: 20px; /* Reduced space between sections */
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem; 
  color: #0b1927; 
  margin-bottom: 10px; 
  border-left: 4px solid #f70047; 
  padding-left: 8px;
`;

const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Reduced space between buttons */
`;

const TeamButton = styled.button<{ isSelected: boolean }>`
  padding: 10px 20px;
  background-color: ${props => (props.isSelected ? '#f70047' : '#fcf0d5')}; 
  color: ${props => (props.isSelected ? '#fff' : '#0b1927')}; 
  border: 2px solid #0b1927;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.isSelected ? '#f70047' : '#f5e0d0')}; 
  }
`;

const InfoBox = styled.div`
  background-color: #fff; 
  border-radius: 8px; /* Reduced border radius */
  padding: 15px; /* Reduced padding */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* Reduced shadow */
`;

const Button = styled.button<{ disabled?: boolean }>`
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

const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 2px solid #0b1927;
  border-radius: 8px;
  width: 100%;
  max-width: 280px; /* Adjusted width */
  margin-bottom: 10px;
`;

const StatusMessage = styled.p`
  margin-top: 8px;
  font-size: 0.875rem;
  color: #f70047;
`;

const Footer = styled.footer`
  bottom: 0;
  left: 0;
  width: 393px;
  padding: 15px;
  background-color: #fcf0d5;
  text-align: center;
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

