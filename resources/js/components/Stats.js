import React, { useState } from "react";
import { Popover, Typography, Box, makeStyles, withStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core/";
import { CanvasJSChart } from "canvasjs-react-charts";

const StyledTableCell = withStyles((theme) => ({
    head: {
        color: "#3B7903",
        fontFamily: ["Alegreya SC", "serif"].join(","),
        fontSize: 20,
        border: "none",
    },
    body: {
        color: "#5F4821",
        fontFamily: ["Alegreya SC", "serif"].join(","),
        fontSize: 17,
        border: "none",
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        // "&:nth-of-type(odd)": {
        // },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [createData("Won", 159, 6.0, 24, 4.0), createData("Lost", 237, 9.0, 37, 4.3)];

const useStyles = makeStyles({
    table: {
        // background: "transparent",
        border: "none",
    },
    popover: {
        pointerEvents: "none",
    },
});

export default function Stats() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const options = {
        height: 200,
        exportEnabled: true,
        animationEnabled: true,
        title: {
            // text: "",
        },
        data: [
            {
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 18, label: "Direct" },
                    { y: 49, label: "Organic Search" },
                    { y: 9, label: "Paid Search" },
                    { y: 5, label: "Referral" },
                    { y: 19, label: "Social" },
                ],
            },
        ],
    };

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Box paddingTop={9}>
                <Box display="flex">
                    <TableContainer>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <Typography className={classes.head} aria-owns={open ? "mouse-over-popover" : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                                        <StyledTableCell>Working Stats</StyledTableCell>
                                    </Typography>
                                    <Popover
                                        id="mouse-over-popover"
                                        className={classes.popover}
                                        classes={{
                                            paper: classes.paper,
                                        }}
                                        open={open}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        PaperProps={{
                                            style: { width: "100%" },
                                        }}
                                        onClose={handlePopoverClose}
                                        disableRestoreFocus
                                    >
                                        <Box display="flex">
                                            <Box width="50%">
                                                <TableContainer>
                                                    <Table className={classes.table} aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell>Criminal Recode</StyledTableCell>
                                                                <StyledTableCell align="right">Status</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <StyledTableRow key={row.name}>
                                                                    <StyledTableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Box>
                                            <Box width="50%">
                                                <CanvasJSChart
                                                    options={options}
                                                    /* onRef={ref => this.chart = ref} */
                                                />
                                            </Box>
                                        </Box>
                                    </Popover>
                                    <StyledTableCell align="right">Total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <Typography className={classes.head} aria-owns={open ? "mouse-over-popover" : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                                        <StyledTableCell>Working Stats</StyledTableCell>
                                    </Typography>
                                    <Popover
                                        id="mouse-over-popover"
                                        className={classes.popover}
                                        classes={{
                                            paper: classes.paper,
                                        }}
                                        open={open}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        PaperProps={{
                                            style: { width: "100%" },
                                        }}
                                        onClose={handlePopoverClose}
                                        disableRestoreFocus
                                    >
                                        <Box display="flex">
                                            <Box width="50%">
                                                <TableContainer>
                                                    <Table className={classes.table} aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell>Criminal Recode</StyledTableCell>
                                                                <StyledTableCell align="right">Status</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <StyledTableRow key={row.name}>
                                                                    <StyledTableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Box>
                                            <Box width="50%">
                                                <CanvasJSChart
                                                    options={options}
                                                    /* onRef={ref => this.chart = ref} */
                                                />
                                            </Box>
                                        </Box>
                                    </Popover>
                                    <StyledTableCell align="right">Total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box display="flex">
                    <TableContainer>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <Typography className={classes.head} aria-owns={open ? "mouse-over-popover" : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                                        <StyledTableCell>Working Stats</StyledTableCell>
                                    </Typography>
                                    <Popover
                                        id="mouse-over-popover"
                                        className={classes.popover}
                                        classes={{
                                            paper: classes.paper,
                                        }}
                                        open={open}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        PaperProps={{
                                            style: { width: "100%" },
                                        }}
                                        onClose={handlePopoverClose}
                                        disableRestoreFocus
                                    >
                                        <Box display="flex">
                                            <Box width="50%">
                                                <TableContainer>
                                                    <Table className={classes.table} aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell>Criminal Recode</StyledTableCell>
                                                                <StyledTableCell align="right">Status</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <StyledTableRow key={row.name}>
                                                                    <StyledTableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Box>
                                            <Box width="50%">
                                                <CanvasJSChart
                                                    options={options}
                                                    /* onRef={ref => this.chart = ref} */
                                                />
                                            </Box>
                                        </Box>
                                    </Popover>
                                    <StyledTableCell align="right">Total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <Typography className={classes.head} aria-owns={open ? "mouse-over-popover" : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                                        <StyledTableCell>Working Stats</StyledTableCell>
                                    </Typography>
                                    <Popover
                                        id="mouse-over-popover"
                                        className={classes.popover}
                                        classes={{
                                            paper: classes.paper,
                                        }}
                                        open={open}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        PaperProps={{
                                            style: {  width: "100%", minHeight: "50%" },
                                        }}
                                        onClose={handlePopoverClose}
                                        disableRestoreFocus
                                    >
                                        <Box display="flex">
                                            <Box width="50%">
                                                <TableContainer>
                                                    <Table className={classes.table} aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell>Criminal Recode</StyledTableCell>
                                                                <StyledTableCell align="right">Status</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <StyledTableRow key={row.name}>
                                                                    <StyledTableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Box>
                                            <Box width="50%">
                                                <CanvasJSChart
                                                    options={options}
                                                    /* onRef={ref => this.chart = ref} */
                                                />
                                            </Box>
                                        </Box>
                                    </Popover>
                                    <StyledTableCell align="right">Total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    );
}
