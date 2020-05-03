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
				el.appendChild(svg["path"]("M28 13c0 11 5 10 5 15 0 0 0 2-2 2H5c-2 0-2-2-2-2 0-5 5-4 5-15C8 7.478 12.477 3 18 3s10 4.478 10 10z", {["fill"]: "#FFAC33",["d"]: "M28 13c0 11 5 10 5 15 0 0 0 2-2 2H5c-2 0-2-2-2-2 0-5 5-4 5-15C8 7.478 12.477 3 18 3s10 4.478 10 10z",}));el.appendChild(svg["circle"](18, 3, 6, {["cy"]: "3",["r"]: "3",["fill"]: "#FFAC33",["cx"]: "18",}));el.appendChild(svg["path"]("M18 36c2.209 0 4-1.791 4-4h-8c0 2.209 1.791 4 4 4z", {["fill"]: "#FFAC33",["d"]: "M18 36c2.209 0 4-1.791 4-4h-8c0 2.209 1.791 4 4 4z",}));el.appendChild(svg["path"]("M31.003 33.003L3.997 5.997c-.551-.551-.551-1.443 0-1.994l.006-.006c.551-.551 1.443-.551 1.994 0l27.006 27.006c.551.551.551 1.443 0 1.994l-.006.006c-.551.551-1.443.551-1.994 0z", {["fill"]: "#DD2E44",["d"]: "M31.003 33.003L3.997 5.997c-.551-.551-.551-1.443 0-1.994l.006-.006c.551-.551 1.443-.551 1.994 0l27.006 27.006c.551.551.551 1.443 0 1.994l-.006.006c-.551.551-1.443.551-1.994 0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};