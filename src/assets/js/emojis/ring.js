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
				el.appendChild(svg["path"]("M18 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z", {["fill"]: "#9AAAB4",["d"]: "M18 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z",}));el.appendChild(svg["path"]("M29 5l-4-5H11L7 5l11 9z", {["fill"]: "#5DADEC",["d"]: "M29 5l-4-5H11L7 5l11 9z",}));el.appendChild(svg["path"]("M29 5l-4-5H11L7 5h11z", {["fill"]: "#8CCAF7",["d"]: "M29 5l-4-5H11L7 5h11z",}));el.appendChild(svg["path"]("M29 5l-4-5h-7v5h1z", {["fill"]: "#5DADEC",["d"]: "M29 5l-4-5h-7v5h1z",}));el.appendChild(svg["path"]("M18 5h11l-11 9z", {["fill"]: "#8CCAF7",["d"]: "M18 5h11l-11 9z",}));el.appendChild(svg["path"]("M25 13c0 1.657-1.343 3-3 3h-8c-1.657 0-3-1.343-3-3s1.343-3 3-3h8c1.657 0 3 1.343 3 3z", {["fill"]: "#9AAAB4",["d"]: "M25 13c0 1.657-1.343 3-3 3h-8c-1.657 0-3-1.343-3-3s1.343-3 3-3h8c1.657 0 3 1.343 3 3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};