
import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, SetInput] = useState("");
    const [RecentPrompt, setRecentPrompt] = useState("");
    const [PreviousPrompt, setPriviousPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delyPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const NewChat = () => {
        setloading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("");
        setloading(true);
        setShowResult(true);
        setRecentPrompt(input); 
        setPriviousPrompt((prevPrompts) => [...prevPrompts, input]); // Corrected this line
        
        const response = await run(input);
        let responseArray = response.split("**");
        let newResponse = ""; 

        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = response.split("*").join("<br/>");
        let newResponseArray = newResponse2.split(" ");

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delyPara(i, nextWord + " ");
        }

        setloading(false);
        SetInput("");
    };

    const contextValue = {
        PreviousPrompt,
        setPriviousPrompt,
        onSent,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        SetInput,
        NewChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
