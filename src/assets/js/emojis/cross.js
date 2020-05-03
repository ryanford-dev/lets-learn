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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#9266CC",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M26 10h-6V4c0-.552-.447-1-1-1h-2c-.552 0-1 .448-1 1v6h-6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h6v18c0 .553.448 1 1 1h2c.553 0 1-.447 1-1V14h6c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1z", {["fill"]: "#FFF",["d"]: "M26 10h-6V4c0-.552-.447-1-1-1h-2c-.552 0-1 .448-1 1v6h-6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h6v18c0 .553.448 1 1 1h2c.553 0 1-.447 1-1V14h6c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};