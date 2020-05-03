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
				el.appendChild(svg["path"]("M32 28H4V4c0-2.209 1.791-4 4-4h20c2.209 0 4 1.791 4 4v24z", {["fill"]: "#DD2E44",["d"]: "M32 28H4V4c0-2.209 1.791-4 4-4h20c2.209 0 4 1.791 4 4v24z",}));el.appendChild(svg["path"]("M8 36h20c2.209 0 4-1.791 4-4v-4c-4.117-2.744-21.139-8.233-28 0v4c0 2.209 1.791 4 4 4z", {["d"]: "M8 36h20c2.209 0 4-1.791 4-4v-4c-4.117-2.744-21.139-8.233-28 0v4c0 2.209 1.791 4 4 4z",}));el.appendChild(svg["circle"](15.276, 12.495, 15.156, {["cy"]: "12.495",["r"]: "7.578",["fill"]: "#FFF",["cx"]: "15.276",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};