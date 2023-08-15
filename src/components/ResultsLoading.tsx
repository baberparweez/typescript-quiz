import { useEffect } from "react";

interface ComponentProps {
    loadingAnimation: any;
    onAnimationEnd: any;
    isLoading: any;
}

const ResultsLoading = ({
    loadingAnimation,
    onAnimationEnd,
    isLoading,
}: ComponentProps) => {
    useEffect(() => {
        isLoading(true);

        // GIF duration is 9 seconds
        const timer = setTimeout(onAnimationEnd, 9000);

        // Cleanup the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, [onAnimationEnd, isLoading]);

    return (
        <div className="quiz-results-loading">
            <div className="animation-container">
                <img src={loadingAnimation} alt="Loading animation" />
            </div>
            <div className="loading-points">
                <span>Collecting results...</span>
                <span>Calculating your score...</span>
                <span>Complete</span>
            </div>
        </div>
    );
};

export default ResultsLoading;
