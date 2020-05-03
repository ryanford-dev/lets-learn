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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-3c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v3z", {["fill"]: "#DD2E44",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-3c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v3z",}));el.appendChild(svg["path"]("M19 13l-.979-1H7.146C4 12 3 14 3 14l-3 5.959V25h19V13z", {["fill"]: "#FFCC4D",["d"]: "M19 13l-.979-1H7.146C4 12 3 14 3 14l-3 5.959V25h19V13z",}));el.appendChild(svg["path"]("M9 20H2l2-4s1-2 3-2h2v6z", {["fill"]: "#55ACEE",["d"]: "M9 20H2l2-4s1-2 3-2h2v6z",}));el.appendChild(svg["circle"](9, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "9",}));el.appendChild(svg["circle"](9, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "9",}));el.appendChild(svg["circle"](27, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "27",}));el.appendChild(svg["circle"](27, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "27",}));el.appendChild(svg["path"]("M32 8H17c-2.209 0-4 1.791-4 4v13h23V12c0-2.209-1.791-4-4-4z", {["fill"]: "#CCD6DD",["d"]: "M32 8H17c-2.209 0-4 1.791-4 4v13h23V12c0-2.209-1.791-4-4-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};