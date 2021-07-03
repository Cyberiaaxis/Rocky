import React, { useState, useEffect, useRef } from "react";
import { makeStyles, withStyles, Paper, Box, Button, Grid, MenuList, Badge, Avatar, Popover } from "@material-ui/core";
import ProgressBar from "../components/ProgressBar";
import  "../styles/menuStyle.scss";
import Stats from "../components/Stats";

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
      href: "#"
    },
    {
      label: "About",
      href: "#"
    },
    {
      label: "Products",
      children: [
        {
          label: "Laptops",
          children: [
            {
              label: "gaming",
              href: "#"
            },
            {
              label: "business",
              href: "#"
            }
          ]
        },
        {
          label: "Monitors",
          href: "#"
        },
        {
          label: "Printers",
          href: "#"
        }
      ]
    },
    {
      label: "Contact",
      href: "#"
    }
  ];
  
  const MenuItem = ({ item }) => {
    console.log(item);
    return (
      <li>
        <a href={item.href}>
          {item.label} {!!item.children && <span>&rarr;</span>}
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
  }
  
  const Menu = ({ items }) => {
    console.log(items);
    return (
      <nav className="hoverMenu">
        <ul>
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    );
  }

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState("home");
    const classes = useStyles();

    // const handleClick = (event, value) => {
    //     if (anchorEl !== event.currentTarget) {
    //         setAnchorEl(event.currentTarget);
    //     }
    // };

    // const handleClose = (value) => {
    //     setPage(value);
    //     setAnchorEl(null);
    // };

    const pages = {
        "profile": <Stats />,
        "account": "account",
        "logout": "Logout",
        "stats": <Stats />,
        "explore": null,
        "city": null,
        "market": null,
        "crimes": null,
        "hof": null,
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
                        <Button>
                            <Menu
                                    items={topMenuBar}
                                    // openOnHover={true}
                                    // onSelected={handleSelected}
                            />
                        </Button>

                    </Box>
                </Grid>
                {/* AsideLeft */}
                <Grid item xs={2} sm={1} className={classes.sideBarLeft}>
                    {/* <Box mt={10}>
                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
                            </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box mt={10}>
                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
                            </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box mt={10}>

                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
                            </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box>

                    <Box mt={10}>

                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
                </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box> */}

                </Grid>
                {/* Main */}
                <Grid item xs={8} sm={10}>
                    <Paper margin={0} padding={0} className={classes.paper}>
                        <main>
                            <h1>{pages[page]}</h1>
                        </main>
                    </Paper>
                </Grid>
                {/* AsideRight */}
                <Grid item xs={1} sm={1} className={classes.sideBarRight}>
                    {/* <Box mt={10}>
                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
        </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box mt={10}>
                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
            </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box mt={10}>

                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
            </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box>

                    <Box mt={10}>

                        <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
            </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box> */}

                </Grid>
                {/* Footer */}
                <Grid item xs={12}>
                    {/* <Box display="flex">
                        <Button aria-owns={anchorEl ? "bottom-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
                </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                            id="bottom-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                        <Button aria-owns={anchorEl ? "bottom-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
                </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                        <Button aria-owns={anchorEl ? "bottom-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Open Menu
                </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                            id="bottom-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                        <Button aria-owns={anchorEl ? "bottom-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
                            Local Manu
                        </Button>
                        <Menu
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                            id="bottom-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={() => handleClose("profile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose("account")}>My Account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Box> */}
                </Grid>
            </Grid>
        </div>
    );

}

export default Dashboard;