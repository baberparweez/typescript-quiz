import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Components
import Styles from "./components/Styles";
import Intro from "./components/Intro";
import Break from "./components/Break";
import CurrentQuestions from "./components/CurrentQuestions";
import Scorebox from "./components/Scorebox";
import ResultsLoading from "./components/ResultsLoading";
import Results from "./components/Results";
import QUESTIONS from "./components/Questions";

// Assets
import EllipseHome from "./assets/ellipse-home.svg";
import EllipseLightbulb from "./assets/ellipse-lightbulb.svg";
import EllipseChat from "./assets/ellipse-chat.svg";
import Image1 from "./assets/image-1.png";
import Image2 from "./assets/image-2.png";
import Image3 from "./assets/image-3.png";
import Image4 from "./assets/image-4.png";
import Image5 from "./assets/image-5.png";
import Image6 from "./assets/image-6.png";
import Image7 from "./assets/image-7.png";
import Image8 from "./assets/image-8.png";
import Image9 from "./assets/image-9.png";
import Image10 from "./assets/image-10.png";
import ResultsImage from "./assets/results.png";
import LoadingAnimation from "./assets/loading.gif";

// Check if styles exists - if yes, append to head tag
const existingStyleTag = document.getElementById("typeOfCareStyles");
if (!existingStyleTag) {
    const head = document.head || document.getElementsByTagName("head")[0]; // Get document head tag
    const styleTag = document.createElement("style"); // Create style tag
    styleTag.id = "typeOfCareStyles"; // Apply ID to created style tag
    styleTag.innerHTML = Styles; // Add styles to created style tag
    head.appendChild(styleTag); // Append style tag to page head tag
}

