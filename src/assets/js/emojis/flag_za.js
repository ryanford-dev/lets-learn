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
				el.appendChild(svg["path"]("M32 5H6.5L19 13.5h17V9c0-2.209-1.791-4-4-4z", {["fill"]: "#DE3830",["d"]: "M32 5H6.5L19 13.5h17V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M6.5 31H32c2.209 0 4-1.791 4-4v-4.5H19L6.5 31z", {["fill"]: "#002395",["d"]: "M6.5 31H32c2.209 0 4-1.791 4-4v-4.5H19L6.5 31z",}));el.appendChild(svg["path"]("M0 11v14l10.5-7z", {["fill"]: "#141414",["d"]: "M0 11v14l10.5-7z",}));el.appendChild(svg["path"]("M0 9v2l10.5 7L0 25v2l13.5-9z", {["fill"]: "#FFB611",["d"]: "M0 9v2l10.5 7L0 25v2l13.5-9z",}));el.appendChild(svg["path"]("M3.541 5.028C1.548 5.257 0 6.947 0 9l13.5 9L0 27c0 2.053 1.548 3.743 3.541 3.972L18.5 20.5H36v-5H18.5L3.541 5.028z", {["fill"]: "#007A4D",["d"]: "M3.541 5.028C1.548 5.257 0 6.947 0 9l13.5 9L0 27c0 2.053 1.548 3.743 3.541 3.972L18.5 20.5H36v-5H18.5L3.541 5.028z",}));el.appendChild(svg["path"]("M6.5 5H4c-.156 0-.308.011-.459.028L18.5 15.5H36v-2H19L6.5 5zM3.541 30.972c.151.017.303.028.459.028h2.5L19 22.5h17v-2H18.5L3.541 30.972z", {["fill"]: "#EEE",["d"]: "M6.5 5H4c-.156 0-.308.011-.459.028L18.5 15.5H36v-2H19L6.5 5zM3.541 30.972c.151.017.303.028.459.028h2.5L19 22.5h17v-2H18.5L3.541 30.972z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};