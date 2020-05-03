import { h } from "/assets/js/vendor/hyperapp.js";
import picostyle from "/assets/js/vendor/picostyle.js";
import monkey_face from "/assets/js/emojis/monkey_face.js";
import see_no_evil from "/assets/js/emojis/see_no_evil.js";
import hear_no_evil from "/assets/js/emojis/hear_no_evil.js";
import speak_no_evil from "/assets/js/emojis/speak_no_evil.js";

const style = picostyle(h);

const emojis = [
	monkey_face({ size: 4 }),
	see_no_evil({ size: 4 }),
	hear_no_evil({ size: 4 }),
	speak_no_evil({ size: 4 }),
];

const container = style("h")({
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	["> h3"]: {
		marginTop: "2rem",
	}
})

const view = (state, actions) => container({}, [
	emojis[Math.floor(Math.random() * 4)],
	h("h3", {}, "Loading..."),
]);

export const loader = view;
