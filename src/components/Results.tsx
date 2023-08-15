// import { useEffect } from "react";

interface ComponentProps {
    score: number;
    answers: any;
    resultsImage: any;
}

let skillLevel: string;
let description: string;
let benefits: any;
let image: any;

const Results = ({ score, resultsImage }: ComponentProps) => {
    if (score >= 120) {
        image = resultsImage;
        skillLevel = "Expert";
        description =
            "You are a TypeScript pro! Your knowledge of TypeScript is impressive. Keep up the great work!";
        benefits = (
            <>
                <span>Benefit number 1</span>
                <span>Benefit number 2</span>
                <span>Benefit number 3</span>
            </>
        );
    } else if (score >= 80 && score <= 115) {
        image = resultsImage;
        skillLevel = "Intermmediate";
        description =
            "You are a TypeScript pro! Your knowledge of TypeScript is impressive. Keep up the great work!";
        benefits = (
            <>
                <span>Benefit number 1</span>
                <span>Benefit number 2</span>
                <span>Benefit number 3</span>
            </>
        );
    } else if (score <= 75) {
        image = resultsImage;
        skillLevel = "Beginner";
        description =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit maecenas lacinia. With Elder care you can:";
        benefits = (
            <>
                <span>Benefit number 1</span>
                <span>Benefit number 2</span>
                <span>Benefit number 3</span>
            </>
        );
    }

    // GTM datalayer push
    // useEffect(() => {
    //     dataLayer = dataLayer || [];
    //     function gtag(...args: any[]) {
    //         dataLayer.push(args);
    //     }

    //     gtag("js", new Date());

    //     dataLayer.push({
    //         event: "type_of_care_completion",
    //         type_of_care: typeOfCare,
    //         answers: answers,
    //     });
    // }, []);

    return (
        <div className="quiz-results">
            <img src={image} alt={skillLevel} />
            <h4>Your skill level is {skillLevel}</h4>
            <p>{description}</p>
            <div className="benefits">{benefits}</div>
            <div className="buttons">
                <button type="button" className="button">
                    <a href="https://my.elder.org/register/welcome">
                        Get started
                    </a>
                </button>
                <button type="button" className="button outline">
                    <a href="#">Learn more</a>
                </button>
            </div>
        </div>
    );
};

export default Results;
