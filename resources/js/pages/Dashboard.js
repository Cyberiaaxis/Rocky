import React, { useState, useEffect, useRef } from "react";
import { makeStyles, Paper, Box, Button, Grid, Avatar } from "@material-ui/core";
import clsx from "clsx";
import ProgressBar from "../components/ProgressBar";
import "../styles/menuStyle.scss";
import Stats from "../components/Stats";
import Hof from "../components/Hof";
import Gym from "../components/Gym";
import Inventory from "../components/Inventory";
import Profile from "../components/Profile";
import { useAuth } from "../libraries/AuthContext";
// https://codesandbox.io/s/material-demo-forked-9ot1z?file=/menuStyle.css
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundImage: 'url("https://www.gstatic.com/webp/gallery/1.jpg")',
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
        color: "green",
        background: "linear-gradient(to left,#E4EE0D,#FC9500)",
        height: "4em",
        width: "13em",
    },
}));

const topMenuBar = [
    {
        label: "Home",
        href: "dashboard",
    },
    {
        label: "Profile",
        href: "profile",
    },
    {
        label: "Inventory",
        href: "inventory",
    },
    {
        label: "Products",
        children: [
            {
                label: "Laptops",
                children: [
                    {
                        label: "Hall of Fame",
                        href: "hof",
                    },
                    {
                        label: "business",
                        href: "business",
                    },
                ],
            },
            {
                label: "Gym",
                href: "gym",
            },
            {
                label: "Printers",
                href: "printers",
            },
        ],
    },
    {
        label: "Contact",
        href: "contact",
    },
];



const Dashboard = () => {
    const [page, setPage] = useState("dashboard");
    const classes = useStyles();



    const MenuItem = ({ item }) => {
        return (
            <li>
                <a href={'#'} onClick={() => handleClick(item.href)}>
                    {item.label} {!!item.children}
                </a>
                {item.children && (
                    <ul className="dropdown">
                        {item.children.map((child, idx) => (
                            <MenuItem item={child} key={idx} />
                        ))}
                    </ul>
                )}
            </li>
        );
    };
    
    const Menu = ({ items }) => {
        return (
            <nav className="hoverMenu">
                <ul>
                    {items.map((item, index) => (
                        <MenuItem key={index} item={item} />
                    ))}
                </ul>
            </nav>
        );
    };

    const handleClick = (event) => {
        if(event !== undefined){
            setPage(event);   
        }
    };

    const pages = {
        hof: <Hof />,        
        inventory: <Inventory />,
        home: <Stats />,
        profile: <Profile />,
        account: "account",
        logout: "Logout",
        stats: <Stats />,
        explore: null,
        city: null,
        market: null,
        crimes: null,
        gym: <Gym />,
    };
console.log(pages[page]);
    return (
        <div className={classes.root}>
            <Grid container>
                {/* Header */}
                <Grid item xs={12}>
                    <Box display="flex">
                        <Box paddingTop={1} flexGrow={1}>
                            <Button className={classes.startButton} variant="contained" color="primary" size="large">
                                Start
                            </Button>
                        </Box>
                        <Button>
                            Energy: <ProgressBar percentComplete={100} />
                        </Button>
                        <Button>
                            Will: <ProgressBar percentComplete={50} />
                        </Button>
                        <Button>
                            HP: <ProgressBar percentComplete={75} />
                        </Button>
                        <Box mt={2} className="Header">
                            <Menu
                                items={topMenuBar}
                            />
                        </Box>
                    </Box>
                </Grid>
                {/* AsideLeft */}
                <Grid item xs={2} sm={1} className={clsx(classes.sideBarLeft, "AsideLeft")}>
                    <Menu
                        items={topMenuBar}
                    />
                </Grid>
                {/* Main */}
                <Grid item xs={8} sm={10}>
                    <Paper margin={0} padding={0} className={classes.paper}>
                        <main>
                            {pages[page]}
                        </main>
                    </Paper>
                </Grid>
                {/* AsideRight */}
                <Grid item xs={1} sm={1} className={clsx(classes.sideBarRight, "AsideRight")}>
                    <Menu
                        items={topMenuBar}
                    />
                </Grid>
                {/* Footer */}
                <Grid item xs={12} className="Dashboardfooter">
                    <Menu
                        items={topMenuBar}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
