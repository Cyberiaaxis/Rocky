import React from "react";
import { number } from "prop-types";
import "../styles/ProgressBar.scss";
import { Box } from "@material-ui/core";


export default function ProgressBar(props) {

    const classname = (props.type) ? 'bar bar-'+ props.type : 'bar';

    return (
        <>
            <div>
                <Box className={classname} data-label={props.label}>
                    <Box
                        className="fill"
                        style={{
                            width: `${props.percentComplete}%`,
                            borderRadius: `${props.percentComplete === 100 ? "2px" : "2px 0 0 2px"}`,
                        }}
                    />
                </Box>
            </div>
        </>
    );
}

ProgressBar.propTypes = {
    percentComplete: number,
};

ProgressBar.defaultProps = {
    percentComplete: 20,
};
