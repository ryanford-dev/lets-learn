import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M19 0c-1.721 0-3.343.406-4.793 1.111C13.814 1.043 13.412 1 13 1 9.134 1 6 4.134 6 8v12h.018C6.201 26.467 11.489 31.656 18 31.656S29.799 26.467 29.982 20H30v-9c0-6.075-4.925-11-11-11z", {["fill"]: "#FFAC33",["d"]: "M19 0c-1.721 0-3.343.406-4.793 1.111C13.814 1.043 13.412 1 13 1 9.134 1 6 4.134 6 8v12h.018C6.201 26.467 11.489 31.656 18 31.656S29.799 26.467 29.982 20H30v-9c0-6.075-4.925-11-11-11z",}));el.appendChild(svg["path"]("M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z", {["fill"]: "#9268CA",["d"]: "M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z", {["fill"]: "#FFDC5D",["d"]: "M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z",}));el.appendChild(svg["path"]("M9 5v12c0 4.971 4.029 9 9 9s9-4.029 9-9V5H9z", {["fill"]: "#FFDC5D",["d"]: "M9 5v12c0 4.971 4.029 9 9 9s9-4.029 9-9V5H9z",}));el.appendChild(svg["path"]("M27.999 5L26 4H8v7c6 0 6-6 6-6s2 7 14 7l-.001-7z", {["fill"]: "#FFAC33",["d"]: "M27.999 5L26 4H8v7c6 0 6-6 6-6s2 7 14 7l-.001-7z",}));el.appendChild(svg["path"]("M9 32h1v4H9zm17 0h1v4h-1z", {["fill"]: "#7450A8",["d"]: "M9 32h1v4H9zm17 0h1v4h-1z",}));el.appendChild(svg["circle"](18, 23, 2, {["cy"]: "23",["r"]: "1",["fill"]: "#DF1F32",["cx"]: "18",}));el.appendChild(svg["path"]("M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z", {["fill"]: "#662113",["d"]: "M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z",}));el.appendChild(svg["path"]("M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z", {["fill"]: "#C1694F",["d"]: "M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};