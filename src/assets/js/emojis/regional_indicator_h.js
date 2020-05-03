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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M25.5 7C24.119 7 23 8.119 23 9.5V15H13V9.5C13 8.119 11.881 7 10.5 7S8 8.119 8 9.5v17c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V20h10v6.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-17C28 8.119 26.881 7 25.5 7z", {["fill"]: "#FFF",["d"]: "M25.5 7C24.119 7 23 8.119 23 9.5V15H13V9.5C13 8.119 11.881 7 10.5 7S8 8.119 8 9.5v17c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V20h10v6.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-17C28 8.119 26.881 7 25.5 7z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};