const App = () => {
    const [questions] = useState<any>(QUESTIONS); // Get questions JSON
    const [scores, setScores] = useState<number[]>([]); // Scores for each question
    const [answers, setAnswers] = useState<string[]>([]); // Answers for each question
    const [current, setCurrent] = useState<number>(1); // Current quiz item state
    const [hasStarted, setHasStarted] = useState<boolean>(false); // State for quiz start
    const [exiting, setExiting] = useState<boolean>(false); // State for exit class on each component
    const [checked, setChecked] = useState<null>(null); // State for checked inputs for each question
    const [direction, setDirection] = useState<string>("forward"); // // State of transition direction
    const [isLoading, setIsLoading] = useState<boolean>(false); // // State of Results Loading component
    const [isResetting, setIsResetting] = useState<boolean>(false); // // State of resetting app
    const [animationFinished, setAnimationFinished] = useState<boolean>(false); // State of loading animation
    const [showingResults, setShowingResults] = useState<boolean>(false); // State of showing Results
    const currentItem: any = questions[current - 1]; // Current quiz item
    const currentType: any = currentItem ? currentItem.type : null; // Current quiz item: break or question?
    const isLastItem: any = current === questions.length; // Final question
    const images: any[] = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
    ]; // Image array for each question
    const totalScore: number = scores.reduce((acc, curr) => acc + curr, 0);
    const questionCountBeforeCurrent: any = questions
        .slice(0, current)
        .filter((item: any) => item.type === "question").length; // Count only questions not Breaks
    const transitionSpeed: number = 200; // Transition between each transition fade
    const fadeSpeed: number = 250; // Transition between each opacity fade
    const isEven: any = (num: number) => num % 2 === 0;

    // Function to preload images
    const preloadImages = (imageArray: any) => {
        imageArray.forEach((src: string) => {
            const img = new Image();
            img.src = src;
        });
    };

    // Preload images array
    useEffect(() => {
        const imagesToPreload: any[] = [
            EllipseHome,
            EllipseLightbulb,
            EllipseChat,
            Image1,
            Image2,
            Image3,
            Image4,
            Image5,
            Image6,
            Image7,
            Image8,
            Image9,
            Image10,
            ResultsImage,
            LoadingAnimation,
        ];
        preloadImages(imagesToPreload);
    }, []);

    // Start of app
    const handleStart = () => {
        setExiting(true);

        setTimeout(() => {
            setHasStarted(true);
            setExiting(false);
        }, transitionSpeed);
    };

    const handleNext = () => {
        setDirection("forward");
        setExiting(true);

        setTimeout(() => {
            setCurrent((prevCurrent) => prevCurrent + 1);
            setExiting(false);
        }, transitionSpeed);
    };

    const handlePrevious = () => {
        setDirection("backward");
        setExiting(true);

        // Delay the state change until after the animation completes
        setTimeout(() => {
            setCurrent((prevCurrent) => prevCurrent - 1);
            setScores((prevScores: any[]) => {
                const newScores = [...prevScores];
                newScores.pop();
                return newScores;
            }); // Selected answer scores removed from array
            setAnswers((prevAnswers: any[]) => {
                const newAnswers = [...prevAnswers];
                newAnswers.pop();
                return newAnswers;
            }); // Selected answers removed from array
            setChecked(null);
            setExiting(false);
            setAnimationFinished(false);
        }, transitionSpeed);
    };

    const handleReset = () => {
        setIsResetting(true);

        setHasStarted(false);
        setAnimationFinished(false);
        setDirection("forward");
        setTimeout(() => {
            setCurrent(1);
            setScores([]);
            setAnswers([]);
            setChecked(null);
            setExiting(false);
            setIsResetting(false);
        }, 300);
    };

    const handleAnswer = (choice: any) => {
        setDirection("forward");
        setExiting(true);

        // Delay the state change until after the animation completes
        setTimeout(() => {
            setCurrent((prevCurrent) => prevCurrent + 1);
            setScores((prevScores: any[]) => [
                ...prevScores,
                Number(choice.answerValue),
            ]); // Selected answer scores pushed to array
            setAnswers((prevAnswers: any[]) => [
                ...prevAnswers,
                { [currentItem.question]: choice.answer },
            ]); // Selected answers pushed to array
            setChecked(null);
            setExiting(false);
            setDirection("forward");
        }, transitionSpeed);
    };

    const handleAnimationEnd = () => {
        setDirection("forward");
        setIsLoading(false);
        setAnimationFinished(true);
        setShowingResults(true);
    };

    return (
        <main
            className={`quiz-box ${direction} ${
                isResetting ? "resetting" : ""
            }`}
            style={{ height: 600 }}
        >
            <CSSTransition
                in={hasStarted && !isLoading && (currentItem || showingResults)}
                timeout={isLastItem ? 0 : fadeSpeed} // Only fade if not last item
                classNames="fade"
                enter={!showingResults} // Skip the enter animation if showing Results
                exit={false}
                unmountOnExit
            >
                <div
                    className={`quiz-heading ${
                        hasStarted && !showingResults ? "enter" : ""
                    }`}
                >
                    {current > 1 && (
                        <button
                            className={`previous ${
                                hasStarted === false ? "exiting" : ""
                            }`}
                            onClick={handlePrevious}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="18"
                                viewBox="0 0 11 18"
                                fill="none"
                            >
                                <path
                                    d="M8.25468 1.27449C8.37555 1.38491 8.43595 1.53598 8.43595 1.68757C8.43595 1.82436 8.38652 1.96112 8.28653 2.06937L1.89035 9.00007L8.25714 15.9294C8.46808 16.1579 8.4549 16.5144 8.22528 16.7242C7.99677 16.9352 7.64204 16.9209 7.4311 16.6929L0.681104 9.38044C0.481136 9.16402 0.481136 8.83341 0.681104 8.61685L7.4311 1.30435C7.67109 1.07796 8.02617 1.06355 8.25468 1.27449Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    )}
                    <div
                        className={`heading ${
                            exiting === true ? "exiting" : ""
                        }`}
                    >
                        {currentItem ? currentItem.title : "Your results"}
                    </div>
                    <button
                        className={`reset ${
                            hasStarted === false ? "exiting" : ""
                        }`}
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </CSSTransition>
            <TransitionGroup>
                <CSSTransition
                    key={hasStarted ? current : "intro"} // Use the current index as the key if not Intro
                    timeout={transitionSpeed} // Duration of the animation
                    classNames="fade"
                >
                    {!hasStarted ? (
                        <Intro
                            onStart={handleStart}
                            image={EllipseHome}
                            exiting={exiting}
                        />
                    ) : !currentItem ? (
                        animationFinished ? (
                            <Results
                                score={totalScore}
                                answers={answers}
                                resultsImage={ResultsImage}
                            />
                        ) : (
                            <ResultsLoading
                                loadingAnimation={LoadingAnimation}
                                isLoading={setIsLoading}
                                onAnimationEnd={handleAnimationEnd}
                            />
                        )
                    ) : currentType === "question" ? (
                        <CurrentQuestions
                            question={currentItem}
                            onChoiceChange={handleAnswer}
                            exiting={exiting}
                            totalQuestions={questions.length}
                            checked={checked}
                            setChecked={setChecked}
                            image={images[questionCountBeforeCurrent - 1]}
                            isEven={isEven}
                        />
                    ) : currentType === "break" ? (
                        <Break
                            image={
                                currentItem.image === "chat"
                                    ? EllipseChat
                                    : EllipseLightbulb
                            }
                            contentType={currentItem.contentType}
                            content={currentItem.content}
                            author={currentItem.author}
                            onNext={handleNext}
                            exiting={exiting}
                        />
                    ) : null}
                </CSSTransition>
            </TransitionGroup>
            <CSSTransition
                in={hasStarted && current <= questions.length}
                timeout={isLastItem ? 0 : fadeSpeed} // Only fade if not last item
                classNames="fade"
                enter={true}
                exit={false}
                unmountOnExit
            >
                <Scorebox total={questions.length} current={current} />
            </CSSTransition>
        </main>
    );
};

export default App;
