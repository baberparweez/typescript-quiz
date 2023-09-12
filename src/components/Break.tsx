import React from "react";

interface ComponentProps {
    onNext: any;
    contentType: any;
    image: any;
    content: any;
    author: any;
    exiting: any;
}

const Break = ({
    onNext,
    contentType,
    image,
    content,
    author,
    exiting,
}: ComponentProps) => {
    return (
        <div className={`quiz-break ${exiting === true ? "exiting" : ""}`}>
            <img src={image} />
            {contentType === "quote" ? (
                <span className="quote-mark">“</span>
            ) : (
                <span className="did-you-know">Did you know...</span>
            )}
            <p>{content}</p>
            {contentType === "quote" ? (
                <>
                    <span className="author">
                        <b>{author}</b>
                    </span>
                </>
            ) : (
                ""
            )}
            <button type="submit" className="button" onClick={onNext}>
                Continue
            </button>
        </div>
    );
};

export default Break;
