import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {
    makeStyles,
} from "@material-ui/core";
import {addZeros} from "../utils/numberFormat"
import colors from "../constants/colors"

const Block = ({attribute}) => {
    const [value, setValue] = useState({});
    useEffect(() => {
        setValue(attribute)
    }, [attribute])
    const {index, data} = value;
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <span className={classes.indexContainer}>{addZeros(index, 3)}</span>
            <span className={classes.dataContainer}>{data}</span>
        </div>
    )
}

Block.propTypes = {
    attribute: PropTypes.shape({
        index: PropTypes.number,
        data: PropTypes.string
    }).isRequired
}


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        padding: "8px",
        margin: "2px",
        backgroundColor: colors.contentBackground,
        width: "95%",
        fontWeight: "400 !important",
    },
    indexContainer: {
        color: colors.primary,
        fontSize: theme.typography.pxToRem(12),
    },
    dataContainer: {
        color: colors.text,
        fontSize: theme.typography.pxToRem(14),
    }
}));
export default Block;