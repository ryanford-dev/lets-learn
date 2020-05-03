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
				el.appendChild(svg["path"]("M31 25H11v-1c0-2.209-1.791-4-4-4H4c-2.209 0-4 1.791-4 4v3c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-2h-5z", {["fill"]: "#99AAB5",["d"]: "M31 25H11v-1c0-2.209-1.791-4-4-4H4c-2.209 0-4 1.791-4 4v3c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-2h-5z",}));el.appendChild(svg["path"]("M10 12H7.146C4 12 3 14 3 14l-3 5.959V25h13V15c0-1.657-1.343-3-3-3z", {["fill"]: "#FFCC4D",["d"]: "M10 12H7.146C4 12 3 14 3 14l-3 5.959V25h13V15c0-1.657-1.343-3-3-3z",}));el.appendChild(svg["path"]("M9 20H2l2-4s1-2 3-2h2v6z", {["fill"]: "#55ACEE",["d"]: "M9 20H2l2-4s1-2 3-2h2v6z",}));el.appendChild(svg["circle"](6, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "6",}));el.appendChild(svg["circle"](6, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "6",}));el.appendChild(svg["circle"](30, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "30",}));el.appendChild(svg["circle"](30, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "30",}));el.appendChild(svg["circle"](20, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "20",}));el.appendChild(svg["circle"](20, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "20",}));el.appendChild(svg["path"]("M32 8H19c-2.209 0-4 1.791-4 4v13h21V12c0-2.209-1.791-4-4-4z", {["fill"]: "#77B255",["d"]: "M32 8H19c-2.209 0-4 1.791-4 4v13h21V12c0-2.209-1.791-4-4-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};