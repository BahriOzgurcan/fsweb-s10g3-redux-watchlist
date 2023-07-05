import { useSelector } from "react-redux";

export  const myLogger = store => next => action => {
    console.log("Loggerdan selam! Suan elimizde neler var:", store.getState());
    console.log("Actionimiz budur:", action);
    const result = next(action);
    console.log("Gorusuruz! Sonucumuz:", store.getState());
    return result;
}