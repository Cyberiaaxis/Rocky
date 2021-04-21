import React, { useState, useEffect, useRef } from "react";
import { MenuItem, makeStyles, withStyles, Paper, Box, Button, Grid, MenuList, Badge, Avatar, Popover } from "@material-ui/core";
import ProgressBar from "../components/ProgressBar";
import Stats from "../components/Stats";

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "$ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: 'url("https://www.gstatic.com/webp/gallery/1.jpg")',
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
    },
    paper: {
        // padding: theme.spacing(1),
        // textAlign: "center",
        background: "transparent",
        height: "82vh",
        overflow: "auto",
        width: "100%",
    },
    sideBarRight: {
        textAlign: "right",
    },
    sideBarLeft: {
        textAlign: "left",
    },
    paper: {
        background: "transparent",
        height: "82vh",
        overflow: "auto",
        width: "100%",
    },
    startButton: {
        color: 'green',
        background: 'linear-gradient(to left,#E4EE0D,#FC9500)',
        height: '4em',
        width:'13em',
  },
}));

const Header = ({ section, setSection }) => {
    const [value, setvalue] = useState(0);
    const [current, setCurrent] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setCurrent(null);
    };

    const handleClick = (e, _popno) => {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
        setCurrent(e.currentTarget.getAttribute("aria-controls"));
        setSection(e.currentTarget.getAttribute("href"));
    };

    const handleChange = (event, value) => {
        setvalue(value);
    };

    return (
        <>
            <Box display="flex">
                <Box paddingTop={1} flexGrow={1}>
                    <Button className={classes.startButton} variant="contained" color="primary" size="large">
                        Start
                    </Button>
                </Box>
                <Box display="flex" margin={1.9}>
                        <Box marginRight={1}>Energy</Box>
                        <Box marginTop={1.2}><ProgressBar variant="determinate" value={50} type="lg" /></Box>
                </Box>
                <Box display="flex" margin={1.9}>
                        <Box marginRight={1}>Will</Box>
                        <Box marginTop={1.2}><ProgressBar percentComplete={75} /></Box>
                </Box>
                <Box display="flex" margin={1.9}>
                        <Box marginRight={1}>HP</Box>
                        <Box marginTop={1.2}><ProgressBar percentComplete={75} /></Box>
                </Box>
                <Box p={1}>
                    <Button mx="auto" aria-controls="simple-menu"  aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        Nothing
                    </Button>
                </Box>

                <Box p={1}>
                    <Button mx="auto" aria-controls="simple-menu2"  aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        Open Menu
                    </Button>
                </Box>
                <Box p={1}>
                    <Button mx="auto" aria-controls="simple-menu3"  aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        Open Menu
                    </Button>
                </Box>
                <Box paddingBottom={1}>
                    <Button aria-controls="simple-menu" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        <StyledBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </StyledBadge>
                    </Button>
                </Box>
            </Box>
            <Popover id="menu2Popover" open={anchorEl !== null} onClose={handlePopoverClose} anchorEl={anchorEl}>
                {current === "start-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Crime</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem href="profile" onClick={handleClick}>Profile</MenuItem>
                        <MenuItem href="stats" onClick={handleClick}>Personal Stats</MenuItem>
                        <MenuItem href="logout" onClick={handleClick}>Logout</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu2" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Fight</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu3" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Bounty</MenuItem>
                        <MenuItem>Non Bounty</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu4" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Tab 5 - Submenu 1</MenuItem>
                        <MenuItem>Tab 5 - Submenu 2</MenuItem>
                    </MenuList>
                )}
            </Popover>
        </>
    );
};

const AsideLeft = ({ section, setSection }) => {
    const [value, setvalue] = useState(0);
    const [current, setCurrent] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const handlePopoverClose = () => {
        setAnchorEl(null);
        setCurrent(null);
    };

    const handleClick = (e, _popno) => {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
        setCurrent(e.currentTarget.getAttribute("aria-controls"));
        setSection(e.currentTarget.getAttribute("href"));
    };

    const handleChange = (event, value) => {
        setvalue(value);
    };

    return (
        <>
            <Box marginBottom={5}>
                <Button aria-controls="location" className={classes.startButton} variant="contained" color="primary" size="large">
                    Location
                </Button>
            </Box>
            <Box marginBottom={5}>
                <Button mx="auto" aria-controls="simple-menu" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                    Open Menu
                </Button>
            </Box>
            <Box marginBottom={5}>
                <Button mx="auto" aria-controls="simple-menu2" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                    Open Menu
                </Button>
            </Box>
            <Box marginBottom={5}>
                <Button mx="auto" aria-controls="simple-menu3" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                    Open Menu
                </Button>
            </Box>
            <Popover id="menu2Popover" open={anchorEl !== null} onClose={handlePopoverClose} anchorEl={anchorEl}>
                {current === "start-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Crime</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Travel</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu2" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Fight</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu3" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Bounty</MenuItem>
                        <MenuItem>Non Bounty</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu4" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Tab 5 - Submenu 1</MenuItem>
                        <MenuItem>Tab 5 - Submenu 2</MenuItem>
                    </MenuList>
                )}
            </Popover>
        </>
    );
};

