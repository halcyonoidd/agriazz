import React, { useContext } from "react";
import { Link, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";
import { Logo } from "./Logo";
import { ThemeContext } from "../theme/ThemeProvider";

const useStyles = makeStyles((theme) => ({
    logoLink: {
        width: "84px",
        height: "46px",
        position: "absolute",
        top: theme.spacing(6),
        left: theme.spacing(6),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease",
        "& img": {
            transition: "filter 0.2s ease",
        },
        "&:hover": {
            transform: "scale(1.04)",
        },
    },
    light: {
        "& img": {
            filter: "invert(1)",
        },
    },
}));

export const LogoLink = () => {
    const classes = useStyles();
    const { theme } = useContext(ThemeContext);

    return (
        <Tooltip
            title={Resume.basics.name}
            placement="right"
            TransitionComponent={Zoom}
        >
            <Link
                variant="h6"
                href={Resume.basics.url}
                underline="none"
                color="inherit"
                noWrap
                className={`${classes.logoLink} ${theme === "light" ? classes.light : ""}`}
            >
                <Logo alt={`${Resume.basics.name} logo`} />
            </Link>
        </Tooltip>
    );
};
