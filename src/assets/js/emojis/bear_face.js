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
				el.appendChild(svg["circle"](7, 6, 12, {["cy"]: "6",["r"]: "6",["fill"]: "#C1694F",["cx"]: "7",}));el.appendChild(svg["circle"](29, 6, 12, {["cy"]: "6",["r"]: "6",["fill"]: "#C1694F",["cx"]: "29",}));el.appendChild(svg["circle"](7, 6, 8, {["cy"]: "6",["r"]: "4",["fill"]: "#E6AAAA",["cx"]: "7",}));el.appendChild(svg["circle"](29, 6, 8, {["cy"]: "6",["r"]: "4",["fill"]: "#E6AAAA",["cx"]: "29",}));el.appendChild(svg["path"]("M35 22S33.692 0 18 0 1 22 1 22c0 5.872 4.499 10.323 12.216 11.61C14.311 35.06 16.044 36 18 36s3.688-.94 4.784-2.39C30.501 32.323 35 27.872 35 22z", {["fill"]: "#C1694F",["d"]: "M35 22S33.692 0 18 0 1 22 1 22c0 5.872 4.499 10.323 12.216 11.61C14.311 35.06 16.044 36 18 36s3.688-.94 4.784-2.39C30.501 32.323 35 27.872 35 22z",}));el.appendChild(svg["circle"](18, 30, 8, {["cy"]: "30",["r"]: "4",["fill"]: "#DD2E44",["cx"]: "18",}));el.appendChild(svg["path"]("M18 20S7 23.687 7 27s2.687 6 6 6c2.088 0 3.925-1.067 5-2.685C19.074 31.933 20.912 33 23 33c3.313 0 6-2.687 6-6s-11-7-11-7z", {["fill"]: "#D99E82",["d"]: "M18 20S7 23.687 7 27s2.687 6 6 6c2.088 0 3.925-1.067 5-2.685C19.074 31.933 20.912 33 23 33c3.313 0 6-2.687 6-6s-11-7-11-7z",}));el.appendChild(svg["path"]("M11 17s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2zm10 0s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2zm-7.875 8c-1.624 1 3.25 4 4.875 4s6.499-3 4.874-4-8.124-1-9.749 0z", {["fill"]: "#272B2B",["d"]: "M11 17s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2zm10 0s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2zm-7.875 8c-1.624 1 3.25 4 4.875 4s6.499-3 4.874-4-8.124-1-9.749 0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};