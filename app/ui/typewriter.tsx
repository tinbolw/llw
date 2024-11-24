'use client';
import {useState, useEffect} from 'react';

/**
 * A typing animation for text using react libraries. Currently not too good.
 * @param props
 * @constructor
 */
export default function Typewriter(props: { text: string }) {
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState('');

    // todo fix this garbage
    // this works, but for reasons outside of my current understanding, everything inside setTextIndex runs twice per
    // call
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index == props.text.length) return;
            setTextIndex(c => {
                    if (index % 1 == 0) setText(t => t + props.text[c]);
                    index += 0.5;
                    return c + 1;
                }
            );
        }, 1500 / props.text.length);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <p>{text}</p>
    );
}