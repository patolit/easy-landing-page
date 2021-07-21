import * as React from "react";

const classes = require("./Backdrop.module.css");

interface BackDropProps {
  show: boolean;
  clicked: () => void;
}

const Backdrop = (props: BackDropProps) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
