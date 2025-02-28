import { createContext } from "react";
// import {FirstContext} from "react";

// Definition of the context
const FirstContext = createContext({
    firstName: "",
    lastName: "",
    otherData: "",
    combineData: () => {},

});

// Exporting the context
export default FirstContext;
