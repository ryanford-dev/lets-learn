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
				el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z", {["fill"]: "#EA2839",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z",}));el.appendChild(svg["path"]("M0 13h36v10H0z", {["fill"]: "#34B232",["d"]: "M0 13h36v10H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#FECB01",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M18 8.76L20.353 16h7.613l-6.159 4.333 2.352 7.169L18 22.992l-6.159 4.458 2.353-7.107L8.035 16h7.613z", {["fill"]: "#FFF",["d"]: "M18 8.76L20.353 16h7.613l-6.159 4.333 2.352 7.169L18 22.992l-6.159 4.458 2.353-7.107L8.035 16h7.613z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};