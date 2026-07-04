"use client";

import { textInputTypes, buttonTypes } from "@/app/ui/common";
import { useState } from "react";
import { askJit } from "@/app/lib/api/googleai/gai-actions";
import { TitledPage } from "@/app/ui/titledpage";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  async function askJitHandler() {
    setResult("...");
    setPrompt("");
    setResult(await askJit(prompt));
  }

  const title = "Jitbot";
  const description = "Ask Jitbot jit!";
  return (
    <TitledPage title={title} description={description} backButton={true}>
      <div className="flex flex-col justify-center items-center">
        <textarea
          id="response"
          name="response"
          className={`${textInputTypes.default} w-96 h-48 text-wrap`}
          readOnly={true}
          placeholder="Ask something jit-related"
          value={result}
        />
        <br />
        {/*todo make input textarea with limit set to max prompt length*/}
        <input
          id="prompt"
          name="prompt"
          placeholder="Ask..."
          className={`${textInputTypes.default} w-96 h-8`}
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        ></input>
        <br />
        <button
          className={`${buttonTypes.hoverable} w-20 text-xl`}
          onClick={askJitHandler}
        >
          Ask
        </button>
      </div>
    </TitledPage>
  );
}
