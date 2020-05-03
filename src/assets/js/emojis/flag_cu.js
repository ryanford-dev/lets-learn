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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#002A8F",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M13.846 15H36v-5H6.923zM6.923 26H36v-5H13.846z", {["fill"]: "#EEE",["d"]: "M13.846 15H36v-5H6.923zM6.923 26H36v-5H13.846z",}));el.appendChild(svg["path"]("M13.846 15l-6.923-5-5.541-4.002C.542 6.731 0 7.797 0 9v18c0 1.203.542 2.269 1.382 3.002L6.923 26l6.923-5L18 18l-4.154-3z", {["fill"]: "#CF142B",["d"]: "M13.846 15l-6.923-5-5.541-4.002C.542 6.731 0 7.797 0 9v18c0 1.203.542 2.269 1.382 3.002L6.923 26l6.923-5L18 18l-4.154-3z",}));el.appendChild(svg["path"]("M7.495 18.602L9.5 17.149H7.022l-.769-2.362-.772 2.362H3l2.006 1.454-.771 2.36 2.015-1.459 2.015 1.459z", {["fill"]: "#FFF",["d"]: "M7.495 18.602L9.5 17.149H7.022l-.769-2.362-.772 2.362H3l2.006 1.454-.771 2.36 2.015-1.459 2.015 1.459z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};