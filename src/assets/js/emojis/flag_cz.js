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
				el.appendChild(svg["path"]("M1.383 29.973C2.084 30.628 2.998 31 4 31h28c2.209 0 4-1.791 4-4.5V18H17.5L1.383 29.973z", {["fill"]: "#D7141A",["d"]: "M1.383 29.973C2.084 30.628 2.998 31 4 31h28c2.209 0 4-1.791 4-4.5V18H17.5L1.383 29.973z",}));el.appendChild(svg["path"]("M32 5H4c-1.016 0-1.94.382-2.646 1.006L17.5 18H36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EEE",["d"]: "M32 5H4c-1.016 0-1.94.382-2.646 1.006L17.5 18H36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M1.383 29.973L17.5 18 1.354 6.006C.525 6.739 0 7.807 0 9v17.5c0 1.48.537 2.683 1.383 3.473z", {["fill"]: "#11457E",["d"]: "M1.383 29.973L17.5 18 1.354 6.006C.525 6.739 0 7.807 0 9v17.5c0 1.48.537 2.683 1.383 3.473z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};