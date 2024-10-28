import React, {useState} from "react"

const Joke = (props) => {
    const [isShown, setIsShown] = useState(false)

    function toggle() {
        console.log(isShown)
        setIsShown(prevState => !prevState)
    }

    return (
        <article className="joke-card">
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
        </article>
    );
};

export default Joke;
