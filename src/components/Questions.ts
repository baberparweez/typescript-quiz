const QUESTIONS: object = [
    {
        type: "question",
        title: "Question 1",
        questionNumber: 1,
        question: "What is TypeScript primarily used for?",
        answers: [
            {
                id: 1,
                answer: "Decorating your website with colors",
                answerValue: 5,
            },
            {
                id: 2,
                answer: "Adding static typing to JavaScript code",
                answerValue: 15,
            },
            {
                id: 3,
                answer: "Cooking recipes automation",
                answerValue: 10,
            },
        ],
    },
    {
        type: "question",
        title: "Question 2",
        questionNumber: 2,
        question:
            "How can you define a variable with a specific type in TypeScript?",
        answers: [
            {
                id: 1,
                answer: "let variable = 5;",
                answerValue: 10,
            },
            {
                id: 2,
                answer: "const variable: number = 5;",
                answerValue: 5,
            },
            {
                id: 3,
                answer: "let variable: number = 5;",
                answerValue: 15,
            },
        ],
    },
    {
        type: "question",
        title: "Question 3",
        questionNumber: 3,
        question: "What is the command to compile a TypeScript file?",
        answers: [
            {
                id: 1,
                answer: "tsc filename.ts",
                answerValue: 15,
            },
            {
                id: 2,
                answer: "ts compile filename.ts",
                answerValue: 5,
            },
            {
                id: 3,
                answer: "compile-ts filename.ts",
                answerValue: 10,
            },
        ],
    },
    {
        type: "question",
        title: "Question 4",
        questionNumber: 4,
        question: "What is the key benefit of using TypeScript?",
        answers: [
            {
                id: 1,
                answer: "Easier laundry",
                answerValue: 5,
            },
            {
                id: 2,
                answer: "Strong typing",
                answerValue: 15,
            },
            {
                id: 3,
                answer: "Increased internet speed",
                answerValue: 10,
            },
        ],
    },
    {
        type: "break",
        title: "Random Fact",
        image: "lightbulb",
        contentType: "fact",
        content:
            "TypeScript is developed and maintained by Microsoft and was first made public in October 2012.",
        author: "",
    },
    {
        type: "question",
        title: "Question 5",
        questionNumber: 5,
        question:
            "How can you define an optional parameter in a function in TypeScript?",
        answers: [
            {
                id: 1,
                answer: "function example(param?) {}",
                answerValue: 5,
            },
            {
                id: 2,
                answer: "function example(param: optional) {}",
                answerValue: 10,
            },
            {
                id: 3,
                answer: "function example(param?: type) {}",
                answerValue: 15,
            },
        ],
    },
    {
        type: "question",
        title: "Question 6",
        questionNumber: 6,
        question: "What is the purpose of the `never` type in TypeScript?",
        answers: [
            {
                id: 1,
                answer: "Represents values that never occur",
                answerValue: 15,
            },
            {
                id: 2,
                answer: "Used for constant values that never change",
                answerValue: 10,
            },
            {
                id: 3,
                answer: "A special type for undefined values",
                answerValue: 5,
            },
        ],
    },
    {
        type: "question",
        title: "Question 7",
        questionNumber: 7,
        question:
            "How do you define a read-only property in a TypeScript interface?",
        answers: [
            {
                id: 1,
                answer: "readonly propertyName: type;",
                answerValue: 15,
            },
            {
                id: 2,
                answer: "constant propertyName: type;",
                answerValue: 5,
            },
            {
                id: 3,
                answer: "final propertyName: type;",
                answerValue: 10,
            },
        ],
    },
    {
        type: "break",
        title: "Random Fact",
        image: "lightbulb",
        contentType: "fact",
        content:
            "TypeScript is a superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript code.",
        author: "Haroldesque",
    },
    {
        type: "question",
        title: "Question 8",
        questionNumber: 8,
        question:
            "Which of the following can be used to define a tuple in TypeScript?",
        answers: [
            {
                id: 1,
                answer: "type MyTuple = [number, string];",
                answerValue: 15,
            },
            {
                id: 2,
                answer: "tuple MyTuple = (number, string);",
                answerValue: 5,
            },
            {
                id: 3,
                answer: "array MyTuple = [number, string];",
                answerValue: 10,
            },
        ],
    },
    {
        type: "question",
        title: "Question 9",
        questionNumber: 9,
        question: "What is the correct syntax to define an Enum in TypeScript?",
        answers: [
            {
                id: 1,
                answer: "enum Color {Red, Green, Blue}",
                answerValue: 15,
            },
            {
                id: 2,
                answer: "define Color {Red, Green, Blue}",
                answerValue: 5,
            },
            {
                id: 3,
                answer: "const Color {Red, Green, Blue}",
                answerValue: 10,
            },
        ],
    },
    {
        type: "question",
        title: "Question 10",
        questionNumber: 10,
        question:
            "Which compiler option is used to automatically compile TypeScript files when changes are detected?",
        answers: [
            {
                id: 1,
                answer: "--watch",
                answerValue: 15,
            },
            {
                id: 2,
                answer: "--observe",
                answerValue: 5,
            },
            {
                id: 3,
                answer: "--follow",
                answerValue: 10,
            },
        ],
    },
];

export default QUESTIONS;
