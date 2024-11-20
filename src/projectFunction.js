import React from "react";
import html from "./tech Stacks/html.png";
import css from "./tech Stacks/css.png";
import javascript from "./tech Stacks/javascript.png";
import react from "./tech Stacks/react.png";
import nodejs from "./tech Stacks/nodejs.png";

import py from "./tech Stacks/python.png";
import pandas from "./tech Stacks/pandas.png";
import numpy from "./tech Stacks/numpy.png";
import tensorflow from "./tech Stacks/tensorflow.png";

import swift from "./tech Stacks/swift.png";

import mysql from "./tech Stacks/mysql.png";
import ejs from "./tech Stacks/ejs.png";
import mongodb from "./tech Stacks/mongodb.png";

function projectFunction(tech) {
  switch (tech) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "nodejs":
      return nodejs;
    case "python":
      return py;
    case "pandas":
      return pandas;
    case "numpy":
      return numpy;
    case "tensorflow":
      return tensorflow;
    case "swift":
      return swift;
    case "mysql":
      return mysql;
    case "ejs":
      return ejs;

    case "mongodb":
      return mongodb;

    default:
      return ""; // Return an empty string for unknown tech
  }
}

export default projectFunction;
