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
				el.appendChild(svg["path"]("M17 36c-.512 0-1.024-.195-1.414-.586l-11-11C4.211 24.039 4 23.53 4 23V2C4 1.191 4.487.462 5.235.152c.747-.311 1.608-.139 2.179.434L17 10.171 26.586.586c.572-.573 1.431-.744 2.18-.434C29.513.462 30 1.191 30 2v21c0 .53-.211 1.039-.586 1.414l-11 11c-.39.391-.902.586-1.414.586z", {["fill"]: "#66757F",["d"]: "M17 36c-.512 0-1.024-.195-1.414-.586l-11-11C4.211 24.039 4 23.53 4 23V2C4 1.191 4.487.462 5.235.152c.747-.311 1.608-.139 2.179.434L17 10.171 26.586.586c.572-.573 1.431-.744 2.18-.434C29.513.462 30 1.191 30 2v21c0 .53-.211 1.039-.586 1.414l-11 11c-.39.391-.902.586-1.414.586z",}));el.appendChild(svg["path"]("M17 13L28 2v21L17 34z", {["fill"]: "#47DED4",["d"]: "M17 13L28 2v21L17 34z",}));el.appendChild(svg["path"]("M6 2l11 11v21L6 23z", {["fill"]: "#FFFF87",["d"]: "M6 2l11 11v21L6 23z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};