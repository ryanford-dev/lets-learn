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
				el.appendChild(svg["path"]("M24 14H12s-5 6-5 10 11 11 11 11 11-7 11-11-5-10-5-10z", {["fill"]: "#31373D",["d"]: "M24 14H12s-5 6-5 10 11 11 11 11 11-7 11-11-5-10-5-10z",}));el.appendChild(svg["path"]("M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.902.704 2.377.704 3.278 0l14.722-11.495c.902-.704.902-1.856 0-2.56L19.64 1.28z", {["fill"]: "#292F33",["d"]: "M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.902.704 2.377.704 3.278 0l14.722-11.495c.902-.704.902-1.856 0-2.56L19.64 1.28z",}));el.appendChild(svg["path"]("M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.901.704 2.377.704 3.278 0l14.723-11.495c.901-.704.901-1.856 0-2.56L19.64 1.28z", {["fill"]: "#394146",["d"]: "M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.901.704 2.377.704 3.278 0l14.723-11.495c.901-.704.901-1.856 0-2.56L19.64 1.28z",}));el.appendChild(svg["path"]("M8 25s-2 2-2 3v6s0 2 2 2 2-2 2-2v-6c0-1-2-3-2-3z", {["fill"]: "#FCAB40",["d"]: "M8 25s-2 2-2 3v6s0 2 2 2 2-2 2-2v-6c0-1-2-3-2-3z",}));el.appendChild(svg["circle"](8, 26, 6, {["cy"]: "26",["r"]: "3",["fill"]: "#FDD888",["cx"]: "8",}));el.appendChild(svg["path"]("M8.001 27c-.552 0-1-.447-1-1v-3.958c-.042-.634.187-2.036 1.317-2.884l9.022-7.91c.416-.365 1.048-.323 1.411.093.364.415.322 1.047-.093 1.411l-9.08 7.958C8.974 21.166 9 21.982 9 21.99L9.002 26c0 .553-.448 1-1.001 1z", {["fill"]: "#FCAB40",["d"]: "M8.001 27c-.552 0-1-.447-1-1v-3.958c-.042-.634.187-2.036 1.317-2.884l9.022-7.91c.416-.365 1.048-.323 1.411.093.364.415.322 1.047-.093 1.411l-9.08 7.958C8.974 21.166 9 21.982 9 21.99L9.002 26c0 .553-.448 1-1.001 1z",}));el.appendChild(svg["circle"](18, 13, 6, {["cy"]: "13",["r"]: "3",["fill"]: "#31373D",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};