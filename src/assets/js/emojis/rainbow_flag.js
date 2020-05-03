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
				el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-.5H0v.5z", {["fill"]: "#880082",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-.5H0v.5z",}));el.appendChild(svg["path"]("M0 22.07h36v4.6H0z", {["fill"]: "#3558A0",["d"]: "M0 22.07h36v4.6H0z",}));el.appendChild(svg["path"]("M0 17.83h36v4.5H0z", {["fill"]: "#138F3E",["d"]: "M0 17.83h36v4.5H0z",}));el.appendChild(svg["path"]("M0 13.5h36V18H0z", {["fill"]: "#FAD220",["d"]: "M0 13.5h36V18H0z",}));el.appendChild(svg["path"]("M0 9.17h36v4.5H0z", {["fill"]: "#FF5000",["d"]: "M0 9.17h36v4.5H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v.33h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#FF000E",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v.33h36V9c0-2.209-1.791-4-4-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};