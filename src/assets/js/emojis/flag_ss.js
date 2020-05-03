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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v3h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#141414",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v3h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-3H0v3z", {["fill"]: "#078930",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-3H0v3z",}));el.appendChild(svg["path"]("M0 12h36v12H0z", {["fill"]: "#DA121A",["d"]: "M0 12h36v12H0z",}));el.appendChild(svg["path"]("M0 12h36v2H0zm0 10h36v2H0z", {["d"]: "M0 12h36v2H0zm0 10h36v2H0z",["fill"]: "#EEE",}));el.appendChild(svg["path"]("M1.351 6.004H1.35C.522 6.737 0 7.808 0 9.267v18c0 .926.522 1.997 1.351 2.729L17.5 18 1.351 6.004z", {["fill"]: "#0F47AF",["d"]: "M1.351 6.004H1.35C.522 6.737 0 7.808 0 9.267v18c0 .926.522 1.997 1.351 2.729L17.5 18 1.351 6.004z",}));el.appendChild(svg["path"]("M8.249 17.917l1.777-2.446-2.875.934-1.776-2.445v3.023l-2.875.934 2.875.934v3.022l1.776-2.445 2.875.934z", {["fill"]: "#FCDD09",["d"]: "M8.249 17.917l1.777-2.446-2.875.934-1.776-2.445v3.023l-2.875.934 2.875.934v3.022l1.776-2.445 2.875.934z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};