import React from "react";

interface ComponentProps {
    current: any;
    total: number;
}

const Scorebox = ({ current, total }: ComponentProps) => {
    let progress = (current / total) * 100;

    return (
        <div className="quiz-scorebox">
            <div className="progress">
                <div
                    className="progress-bar"
                    style={{ width: progress + "%" }}
                ></div>
            </div>
        </div>
    );
};

export default Scorebox;
