import React from "react";

interface ComponentProps {
    onStart: any;
    image: any;
    exiting: boolean;
}

const Intro = ({ onStart, image, exiting }: ComponentProps) => {
    return (
        <div className={`quiz-intro ${exiting === true ? "exiting" : ""}`}>
            <img src={image} />
            <h4>Getting Started with TypeScript</h4>
            <p>
                Take this quick quiz to test your knowledge of TypeScript, from
                basic syntax to advanced concepts!
            </p>
            <span>
                <b>Time required:</b> 3 mins
            </span>
            <button type="submit" className="button" onClick={onStart}>
                Get started
            </button>
        </div>
    );
};

export default Intro;
