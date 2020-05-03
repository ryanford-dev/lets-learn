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
				el.appendChild(svg["path"]("M36 15c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V7c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v8z", {["fill"]: "#FFCC4D",["d"]: "M36 15c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V7c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v8z",}));el.appendChild(svg["path"]("M6 3H4C1.791 3 0 4.791 0 7v2l6-6zm6 0L0 15c0 1.36.682 2.558 1.72 3.28L17 3h-5zM7 19h5L28 3h-5zm16 0L35.892 6.108c-.281-1.23-1.126-2.24-2.252-2.748L18 19h5zm13-4v-3l-7 7h3c2.209 0 4-1.791 4-4z", {["d"]: "M6 3H4C1.791 3 0 4.791 0 7v2l6-6zm6 0L0 15c0 1.36.682 2.558 1.72 3.28L17 3h-5zM7 19h5L28 3h-5zm16 0L35.892 6.108c-.281-1.23-1.126-2.24-2.252-2.748L18 19h5zm13-4v-3l-7 7h3c2.209 0 4-1.791 4-4z",["fill"]: "#292F33",}));el.appendChild(svg["path"]("M4 19h5v14H4zm23 0h5v14h-5z", {["fill"]: "#99AAB5",["d"]: "M4 19h5v14H4zm23 0h5v14h-5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};