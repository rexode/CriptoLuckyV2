import Navbar from "./NavBar";
import { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Container,
  Toolbar,
  Card,
  AppBar,
  PaletteMode,
} from "@mui/material";
import { themeDark, themeLight } from "../components/Themes";
import { styled, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ethers } from "ethers";
import abi from "../abi/abiToken.json";



export default function Secondpage() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [DarkMode, setDarkMode] = useState(false);
  const [nTokens, setnTokens] = useState(null);

  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("good");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(tempProvider);
      console.log(tempProvider);
      setAccount(accounts[0]);

      const contract = new ethers.Contract(
        "0x40b15a7dABE9B999EF56D83E991C61994B887532",
        abi,
        tempProvider
      );
      console.log(contract);
      const nToken = await contract.balanceOf(accounts[0]);

      console.log(nToken.toString());
      setnTokens(nToken);
    } else {
      console.log("install metamask");
    }
  };
  const handleMode = () => {
    setDarkMode(!DarkMode);
  };

  useEffect(() => {
    initConnection();
  }, []);
  return (
    <ThemeProvider theme={DarkMode ? themeLight : themeDark}>
      <CssBaseline />
      <Box className="App">
        <Navbar
          initConnection={initConnection}
          account={account}
          handleMode={handleMode}
          DarkMode={DarkMode}
          provider={provider}
          nTokens={nTokens}
        />
      </Box>
    </ThemeProvider>
  );

};

