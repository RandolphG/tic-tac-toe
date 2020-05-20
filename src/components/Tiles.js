import React from "react";
import { Square } from "../GlobalStyles";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Tiles = (props) => {
  return (
    <Square id={`box-${props.index}`} onClick={props.onClick}>
      {props.value}
    </Square>
  );
};
