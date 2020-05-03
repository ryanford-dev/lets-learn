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
				el.appendChild(svg["circle"](11, 31, 6, {["cy"]: "31",["r"]: "3",["fill"]: "#BE1931",["cx"]: "11",}));el.appendChild(svg["path"]("M14 23c0 1.657-1.343 3-3 3s-3-1.343-3-3V4c0-1.657 1.343-3 3-3s3 1.343 3 3v19z", {["fill"]: "#BE1931",["d"]: "M14 23c0 1.657-1.343 3-3 3s-3-1.343-3-3V4c0-1.657 1.343-3 3-3s3 1.343 3 3v19z",}));el.appendChild(svg["circle"](25, 31, 6, {["cy"]: "31",["r"]: "3",["fill"]: "#BE1931",["cx"]: "25",}));el.appendChild(svg["path"]("M28 23c0 1.657-1.344 3-3 3s-3-1.343-3-3V4c0-1.657 1.344-3 3-3s3 1.343 3 3v19z", {["fill"]: "#BE1931",["d"]: "M28 23c0 1.657-1.344 3-3 3s-3-1.343-3-3V4c0-1.657 1.344-3 3-3s3 1.343 3 3v19z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};