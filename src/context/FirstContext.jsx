import { createContext } from "react";
// defination of context
// import → This keyword is used to bring in a module or function from another file or package.
// { createContext } → We are importing a specific function called createContext from React.
// createContext ->  It is a part of React’s Context API that allows us to create a global state.
// Using createContext, we can share data between components without passing props manually at each level.
export const FirstContext = createContext({
    firstName: "",
    LastName:"",
    otherData:"",
    combineData:()=>{},
    // export: This makes the FirstContext available for use in other files.
// const FirstContext: Declares a constant variable named FirstContext, which will store the context object created by createContext(...).
// = createContext({...}): Calls the createContext function and passes a default value (an object).
})