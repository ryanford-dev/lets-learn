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
				el.appendChild(svg["path"]("M1.364 29.987C2.069 30.61 2.985 31 4 31h28c2.209 0 4-1.791 4-4v-4.5H11.442L1.364 29.987z", {["fill"]: "#00ABC9",["d"]: "M1.364 29.987C2.069 30.61 2.985 31 4 31h28c2.209 0 4-1.791 4-4v-4.5H11.442L1.364 29.987z",}));el.appendChild(svg["path"]("M17.5 18l-6.058 4.5H36v-9H11.442z", {["fill"]: "#FAE042",["d"]: "M17.5 18l-6.058 4.5H36v-9H11.442z",}));el.appendChild(svg["path"]("M32 5H4c-1.015 0-1.931.39-2.636 1.013L11.442 13.5H36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#00ABC9",["d"]: "M32 5H4c-1.015 0-1.931.39-2.636 1.013L11.442 13.5H36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M17.5 18l-6.058-4.5L1.364 6.013C.534 6.746 0 7.806 0 9v18c0 1.194.534 2.254 1.364 2.987L11.442 22.5 17.5 18z", {["fill"]: "#141414",["d"]: "M17.5 18l-6.058-4.5L1.364 6.013C.534 6.746 0 7.806 0 9v18c0 1.194.534 2.254 1.364 2.987L11.442 22.5 17.5 18z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};