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
				el.appendChild(svg["path"]("M33.912 14.37C33.588 12.602 31.976 11 30 11H9c-1 0-5.325.035-6 2L.691 19.305C.016 21.27 1 24.087 3.027 24.087c1.15 0 2.596-.028 3.998-.052C10.016 28.046 12.898 36 14 36c.849 0 1.572-3.414 1.862-6h11.25c.234 2.528.843 6 1.888 6 .954 0 2.977-4.301 4.136-10.917.431-1.901.726-4.418.824-7.647.024.172.04.356.04.564v9c0 .553.447 1 1 1s1-.447 1-1v-9c0-1.807-.749-3.053-2.088-3.63z", {["fill"]: "#C1694F",["d"]: "M33.912 14.37C33.588 12.602 31.976 11 30 11H9c-1 0-5.325.035-6 2L.691 19.305C.016 21.27 1 24.087 3.027 24.087c1.15 0 2.596-.028 3.998-.052C10.016 28.046 12.898 36 14 36c.849 0 1.572-3.414 1.862-6h11.25c.234 2.528.843 6 1.888 6 .954 0 2.977-4.301 4.136-10.917.431-1.901.726-4.418.824-7.647.024.172.04.356.04.564v9c0 .553.447 1 1 1s1-.447 1-1v-9c0-1.807-.749-3.053-2.088-3.63z",}));el.appendChild(svg["path"]("M10 12c-2 2-4.791-1-7-1-2.209 0-3-.434-3-.969 0-.535 1.791-.969 4-.969S12 10 10 12z", {["fill"]: "#CCD6DD",["d"]: "M10 12c-2 2-4.791-1-7-1-2.209 0-3-.434-3-.969 0-.535 1.791-.969 4-.969S12 10 10 12z",}));el.appendChild(svg["circle"](6, 16, 2, {["cy"]: "16",["r"]: "1",["fill"]: "#292F33",["cx"]: "6",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};