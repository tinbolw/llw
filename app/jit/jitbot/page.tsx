'use client';

import {Header, textInputTypes, buttonTypes} from "@/app/ui/common";
import {useState} from "react";
import {askJit} from "@/app/lib/api/googleai/gai-actions"

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");

    async function askJitHandler() {
        setResult("...");
        setPrompt("");
        setResult(await askJit(prompt));
    }

    return (
        <main>
            {/*todo instead of using form, maybe make function get data from textbot and return, then use response to edit field*/}
            <Header pageTitle="Jitbot"/>
            <p className="flex justify-center md:text-2xl">Ask Jitbot jit!</p><br/>
            <div className="flex flex-col justify-center items-center">
                <textarea id="response" name="response"
                          className={`${textInputTypes.default} w-96 h-48 text-wrap`}
                          readOnly={true}
                          placeholder="Ask something jit-related" value={result}
                /><br/>
                {/*todo make input textarea with limit set to max prompt length*/}
                <input id="prompt" name="prompt" placeholder="Ask..."
                       className={`${textInputTypes.default} w-96 h-8`}
                       onChange={e => setPrompt(e.target.value)}
                       value={prompt}></input><br/>
                <button className={`${buttonTypes.hoverable} w-20 text-xl`} onClick={askJitHandler}>Ask</button>
            </div>
        </main>
    );
}
