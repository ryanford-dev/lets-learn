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
				el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-1.3H0V27z", {["fill"]: "#5BCEFA",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-1.3H0V27z",}));el.appendChild(svg["path"]("M.026 20.5L0 25.8h36v-5.3z", {["fill"]: "#F5A9B8",["d"]: "M.026 20.5L0 25.8h36v-5.3z",}));el.appendChild(svg["path"]("M0 15.3h36v5.3H0z", {["fill"]: "#EEE",["d"]: "M0 15.3h36v5.3H0z",}));el.appendChild(svg["path"]("M.026 10.1L0 15.4h36v-5.3z", {["fill"]: "#F5A9B8",["d"]: "M.026 10.1L0 15.4h36v-5.3z",}));el.appendChild(svg["path"]("M36 9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9v1.2h36V9z", {["fill"]: "#5BCEFA",["d"]: "M36 9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9v1.2h36V9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};