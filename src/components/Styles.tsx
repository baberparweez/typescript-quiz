/**
 * Inline styles exist here due to `styled components` not compiling properly in this Vite project
 * This method also allows this app to be embeddable as the styles are appended to the parent site
 */
const fontFamily = '"Mulish", sans-serif';
const fontImport =
    '@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap");';
const primaryColour = "#007acc";
const secondaryColour = "#000";
const black = "#000";
const white = "#fff";
const style = `
${fontImport}
#root {
	color: ${black};
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${fontFamily};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	position: relative;
	height: 100%;
	width: 100%;
}
#root .fade-enter {
	opacity: 0;
}
#root .fade-enter-done {
	opacity: 1;
	transition: opacity 0.25s ease-in-out;
}
#root .quiz-box.forward .fade-enter .quiz-intro,
#root .quiz-box.forward .fade-enter .quiz-form-inner,
#root .quiz-box.forward .fade-enter .quiz-break {
	opacity: 0;
	transform: translateX(20px);
}
#root .quiz-box.backward .fade-enter .quiz-intro,
#root .quiz-box.backward .fade-enter .quiz-form-inner,
#root .quiz-box.backward .fade-enter .quiz-break {
	opacity: 0;
	transform: translateX(-20px);
}
#root .fade-enter-done .quiz-intro,
#root .fade-enter-done .quiz-form-inner,
#root .fade-enter-done .quiz-break {
	opacity: 1;
	transform: translateX(0);
	transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
}
#root .quiz-box.forward .quiz-intro.exiting,
#root .quiz-box.forward .quiz-form-inner.exiting,
#root .quiz-box.forward .quiz-break.exiting {
	opacity: 0;
	transform: translateX(-100%);
	transition: opacity 0.25s ease-in-out, transform 1s ease-in-out;
}
#root .quiz-box.backward .quiz-intro.exiting,
#root .quiz-box.backward .quiz-form-inner.exiting,
#root .quiz-box.backward .quiz-break.exiting {
	opacity: 0;
	transform: translateX(100%);
	transition: opacity 0.25s ease-in-out, transform 1s ease-in-out;
}
#root .quiz-box {
	background: ${white};
	border: 1px solid #cdcdcd;
	border-radius: 1.875rem;
	margin: 0 auto;
	overflow: hidden;
	padding-bottom: 2.8125rem;
	position: relative;
	text-align: center;
	max-width: 67.25rem;
	width: 100%;
	opacity: 1;
	transition: opacity 0.3s ease-in-out;
}
#root .quiz-box,
#root .quiz-box * {
	box-sizing: border-box;
}
#root .quiz-box.resetting {
	opacity: 0;
}
#root .quiz-box > div:not(.quiz-heading):not(.quiz-scorebox) {
	min-height: 33.125rem;
}
#root .quiz-box > div > .quiz-intro,
#root .quiz-box > div > .quiz-form,
#root .quiz-box > div > .quiz-break,
#root .quiz-box > div > .quiz-results-loading,
#root .quiz-box > div > .quiz-results {
	position: absolute;
	top: 0;
	left: 1.25rem;
	right: 1.25rem;
	margin: 0 auto;
	max-width: 19.375rem;
}
#root .quiz-box > div > .quiz-form {
	top: 3.75rem;
}
#root .quiz-box > div > .quiz-break {
	top: 1.875rem;
}
#root .quiz-box > div > .quiz-results {
	top: 3.75rem;
}
#root .button {
	appearance: none;
	background: ${primaryColour};
	border: none;
	border-radius: 2.5rem;
	color: ${white};
	cursor: pointer;
	font-family: ${fontFamily};
	font-size: 1.125rem;
	font-weight: 700;
	padding: 0.625rem 1.25rem;
	margin-top: 1.25rem;
}
#root h4 {
	color: ${secondaryColour};
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	margin-left: auto;
	margin-right: auto;
}
#root p {
	font-size: 1rem;
	margin: 0 0 1.875rem 0;
}
#root .quiz-heading {
	position: relative;
	margin-left: 1.25rem;
	margin-right: 1.25rem;
	margin: 0 auto;
	max-width: 19.375rem;
}
#root .quiz-heading .heading {
	font-weight: 700;
	position: absolute;
	top: 1.5rem;
	left: 1.25rem;
	right: 1.25rem;
}
#root .quiz-heading.enter .heading {
	animation: fadeInDelay 1s forwards;
}
#root .quiz-heading .previous {
	appearance: none;
	background: none;
	border: none;
	color: ${black};
	cursor: pointer;
	outline: none;
	padding: 0;
	position: absolute;
	left: 0.625rem;
	top: 1.625rem;
	z-index: 1;
}
#root .quiz-heading.enter .previous {
	animation: fadeInDelay 1s forwards;
}
#root .quiz-heading .reset {
	appearance: none;
	background: none;
	border: none;
	color: ${black};
	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 400;
	outline: none;
	padding: 0;
	position: absolute;
	right: 0.625rem;
	top: 1.5625rem;
	z-index: 1;
}
#root .quiz-heading.enter .reset {
	animation: fadeInDelay 1s forwards;
}
#root .quiz-heading.enter .heading.exiting,
#root .quiz-heading.enter .previous.exiting,
#root .quiz-heading.enter .reset.exiting {
	animation: fadeOut 0s forwards;
}
#root .quiz-intro,
#root .quiz-break {
	display: flex;
	flex-direction: column;
}
#root .quiz-intro h4,
#root .quiz-break h4 {
	margin-top: 0;
	max-width: 15rem;
}
#root .quiz-intro p {
	margin-bottom: 0.625rem;
}
#root .quiz-intro p,
#root .quiz-break p {
	font-weight: 400;
	line-height: normal;
	margin-left: auto;
	margin-right: auto;
}
#root .quiz-intro img,
#root .quiz-break img,
#root .quiz-results img {
	margin: 0 auto;
	width: 90%;
}
#root .quiz-break {
	text-align: left;
}
#root .quiz-break p {
	font-size: 1rem;
}
#root .quiz-break .did-you-know {
	font-size: 0.875rem;
	font-weight: 700;
	margin-bottom: 0.375rem;
}
#root .quiz-break .did-you-know ~ p {
	font-size: 1.25rem;
}
#root .quiz-break .author {
	font-size: 0.875rem;
}
#root .quiz-break .author b {
	display: contents;
	font-weight: 700;
}
#root .quiz-break .quote-mark {
	color: #5089f7;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 5rem;
	font-weight: 400;
	height: 0.5rem;
	width: 1.5625rem;
}
#root .quiz-break .button {
	border-radius: 10px;
}
#root .quiz-intro span {
	border-radius: 20px;
	border: 1px solid #e4e4e4;
	background: ${white};
	color: ${black};
	font-size: 0.75rem;
	font-weight: 400;
	margin: 1.25rem auto 1.625rem;
	padding: 0.4375rem 0.9375rem;
	width: 11.625rem;
}
#root .quiz-intro span b {
	font-weight: 600;
}
#root .quiz-details label {
	display: block;
	margin-bottom: 0.9375rem;
}
#root .quiz-details input,
#root .quiz-details select {
	appearance: none;
	border: 1px solid ${black};
	border-radius: 3px;
	box-sizing: border-box;
	display: block;
	font-weight: 400;
	margin-bottom: 0.9375rem;
	margin-top: 0.5rem;
	outline: none;
	padding: 0.5rem;
	width: 100%;
}
#root select {
	cursor: pointer;
}
#root .quiz-form img,
#root .quiz-results img {
    border-radius: 20px;
	margin-bottom: 1rem;
	object-fit: cover;
	object-position: center;
	height: 9.8125rem;
	width: 100%;
}
#root .quiz-form .list-group {
	border: none;
	list-style: none;
	padding-left: 0;
}
#root .quiz-form .list-group.grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 0.625rem;
}
#root .quiz-form .list-group-item label {
	border: 1px solid #d9d9d9;
	border-radius: 10px;
	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 400;
	margin-bottom: 0.625rem;
	position: relative;
}
#root .quiz-form input {
	opacity: 0;
	position: absolute;
	pointer-events: none;
}
#root .quiz-form .list-group-item.checked label {
	background-color: ${primaryColour};
	border-color: ${primaryColour};
	color: ${white};
	font-weight: 700;
}
#root .quiz-form .list-group.grid .list-group-item label::before {
	content: "";
	background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' rx='24' fill='%23F3F3F3'/%3E%3Cg opacity='0.3'%3E%3Cpath d='M22.5 16.5L28.5 21V22C29.2 22 29.87 22.1 30.5 22.29V20L22.5 14L14.5 20V32H22.18C21.88 31.38 21.68 30.71 21.58 30H16.5V21L22.5 16.5Z' fill='${black}'/%3E%3Cpath d='M28.5 24C25.74 24 23.5 26.24 23.5 29C23.5 31.76 25.74 34 28.5 34C31.26 34 33.5 31.76 33.5 29C33.5 26.24 31.26 24 28.5 24ZM31.5 29.5H29V32H28V29.5H25.5V28.5H28V26H29V28.5H31.5V29.5Z' fill='${black}'/%3E%3C/g%3E%3C/svg%3E%0A");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	display: block;
	margin: 0.25rem auto 0.625rem;
	pointer-events: none;
	height: 3rem;
	width: 3rem;
}
#root
	.quiz-form
	.list-group.grid
	.list-group-item.checked
	label:before {
	background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' rx='24' fill='white'/%3E%3Cpath d='M22.5 16.5L28.5 21V22C29.2 22 29.87 22.1 30.5 22.29V20L22.5 14L14.5 20V32H22.18C21.88 31.38 21.68 30.71 21.58 30H16.5V21L22.5 16.5Z' fill='${black}'/%3E%3Cpath d='M28.5 24C25.74 24 23.5 26.24 23.5 29C23.5 31.76 25.74 34 28.5 34C31.26 34 33.5 31.76 33.5 29C33.5 26.24 31.26 24 28.5 24ZM31.5 29.5H29V32H28V29.5H25.5V28.5H28V26H29V28.5H31.5V29.5Z' fill='${black}'/%3E%3C/svg%3E%0A");
}
#root .quiz-form .list-group-item label,
#root .quiz-form .list-group-item.checked label,
#root .quiz-form .list-group.grid .list-group-item label::before,
#root .quiz-form .list-group-item label:hover {
	transition: all 0.125s ease-in-out;
}
@media only screen and (min-width: 767px) {
	#root .quiz-form .list-group-item label:hover {
		background-color: ${primaryColour};
		border-color: ${primaryColour};
		color: ${white};
	}
	#root
		.quiz-form
		.list-group.grid
		.list-group-item:hover
		label:before {
		background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' rx='24' fill='white'/%3E%3Cpath d='M22.5 16.5L28.5 21V22C29.2 22 29.87 22.1 30.5 22.29V20L22.5 14L14.5 20V32H22.18C21.88 31.38 21.68 30.71 21.58 30H16.5V21L22.5 16.5Z' fill='${black}'/%3E%3Cpath d='M28.5 24C25.74 24 23.5 26.24 23.5 29C23.5 31.76 25.74 34 28.5 34C31.26 34 33.5 31.76 33.5 29C33.5 26.24 31.26 24 28.5 24ZM31.5 29.5H29V32H28V29.5H25.5V28.5H28V26H29V28.5H31.5V29.5Z' fill='${black}'/%3E%3C/svg%3E%0A");
	}
}
#root .quiz-form label {
	cursor: pointer;
	display: block;
	font-weight: 400;
	margin-bottom: 0;
	padding: 0.75rem 0.625rem;
}
#root .quiz-scorebox {
	margin: 1.875rem auto;
	position: relative;
	overflow: hidden;
	width: calc(100% - 2.5rem);
	max-width: 19.375rem;
}
#root .progress {
	background-color: ${white};
	border-radius: 20px;
	height: 0.5rem;
	margin-top: 0.3125rem;
	overflow: hidden;
	position: relative;
	width: 100%;
}
#root .progress .progress-bar {
	background-color: ${primaryColour};
	height: 100%;
	position: absolute;
	transition: all 0.75s ease-in-out;
	width: 0;
}
#root .quiz-box > div > .quiz-results-loading .animation-container {
    border: 1px solid #E4E4E4;
    background: transparent;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14.625rem;
    width: 17.5rem;
    margin: 6.3125rem auto 0;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
#root .quiz-box > div > .quiz-results-loading .animation-container img {
    margin: 0 auto;
	object-fit: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    height: 100%;
	width: 80%;
}
#root .quiz-box > div > .quiz-results-loading .loading-points {
	display: flex;
	flex-direction: column;
	color: ${black};
	margin: 2.1875rem auto;
	position: relative;
	z-index: 1;
}
#root .loading-points {
	animation: fadeOut 0.5s 8.2s forwards;
}
#root .loading-points span {
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.75rem;
	text-align: center;
	opacity: 0;
	animation: fadeIn 1s forwards;
}
#root .loading-points span:nth-child(1) {
	animation-delay: 0s;
}
#root .loading-points span:nth-child(2) {
	animation-delay: 3s;
}
#root .loading-points span:nth-child(3) {
	animation-delay: 6s;
}
#root .loading-points span::before {
	content: "";
	display: inline-block;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' fill='%23007acc'/%3E%3C/svg%3E");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	margin-right: 0.25rem;
	margin-bottom: -0.375rem;
	height: 1.5rem;
	width: 1.5rem;
}
#root .quiz-results h4 {
	margin-top: 0;
}
#root .quiz-results p {
	margin-bottom: 1.25rem;
}
#root .quiz-results p,
#root .quiz-results .benefits span {
	color: #3a3a3a;
	font-size: 1rem;
	font-weight: 400;
	text-align: center;
	text-decoration: none;
}
#root .quiz-results .benefits {
	display: flex;
	margin-bottom: 2.5rem;
}
#root .quiz-results .benefits span::before {
	content: "";
	display: block;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' fill='%23007acc'/%3E%3C/svg%3E");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	margin: 0 auto 0.375rem;
	height: 1.5rem;
	width: 1.5rem;
}
#root .quiz-results .buttons {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.9375rem;
}
#root .quiz-results .buttons .button {
	margin-top: 0;
	width: calc(50% - 0.25rem);
}
#root .quiz-results .buttons .button.outline {
	border: 1px solid #3a3a3a;
	background-color: ${white};
}
#root .quiz-results .buttons .button a {
	color: ${white};
	text-decoration: none;
}
#root .quiz-results .buttons .button.outline a {
	color: #3a3a3a;
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes fadeOut {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
@keyframes fadeInDelay {
	0% {
		opacity: 0;
	}
	20% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`;

export default style;
