import React from "react";

interface ComponentProps {
    question: any;
    setChecked: any;
    onChoiceChange: any;
    exiting: boolean;
    totalQuestions: number;
    image: any;
    isEven: any;
    checked: null;
}

const CurrentQuestions = ({
    question,
    setChecked,
    onChoiceChange,
    exiting,
    totalQuestions,
    image,
    isEven,
    checked,
}: ComponentProps) => {
    const handleChange = (event: any) => {
        let index = parseInt(event.target.value);
        let selectedChoice = question.answers[index]; // Get the selected choice object
        setChecked(index); // Update the checked state in the parent component

        setTimeout(() => {
            onChoiceChange(selectedChoice); // Submit the entire choice object after a delay
        }, 300);
    };

    return (
        <div className="quiz-form">
            <div
                className={`quiz-form-inner ${
                    exiting === true &&
                    question.questionNumber !== totalQuestions
                        ? "exiting"
                        : ""
                }`}
            >
                <img
                    src={image}
                    alt={`Image for Question ${question.questionNumber}`}
                />
                <p>{question.question}</p>
                <ul
                    className={`list-group ${
                        isEven(question.questionNumber) ? "" : ""
                    }`}
                >
                    {question.answers.map((choice: any, index: number) => (
                        <li
                            className={
                                checked === choice.answerValue
                                    ? "list-group-item checked"
                                    : "list-group-item"
                            }
                            key={choice.id}
                        >
                            <label>
                                {choice.answer}
                                <input
                                    type="radio"
                                    onChange={handleChange}
                                    name={question.questionNumber}
                                    value={index}
                                    checked={checked === choice.answerValue}
                                    required
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CurrentQuestions;
