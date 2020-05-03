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
				el.appendChild(svg["path"]("M36 34c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2V15c0-1.104.896-2 2-2h32c1.104 0 2 .896 2 2v19z", {["fill"]: "#FFCC4D",["d"]: "M36 34c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2V15c0-1.104.896-2 2-2h32c1.104 0 2 .896 2 2v19z",}));el.appendChild(svg["path"]("M34 13H2c-1.104 0-2 .896-2 2h36c0-1.104-.896-2-2-2z", {["fill"]: "#6D6E71",["d"]: "M34 13H2c-1.104 0-2 .896-2 2h36c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M2 24h32v4H2zm0-6h32v4H2zm0 12h32v4H2z", {["fill"]: "#3B88C3",["d"]: "M2 24h32v4H2zm0-6h32v4H2zm0 12h32v4H2z",}));el.appendChild(svg["path"]("M28 17h2v18h-2z", {["fill"]: "#FFCC4D",["d"]: "M28 17h2v18h-2z",}));el.appendChild(svg["path"]("M22 0H6C4.896 0 4 .896 4 2v34h20V2c0-1.104-.896-2-2-2z", {["fill"]: "#FFE8B6",["d"]: "M22 0H6C4.896 0 4 .896 4 2v34h20V2c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M22 0H6C4.896 0 4 .896 4 2h20c0-1.104-.896-2-2-2z", {["fill"]: "#808285",["d"]: "M22 0H6C4.896 0 4 .896 4 2h20c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M6 18h16v4H6zm0 6h16v4H6zm0 6h16v4H6z", {["fill"]: "#55ACEE",["d"]: "M6 18h16v4H6zm0 6h16v4H6zm0 6h16v4H6z",}));el.appendChild(svg["path"]("M10 7h2v29h-2zm6 0h2v29h-2z", {["fill"]: "#FFE8B6",["d"]: "M10 7h2v29h-2zm6 0h2v29h-2z",}));el.appendChild(svg["path"]("M12 30h4v6h-4z", {["fill"]: "#269",["d"]: "M12 30h4v6h-4z",}));el.appendChild(svg["circle"](14, 9, 12, {["cy"]: "9",["r"]: "6",["fill"]: "#A7A9AC",["cx"]: "14",}));el.appendChild(svg["circle"](14, 9, 8, {["cy"]: "9",["r"]: "4",["fill"]: "#E6E7E8",["cx"]: "14",}));el.appendChild(svg["path"]("M17 10h-3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1s1 .448 1 1v4h2c.552 0 1 .448 1 1s-.448 1-1 1z", {["fill"]: "#A0041E",["d"]: "M17 10h-3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1s1 .448 1 1v4h2c.552 0 1 .448 1 1s-.448 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};