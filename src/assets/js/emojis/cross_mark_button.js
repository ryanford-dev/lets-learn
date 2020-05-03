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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#77B255",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M21.529 18.006l8.238-8.238c.977-.976.977-2.559 0-3.535-.977-.977-2.559-.977-3.535 0l-8.238 8.238-8.238-8.238c-.976-.977-2.56-.977-3.535 0-.977.976-.977 2.559 0 3.535l8.238 8.238-8.258 8.258c-.977.977-.977 2.559 0 3.535.488.488 1.128.732 1.768.732s1.28-.244 1.768-.732l8.258-8.259 8.238 8.238c.488.488 1.128.732 1.768.732s1.279-.244 1.768-.732c.977-.977.977-2.559 0-3.535l-8.24-8.237z", {["fill"]: "#FFF",["d"]: "M21.529 18.006l8.238-8.238c.977-.976.977-2.559 0-3.535-.977-.977-2.559-.977-3.535 0l-8.238 8.238-8.238-8.238c-.976-.977-2.56-.977-3.535 0-.977.976-.977 2.559 0 3.535l8.238 8.238-8.258 8.258c-.977.977-.977 2.559 0 3.535.488.488 1.128.732 1.768.732s1.28-.244 1.768-.732l8.258-8.259 8.238 8.238c.488.488 1.128.732 1.768.732s1.279-.244 1.768-.732c.977-.977.977-2.559 0-3.535l-8.24-8.237z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};