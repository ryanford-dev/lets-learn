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
				el.appendChild(svg["path"]("M13 32h20s3 0 3-4c0-2 0-6-1-7s-8-7-11-7h-6c-3 0-10 7-10 7l-4 1s-3 1-3 3v3s-1 .338-1 1.957C0 32 2 32 2 32h11z", {["fill"]: "#DD2E44",["d"]: "M13 32h20s3 0 3-4c0-2 0-6-1-7s-8-7-11-7h-6c-3 0-10 7-10 7l-4 1s-3 1-3 3v3s-1 .338-1 1.957C0 32 2 32 2 32h11z",}));el.appendChild(svg["path"]("M20 16h-2c-2 0-8 6-8 6s4.997-.263 10-.519V16zm10 3c-1-1-5-3-7-3h-1v5.379c4.011-.204 7.582-.379 8-.379 1 0 1-1 0-2z", {["fill"]: "#BBDDF5",["d"]: "M20 16h-2c-2 0-8 6-8 6s4.997-.263 10-.519V16zm10 3c-1-1-5-3-7-3h-1v5.379c4.011-.204 7.582-.379 8-.379 1 0 1-1 0-2z",}));el.appendChild(svg["circle"](10, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "10",}));el.appendChild(svg["circle"](10, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "10",}));el.appendChild(svg["circle"](27, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "27",}));el.appendChild(svg["circle"](27, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "27",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};