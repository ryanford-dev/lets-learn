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
				el.appendChild(svg["path"]("M21 27c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3 .603-.006 6-1 6-5 0-2-2-4-5-4-2.441 0-4 2-4 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-4.878 4.58-9 10-9 8 0 11 5.982 11 11 0 4.145-2.277 7.313-6.413 8.92-.9.351-1.79.587-2.587.747V24c0 1.657-1.343 3-3 3z", {["fill"]: "#BE1931",["d"]: "M21 27c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3 .603-.006 6-1 6-5 0-2-2-4-5-4-2.441 0-4 2-4 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-4.878 4.58-9 10-9 8 0 11 5.982 11 11 0 4.145-2.277 7.313-6.413 8.92-.9.351-1.79.587-2.587.747V24c0 1.657-1.343 3-3 3z",}));el.appendChild(svg["circle"](21, 32, 6, {["cy"]: "32",["r"]: "3",["fill"]: "#BE1931",["cx"]: "21",}));el.appendChild(svg["circle"](6, 32, 6, {["cy"]: "32",["r"]: "3",["fill"]: "#BE1931",["cx"]: "6",}));el.appendChild(svg["path"]("M9 24c0 1.657-1.343 3-3 3s-3-1.343-3-3V5c0-1.657 1.343-3 3-3s3 1.343 3 3v19z", {["fill"]: "#BE1931",["d"]: "M9 24c0 1.657-1.343 3-3 3s-3-1.343-3-3V5c0-1.657 1.343-3 3-3s3 1.343 3 3v19z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};