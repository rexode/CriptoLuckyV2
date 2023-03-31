import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  ListItem,
  List,
  Drawer,
  useMediaQuery,
  useTheme,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { styled, createTheme, CssBaseline } from "@mui/material";
import imageButton from "../assets/metamask.png";

import {
  Celebration,
  Twitter,
  Attachment,
  LocalActivity,
  Menu,
  AcUnit,
  AirlineSeatFlat,
} from "@mui/icons-material";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import abi from "../abi/abiToken.json";

import { Box } from "@mui/system";
import React from "react";
import App from "../App";
import { Link } from "react-scroll";
import { red } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./Themes";

const NavbarPersonalizada = styled(AppBar)({
  color: "white",
  background: "rgba(0,0,0,0.0)",
});

export default function Navbar(props) {
  const { initConnection, account, handleMode, DarkMode, provider, nTokens } =
    props;
  let nTokensFixed =
    nTokens == null ? 0 : (nTokens / 10 ** 18).toFixed(2).toString();
  const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
      <>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          PaperProps={{}}
        >
          <Typography sx={{ marginLeft: 5 }}>
            DarkMode
            <Switch onChange={handleMode} color="primary" />
          </Typography>

          {nTokens == null ? (
            <Typography fontSize={16}>Log-in first</Typography>
          ) : (
            <Typography fontSize={16} sx={{ marginRight: 5 }}>
              {nTokensFixed} $CLT
            </Typography>
          )}
          <List>
            {["Twitter", "Whitepaper", "Lottery"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index == 0 ? (
                      <Button
                        disableElevation
                        href="https://twitter.com/criptoluckyreal"
                        sx={{ color: "white", m: 3 }}
                      >
                        <Twitter />
                        <Typography sx={{ minWidth: 100 }}>
                          Twitter
                        </Typography>{" "}
                      </Button>
                    ) : (
                      <>
                        {index == 1 ? (
                          <Button
                            disableElevation
                            href="https://twitter.com/criptoluckyreal"
                            sx={{ color: "white", m: 3 }}
                          >
                            <Attachment />
                            <Typography sx={{ minWidth: 100 }}>
                              Whitepaper
                            </Typography>{" "}
                          </Button>
                        ) : (
                          <Button
                            disableElevation
                            href="https://twitter.com/criptoluckyreal"
                            sx={{ color: "white", m: 3 }}
                          >
                            <Celebration />
                            <Link
                              activeClass="active"
                              to="lottery"
                              spy={true}
                              smooth={true}
                            >
                              <Typography sx={{ minWidth: 100 }}>
                                To Lottery
                              </Typography>
                            </Link>
                          </Button>
                        )}
                      </>
                    )}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <Menu sx={{ color: "white" }} />
        </IconButton>
      </>
    );
  };

  const theme = useTheme();
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <Box>
          <NavbarPersonalizada elevation={0} position="fixed">
            <Toolbar>
              <Box sx={{ flexDirection: "row", display: "flex", flexGrow: 1 }}>
                <DrawerComponent />
                <IconButton sx={{ color: "white" }}>
                  <Celebration />
                </IconButton>
                <Typography variant="h6" component="div">
                  CryptoLucky
                </Typography>
              </Box>

              {account == null ? (
                <Button
                  sx={{ color: "orange", marginLeft: 4, border: 3 }}
                  onClick={initConnection}
                >
                  <Typography fontSize={16}>Log-in</Typography>
                </Button>
              ) : (
                <Typography>
                  ...{account.substring(account.length - 7)}
                </Typography>
              )}
            </Toolbar>
          </NavbarPersonalizada>
          <Offset />
        </Box>
      ) : (
        <Box>
          <NavbarPersonalizada
            elevation={0}
            position="fixed"
            sx={{ marginRight: 10 ,marginLeft:10  }}
          >
            <Toolbar>
              <Box sx={{ flexDirection: "row", display: "flex" }}>
                <IconButton sx={{ color: "white" }}>
                  <Celebration />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginRight: 4 }}
                >
                  CriptoLucky
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "Right",
                  textAlign: "center",
                }}
              >
                <Button
                  disableElevation
                  href="https://twitter.com/criptoluckyreal"
                  sx={{ color: "white", m: 3 }}
                >
                  <Twitter />
                  <Typography sx={{ minWidth: 100 }}>Twitter</Typography>{" "}
                </Button>
                <Button disableElevation sx={{ color: "white", m: 3 }}>
                  <Attachment />
                  <Typography sx={{ minWidth: 100 }}>WhitePaper</Typography>
                </Button>
                <Button disableElevation sx={{ color: "white", m: 3 }}>
                  <LocalActivity />
                  <Link
                    activeClass="active"
                    to="lottery"
                    spy={true}
                    smooth={true}
                  >
                    <Typography sx={{ minWidth: 100 }}>To Lottery</Typography>
                  </Link>
                </Button>
              </Box>
              {account == null ? (
                <Button
                  disableElevation
                  sx={{
                    color: "orange",
                    marginLeft: 4,
                    border: 2,
                    borderRadius: 6,
                  }}
                  onClick={initConnection}
                >
                  <img
                    sx={{ marginLeft: 2 }}
                    src={imageButton}
                    alt="my"
                    width={"20px"}
                  />

                  <Typography sx={{ margin: 0.5 }}>Connect Metamask</Typography>
                </Button>
              ) : (
                <>
                  {nTokens == null ? (
                    <Typography fontSize={16}>Log-in first</Typography>
                  ) : (
                    <Typography fontSize={16} sx={{ marginRight: 5 }}>
                      {nTokensFixed} $CLT
                    </Typography>
                  )}

                  <Typography>
                    ...{account.substring(account.length - 7)}
                  </Typography>
                </>
              )}
            </Toolbar>
          </NavbarPersonalizada>
          <Offset />
        </Box>
      )}
    </>
  );
}
