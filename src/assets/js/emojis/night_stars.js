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
				el.appendChild(svg["path"]("M32 0H4C1.791 0 0 1.791 0 4v22h36V4c0-2.209-1.791-4-4-4z", {["fill"]: "#269",["d"]: "M32 0H4C1.791 0 0 1.791 0 4v22h36V4c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z", {["fill"]: "#3F484C",["d"]: "M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z",}));el.appendChild(svg["path"]("M28 19c0-1-1-1-1-1h-8c-1 0-1 1-1 1v17h10V19zm-17 2H6v-7s0-1-1-1H0v19c0 2.209 1.791 4 4 4h8V22s0-1-1-1zm21 4c-1 0-1 1-1 1v10h1c2.209 0 4-1.791 4-4v-7h-4z", {["fill"]: "#292F33",["d"]: "M28 19c0-1-1-1-1-1h-8c-1 0-1 1-1 1v17h10V19zm-17 2H6v-7s0-1-1-1H0v19c0 2.209 1.791 4 4 4h8V22s0-1-1-1zm21 4c-1 0-1 1-1 1v10h1c2.209 0 4-1.791 4-4v-7h-4z",}));el.appendChild(svg["path"]("M8 31h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 3h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-18h2v2h-2zm0 4h2v2h-2z", {["d"]: "M8 31h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 3h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-18h2v2h-2zm0 4h2v2h-2z",["fill"]: "#FFCC4D",}));el.appendChild(svg["circle"](10.5, 2.5, 1, {["cy"]: "2.5",["fill"]: "#FFF",["cx"]: "10.5",["r"]: ".5",}));el.appendChild(svg["circle"](7.5, 11.5, 1, {["cy"]: "11.5",["fill"]: "#FFF",["cx"]: "7.5",["r"]: ".5",}));el.appendChild(svg["circle"](22, 5, 2, {["cy"]: "5",["fill"]: "#FFF",["cx"]: "22",["r"]: "1",}));el.appendChild(svg["circle"](26.5, 5.5, 1, {["cy"]: "5.5",["fill"]: "#FFF",["cx"]: "26.5",["r"]: ".5",}));el.appendChild(svg["circle"](31, 3, 2, {["cy"]: "3",["fill"]: "#FFF",["cx"]: "31",["r"]: "1",}));el.appendChild(svg["circle"](31.5, 7.5, 1, {["cy"]: "7.5",["fill"]: "#FFF",["cx"]: "31.5",["r"]: ".5",}));el.appendChild(svg["path"]("M6.5 7C5.119 7 4 5.881 4 4.5c0-1.13.755-2.074 1.784-2.383C5.533 2.048 5.273 2 5 2 3.343 2 2 3.343 2 5s1.343 3 3 3c.959 0 1.803-.458 2.353-1.159C7.085 6.938 6.801 7 6.5 7z", {["d"]: "M6.5 7C5.119 7 4 5.881 4 4.5c0-1.13.755-2.074 1.784-2.383C5.533 2.048 5.273 2 5 2 3.343 2 2 3.343 2 5s1.343 3 3 3c.959 0 1.803-.458 2.353-1.159C7.085 6.938 6.801 7 6.5 7z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};