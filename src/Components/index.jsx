import { useState, useEffect, useRef } from "react";
import "./style.css";

export default function HowMany() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const textAreaRef = useRef();
    const [copySuccess, setCopySuccess] = useState('copy');
    const changeHandler = (event) => {
        setText(event.target.value);
    };
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand("copy");
        e.target.focus();
        setCopySuccess("copied");
       setTimeout(() => {setCopySuccess('copy')}, 3000)
    }
    useEffect(() => {
        const words = text.split(" ");
        let count = 0;
        words.forEach((word) => {
            if (word.trim() !== "") {
                count++;
            }
        });
        setCount(count);
    }, [text]);

    return (
        <div className="box">
            <h2 className="brand">Word counter</h2>
            <div>
        <textarea
            value={text}
            onChange={changeHandler}
            className="textarea"
            ref={textAreaRef}
        >

        </textarea>

                <div className="box-child">
                    <p className="count">Total words: {count}</p>
                    <button onClick={copyToClipboard} className="btn">

                        {copySuccess}
                    </button>
                </div>
            </div>
            <h1 className="footer">
                {" "}
                <a href="https://t.me/abdurahmon_official" target="_blank"
                   rel="noreferrer">Bekzotovich-12</a>
            </h1>
            <p align="center"> <img src="https://komarev.com/ghpvc/?username=abdurahmon27&label=Profile%20views&color=0e75b6&style=flat" alt="abdurahmon27" /> </p>
        </div>
    );
}