const AsideRight = ({ section, setSection }) => {
    const [value, setvalue] = useState(0);
    const [current, setCurrent] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setCurrent(null);
    };

    const handleClick = (e, _popno) => {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
        setCurrent(e.currentTarget.getAttribute("aria-controls"));
        setSection(e.currentTarget.getAttribute("href"));
    };

    const handleChange = (event, value) => {
        setvalue(value);
    };

    return (
        <>
            <Box marginBottom={5} marginTop={5}>
                <Button aria-controls="start-menu" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                    Start
                </Button>
            </Box>
            <Box marginBottom={5}>
                <Button mx="auto" aria-controls="simple-menu" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                    Open Menu
                </Button>
            </Box>
            <Box marginBottom={5}>
                <Button mx="auto" aria-controls="simple-menu2" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                    Open Menu
                </Button>
            </Box>
            <Box marginBottom={5}>
                <Button mx="auto" aria-controls="simple-menu3" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                    Open Menu
                </Button>
            </Box>
            <Popover id="menu2Popover" open={anchorEl !== null} onClose={handlePopoverClose} anchorEl={anchorEl}>
                {current === "start-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Crime</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Travel</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu2" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Fight</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu3" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Bounty</MenuItem>
                        <MenuItem>Non Bounty</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu4" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Tab 5 - Submenu 1</MenuItem>
                        <MenuItem>Tab 5 - Submenu 2</MenuItem>
                    </MenuList>
                )}
            </Popover>
        </>
    );
};

const Main = ({ section }) => {
    let page;

    switch (section) {
        case "stats":
            page = <Stats />;
            break;
        case "explore":
            page = "Explore";
            break;
        // case "profile":
        //     page = <Profile />;
        //     break;
        case "city":
            page = "city";
            break;
        case "market":
            page = "Market";
            break;
        default:
            page = <Stats />;
            break;
    }

    return (
        <main>
            <h1>{page}</h1>
        </main>
    );
};

const Footer = ({ section, setSection }) => {
    const [value, setvalue] = useState(0);
    const [current, setCurrent] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setCurrent(null);
    };

    const handleClick = (e, _popno) => {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
        setCurrent(e.currentTarget.getAttribute("aria-controls"));
        setSection(e.currentTarget.getAttribute("href"));
    };

    const handleChange = (event, value) => {
        setvalue(value);
    };

    return (
        <>
            <Box display="flex">
                <Box p={1} flexGrow={1}>
                    <Button aria-controls="start-menu" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        Start
                    </Button>
                </Box>
                <Box p={1}>
                    <Button mx="auto" aria-controls="simple-menu" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        Open Menu
                    </Button>
                </Box>
                <Box p={1}>
                    <Button mx="auto" aria-controls="simple-menu2" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        Open Menu
                    </Button>
                </Box>
                <Box p={1}>
                    <Button mx="auto" aria-controls="simple-menu3" color="secondary" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                        Open Menu
                    </Button>
                </Box>
            </Box>
            <Popover id="menu2Popover" open={anchorEl !== null} onClose={handlePopoverClose} anchorEl={anchorEl}>
                {current === "start-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Crime</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Travel</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu2" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Fight</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu3" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Bounty</MenuItem>
                        <MenuItem>Non Bounty</MenuItem>
                    </MenuList>
                )}
                {current === "simple-menu4" && (
                    <MenuList onMouseLeave={handlePopoverClose}>
                        <MenuItem>Tab 5 - Submenu 1</MenuItem>
                        <MenuItem>Tab 5 - Submenu 2</MenuItem>
                    </MenuList>
                )}
            </Popover>
        </>
    );
};

export default function Dashboard() {
    const classes = useStyles();
    const [section, setSection] = useState("home");

    return (
        <div className={classes.root}>
            <Grid container>
                {/* Header */}
                <Grid item xs={12}>
                    <Header {...{ section, setSection }}/>
                </Grid>
                {/* AsideLeft */}
                <Grid item xs={2} sm={1} className={classes.sideBarLeft}>
                    <AsideLeft {...{ section, setSection }}/>
                </Grid>
                {/* Main */}
                <Grid item xs={8} sm={10}>
                    <Paper margin={0} padding={0} className={classes.paper}>
                        <Main section={section} />
                    </Paper>
                </Grid>
                {/* AsideRight */}
                <Grid item xs={1} sm={1} className={classes.sideBarRight}>
                    <AsideRight {...{ section, setSection }}/>
                </Grid>
                {/* Footer */}
                <Grid item xs={12}>
                    <Footer {...{ section, setSection }}/>
                </Grid>
            </Grid>
        </div>
    );
}
