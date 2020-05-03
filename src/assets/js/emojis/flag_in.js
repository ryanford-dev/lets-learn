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
				el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z", {["fill"]: "#138808",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z",}));el.appendChild(svg["path"]("M0 13h36v10H0z", {["fill"]: "#EEE",["d"]: "M0 13h36v10H0z",}));el.appendChild(svg["path"]("M36 13V9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9v4h36z", {["fill"]: "#F93",["d"]: "M36 13V9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9v4h36z",}));el.appendChild(svg["circle"](18, 18, 8, {["cy"]: "18",["r"]: "4",["fill"]: "navy",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 6, {["cy"]: "18",["r"]: "3",["fill"]: "#EEE",["cx"]: "18",}));el.appendChild(svg["path"]("M18 15l.146 2.264 1.001-2.035-.73 2.147 1.704-1.498-1.497 1.705 2.147-.731-2.035 1.002L21 18l-2.264.146 2.035 1.001-2.147-.73 1.497 1.704-1.704-1.497.73 2.147-1.001-2.035L18 21l-.146-2.264-1.002 2.035.731-2.147-1.705 1.497 1.498-1.704-2.147.73 2.035-1.001L15 18l2.264-.146-2.035-1.002 2.147.731-1.498-1.705 1.705 1.498-.731-2.147 1.002 2.035z", {["fill"]: "#6666B3",["d"]: "M18 15l.146 2.264 1.001-2.035-.73 2.147 1.704-1.498-1.497 1.705 2.147-.731-2.035 1.002L21 18l-2.264.146 2.035 1.001-2.147-.73 1.497 1.704-1.704-1.497.73 2.147-1.001-2.035L18 21l-.146-2.264-1.002 2.035.731-2.147-1.705 1.497 1.498-1.704-2.147.73 2.035-1.001L15 18l2.264-.146-2.035-1.002 2.147.731-1.498-1.705 1.705 1.498-.731-2.147 1.002 2.035z",}));el.appendChild(svg["circle"](18, 18, 2, {["cy"]: "18",["r"]: "1",["fill"]: "navy",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};