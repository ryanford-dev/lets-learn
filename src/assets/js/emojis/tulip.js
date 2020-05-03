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
				el.appendChild(svg["path"]("M34.751 22c-3.382 0-11.9 3.549-15.751 7.158V17c0-.553-.447-1-1-1-.552 0-1 .447-1 1v12.341C13.247 25.669 4.491 22 1.052 22 .123 22 11.913 35.992 17 34.599V35c0 .553.448 1 1 1 .553 0 1-.447 1-1v-.356C24.188 35.638 35.668 22 34.751 22z", {["fill"]: "#77B255",["d"]: "M34.751 22c-3.382 0-11.9 3.549-15.751 7.158V17c0-.553-.447-1-1-1-.552 0-1 .447-1 1v12.341C13.247 25.669 4.491 22 1.052 22 .123 22 11.913 35.992 17 34.599V35c0 .553.448 1 1 1 .553 0 1-.447 1-1v-.356C24.188 35.638 35.668 22 34.751 22z",}));el.appendChild(svg["path"]("M25 13.417C25 19.768 23.293 23 18 23s-7-3.232-7-9.583S16 0 18 0s7 7.066 7 13.417z", {["fill"]: "#EA596E",["d"]: "M25 13.417C25 19.768 23.293 23 18 23s-7-3.232-7-9.583S16 0 18 0s7 7.066 7 13.417z",}));el.appendChild(svg["path"]("M22.795 2c-.48 0-4.106 14.271-4.803 19.279C17.246 16.271 13.481 2 13 2c-1 0-6 9-6 13s5.707 8 11 8 10.795-4 10.795-8-5-13-6-13z", {["fill"]: "#F4ABBA",["d"]: "M22.795 2c-.48 0-4.106 14.271-4.803 19.279C17.246 16.271 13.481 2 13 2c-1 0-6 9-6 13s5.707 8 11 8 10.795-4 10.795-8-5-13-6-13z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};