'use client';

import {useState, useEffect} from 'react';
import Typewriter from "@/app/ui/typewriter";
import localFont from "next/font/local";

const Hack = localFont({src: "../../fonts/Hack-Regular.ttf"});

/**
 * A mock terminal element. Emulates running a command as a user and having an output.
 * @param user The user running the "command"
 * @param command The name of the "command"
 * @param commandResult The output of the "command"
 * @constructor
 */
export default function MockTerminal({user, command, commandResult}: { user: string, command: string, commandResult: string }) {
    const [descriptionHidden, setDescriptionHidden] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setDescriptionHidden(false);
        }, 1700);
    }, []);

    return (
        // todo can come back and redesign this at a future date
        <div className={`w-3/5 bg-black rounded-md px-3 py-1 min-h-screen`}>
            <div className={`text-2xl ${Hack.className} flex flex-row space-x-2`}>
                <p>
                    {`${user}@llw > `}
                </p>
                <Typewriter text={command}/>
            </div>
            {
                descriptionHidden ? null : <div><br/>
                    <p className={`text-2xl ${Hack.className}`}>{commandResult}</p>
                </div>
            }
        </div>
    )
}