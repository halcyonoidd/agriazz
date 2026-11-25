import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    image: {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
}));

export const Logo = ({ alt }) => {
    const classes = useStyles();

    return (
        <img
            src={`${process.env.PUBLIC_URL}/logoaz.png`}
            alt={alt}
            className={classes.image}
        />
    );
};
