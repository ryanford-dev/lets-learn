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
				el.appendChild(svg["path"]("M36 22c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#CCD6DD",["d"]: "M36 22c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M4 4h28v18H4z", {["fill"]: "#5DADEC",["d"]: "M4 4h28v18H4z",}));el.appendChild(svg["path"]("M13 26h10v6H13z", {["fill"]: "#CCD6DD",["d"]: "M13 26h10v6H13z",}));el.appendChild(svg["path"]("M13 26h10v2H13z", {["fill"]: "#9AAAB4",["d"]: "M13 26h10v2H13z",}));el.appendChild(svg["path"]("M36 33c0-1.657-1.343-3-3-3H3c-1.657 0-3 1.343-3 3s1.343 3 3 3h30c1.657 0 3-1.343 3-3z", {["fill"]: "#E1E8ED",["d"]: "M36 33c0-1.657-1.343-3-3-3H3c-1.657 0-3 1.343-3 3s1.343 3 3 3h30c1.657 0 3-1.343 3-3z",}));el.appendChild(svg["path"]("M3 32h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z", {["fill"]: "#F5F8FA",["d"]: "M3 32h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};