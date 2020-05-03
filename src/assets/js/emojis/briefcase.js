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
				el.appendChild(svg["path"]("M32 8h-6V4c0-2.209-1.791-4-4-4h-8c-2.209 0-4 1.791-4 4v4H4c-2.209 0-4 1.791-4 4v20c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V12c0-2.209-1.791-4-4-4zM12 6c0-1.104.896-2 2-2h8c1.104 0 2 .896 2 2v2H12V6z", {["fill"]: "#9A4E1C",["d"]: "M32 8h-6V4c0-2.209-1.791-4-4-4h-8c-2.209 0-4 1.791-4 4v4H4c-2.209 0-4 1.791-4 4v20c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V12c0-2.209-1.791-4-4-4zM12 6c0-1.104.896-2 2-2h8c1.104 0 2 .896 2 2v2H12V6z",}));el.appendChild(svg["path"]("M36 20c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-8c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v8z", {["fill"]: "#662113",["d"]: "M36 20c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-8c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v8z",}));el.appendChild(svg["path"]("M36 18c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-6c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v6z", {["fill"]: "#9A4E1C",["d"]: "M36 18c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-6c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v6z",}));el.appendChild(svg["path"]("M22 18c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2", {["fill"]: "#CCD6DD",["d"]: "M22 18c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};