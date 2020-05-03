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
				el.appendChild(svg["path"]("M29.879 33.879C31.045 35.045 32.9 35.1 34 34s1.045-2.955-.121-4.121L12.121 8.121C10.955 6.955 9.1 6.9 8 8s-1.045 2.955.121 4.121l21.758 21.758z", {["fill"]: "#F4900C",["d"]: "M29.879 33.879C31.045 35.045 32.9 35.1 34 34s1.045-2.955-.121-4.121L12.121 8.121C10.955 6.955 9.1 6.9 8 8s-1.045 2.955.121 4.121l21.758 21.758z",}));el.appendChild(svg["path"]("M22 3s-6-3-11 2l-7 7s-1-1-2 0l-1 1s-1 1 0 2l4 4s1 1 2 0l1-1s1-1 0-2l-.078-.078c.77-.743 1.923-1.5 3.078-.922l4-4s-1-3 1-5 3-2 5-2 1-1 1-1z", {["fill"]: "#66757F",["d"]: "M22 3s-6-3-11 2l-7 7s-1-1-2 0l-1 1s-1 1 0 2l4 4s1 1 2 0l1-1s1-1 0-2l-.078-.078c.77-.743 1.923-1.5 3.078-.922l4-4s-1-3 1-5 3-2 5-2 1-1 1-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};