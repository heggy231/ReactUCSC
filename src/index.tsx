import * as React from "react";
import * as ReactDOM from "react-dom";

import Greet from "./greet"; // Greet is set to de

ReactDOM.render(
    <Greet
        firstName = "Jak"
        lastName = "Jones"
    />,
    document.getElementById('app')
);