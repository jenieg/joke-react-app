const Joke = (props) => {
    return (
        <article className="joke-card">
            <p className="setup">{props.setup}</p>
            <p className="punchline">{props.punchline}</p>
        </article>
    );
};

export default Joke;
