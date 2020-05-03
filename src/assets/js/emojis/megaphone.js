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
				el.appendChild(svg["path"]("M14 19c-3.314 0-6 2.687-6 6s2.686 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z", {["fill"]: "#3B88C3",["d"]: "M14 19c-3.314 0-6 2.687-6 6s2.686 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z",}));el.appendChild(svg["path"]("M1.783 14.023v.02C.782 14.263 0 15.939 0 18s.782 3.737 1.783 3.956v.021l28.701 7.972V6.064L1.783 14.023z", {["fill"]: "#55ACEE",["d"]: "M1.783 14.023v.02C.782 14.263 0 15.939 0 18s.782 3.737 1.783 3.956v.021l28.701 7.972V6.064L1.783 14.023z",}));el.appendChild(svg["ellipse"](31, 18, 10, 24, {["rx"]: "5",["cy"]: "18",["ry"]: "12",["fill"]: "#269",["cx"]: "31",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};