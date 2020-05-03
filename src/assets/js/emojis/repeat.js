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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M30.2 10L23 4v4h-8C9.477 8 5 12.477 5 18c0 1.414.297 2.758.827 3.978l3.3-2.75C9.044 18.831 9 18.421 9 18c0-3.314 2.686-6 6-6h8v4l7.2-6zm-.026 4.023l-3.301 2.75c.083.396.127.806.127 1.227 0 3.313-2.687 6-6 6h-8v-4l-7.2 6 7.2 6v-4h8c5.522 0 10-4.478 10-10 0-1.414-.297-2.758-.826-3.977z", {["fill"]: "#FFF",["d"]: "M30.2 10L23 4v4h-8C9.477 8 5 12.477 5 18c0 1.414.297 2.758.827 3.978l3.3-2.75C9.044 18.831 9 18.421 9 18c0-3.314 2.686-6 6-6h8v4l7.2-6zm-.026 4.023l-3.301 2.75c.083.396.127.806.127 1.227 0 3.313-2.687 6-6 6h-8v-4l-7.2 6 7.2 6v-4h8c5.522 0 10-4.478 10-10 0-1.414-.297-2.758-.826-3.977z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};