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
				el.appendChild(svg["path"]("M11 27c0 1.104-.896 2-2 2s-2-.896-2-2V16c0-1.104.896-2 2-2s2 .896 2 2v11zm20 0c0 1.104-.896 2-2 2s-2-.896-2-2V16c0-1.104.896-2 2-2s2 .896 2 2v11z", {["fill"]: "#9AAAB4",["d"]: "M11 27c0 1.104-.896 2-2 2s-2-.896-2-2V16c0-1.104.896-2 2-2s2 .896 2 2v11zm20 0c0 1.104-.896 2-2 2s-2-.896-2-2V16c0-1.104.896-2 2-2s2 .896 2 2v11z",}));el.appendChild(svg["path"]("M29 34c0 1.104-.896 2-2 2s-2-.896-2-2v-6c0-1.104.896-2 2-2s2 .896 2 2v6zm-16 0c0 1.104-.896 2-2 2s-2-.896-2-2v-6c0-1.104.896-2 2-2s2 .896 2 2v6z", {["fill"]: "#67757F",["d"]: "M29 34c0 1.104-.896 2-2 2s-2-.896-2-2v-6c0-1.104.896-2 2-2s2 .896 2 2v6zm-16 0c0 1.104-.896 2-2 2s-2-.896-2-2v-6c0-1.104.896-2 2-2s2 .896 2 2v6z",}));el.appendChild(svg["path"]("M29 18c0 2.209-1.791 4-4 4H13c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v14z", {["fill"]: "#4289C1",["d"]: "M29 18c0 2.209-1.791 4-4 4H13c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v14z",}));el.appendChild(svg["path"]("M15 0h8v8h-8z", {["fill"]: "#E1E8ED",["d"]: "M15 0h8v8h-8z",}));el.appendChild(svg["path"]("M11 15c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2s.896-2 2-2h2c1.104 0 2 .896 2 2zm22 0c0 1.104-.896 2-2 2h-2c-1.104 0-2-.896-2-2s.896-2 2-2h2c1.104 0 2 .896 2 2z", {["fill"]: "#CCD6DD",["d"]: "M11 15c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2s.896-2 2-2h2c1.104 0 2 .896 2 2zm22 0c0 1.104-.896 2-2 2h-2c-1.104 0-2-.896-2-2s.896-2 2-2h2c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M29 23c0 1.657-1.343 3-3 3H12c-1.657 0-3-1.343-3-3s1.343-3 3-3h14c1.657 0 3 1.343 3 3z", {["fill"]: "#5DADEC",["d"]: "M29 23c0 1.657-1.343 3-3 3H12c-1.657 0-3-1.343-3-3s1.343-3 3-3h14c1.657 0 3 1.343 3 3z",}));el.appendChild(svg["path"]("M9 23h20v6H9z", {["fill"]: "#2A6797",["d"]: "M9 23h20v6H9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};