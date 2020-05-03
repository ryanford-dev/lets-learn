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
				el.appendChild(svg["circle"](7, 6, 12, {["cy"]: "6",["r"]: "6",["fill"]: "#272B2B",["cx"]: "7",}));el.appendChild(svg["circle"](29, 6, 12, {["cy"]: "6",["r"]: "6",["fill"]: "#272B2B",["cx"]: "29",}));el.appendChild(svg["circle"](7, 6, 8, {["cy"]: "6",["r"]: "4",["fill"]: "#66757F",["cx"]: "7",}));el.appendChild(svg["circle"](29, 6, 8, {["cy"]: "6",["r"]: "4",["fill"]: "#66757F",["cx"]: "29",}));el.appendChild(svg["path"]("M35 22c0 7-6.375 12-17 12S1 29 1 22C1 22 2.308 0 18 0s17 22 17 22z", {["fill"]: "#EEE",["d"]: "M35 22c0 7-6.375 12-17 12S1 29 1 22C1 22 2.308 0 18 0s17 22 17 22z",}));el.appendChild(svg["circle"](18, 30, 12, {["cy"]: "30",["r"]: "6",["fill"]: "#CCD6DD",["cx"]: "18",}));el.appendChild(svg["circle"](18, 30, 8, {["cy"]: "30",["r"]: "4",["fill"]: "#DD2E44",["cx"]: "18",}));el.appendChild(svg["path"]("M20.709 12.654C25.163 9.878 32 17 26.952 22.67 23.463 26.591 20 25 20 25s-2.636-10.26.709-12.346zm-5.442.011C10.813 9.888 3.976 17.01 9.023 22.681c3.49 3.92 6.953 2.329 6.953 2.329s2.636-10.26-.709-12.345z", {["fill"]: "#272B2B",["d"]: "M20.709 12.654C25.163 9.878 32 17 26.952 22.67 23.463 26.591 20 25 20 25s-2.636-10.26.709-12.346zm-5.442.011C10.813 9.888 3.976 17.01 9.023 22.681c3.49 3.92 6.953 2.329 6.953 2.329s2.636-10.26-.709-12.345z",}));el.appendChild(svg["path"]("M11 17s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z", {["fill"]: "#66757F",["d"]: "M11 17s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z",}));el.appendChild(svg["path"]("M18 20S7 23.687 7 27s2.687 6 6 6c2.088 0 3.925-1.067 5-2.685C19.074 31.933 20.912 33 23 33c3.313 0 6-2.687 6-6s-11-7-11-7z", {["fill"]: "#FFF",["d"]: "M18 20S7 23.687 7 27s2.687 6 6 6c2.088 0 3.925-1.067 5-2.685C19.074 31.933 20.912 33 23 33c3.313 0 6-2.687 6-6s-11-7-11-7z",}));el.appendChild(svg["path"]("M21 17s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z", {["fill"]: "#66757F",["d"]: "M21 17s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z",}));el.appendChild(svg["path"]("M13.125 25c-1.624 1 3.25 4 4.875 4s6.499-3 4.874-4-8.124-1-9.749 0z", {["fill"]: "#272B2B",["d"]: "M13.125 25c-1.624 1 3.25 4 4.875 4s6.499-3 4.874-4-8.124-1-9.749 0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};