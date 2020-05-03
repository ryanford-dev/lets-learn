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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z", {["fill"]: "#E1E8ED",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z",}));el.appendChild(svg["path"]("M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18 11.372 6 18 6s12 5.372 12 12z", {["fill"]: "#CCD6DD",["d"]: "M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18 11.372 6 18 6s12 5.372 12 12z",}));el.appendChild(svg["path"]("M29 18c0 6.075-4.925 11-11 11-6.076 0-11-4.925-11-11 0-6.076 4.925-11 11-11s11 4.924 11 11z", {["fill"]: "#E1E8ED",["d"]: "M29 18c0 6.075-4.925 11-11 11-6.076 0-11-4.925-11-11 0-6.076 4.925-11 11-11s11 4.924 11 11z",}));el.appendChild(svg["circle"](1, 1, 2, {["cy"]: "1",["fill"]: "#99AAB5",["cx"]: "1",["r"]: "1",}));el.appendChild(svg["path"]("M0 1h2v7H0z", {["d"]: "M0 1h2v7H0z",["fill"]: "#99AAB5",}));el.appendChild(svg["circle"](5, 1, 2, {["cy"]: "1",["fill"]: "#99AAB5",["cx"]: "5",["r"]: "1",}));el.appendChild(svg["path"]("M4 1h2v7H4z", {["d"]: "M4 1h2v7H4z",["fill"]: "#99AAB5",}));el.appendChild(svg["circle"](9, 1, 2, {["cy"]: "1",["fill"]: "#99AAB5",["cx"]: "9",["r"]: "1",}));el.appendChild(svg["path"]("M8 1h2v7H8zM3 14h4v20H3z", {["d"]: "M8 1h2v7H8zM3 14h4v20H3z",["fill"]: "#99AAB5",}));el.appendChild(svg["circle"](5, 34, 4, {["cy"]: "34",["fill"]: "#99AAB5",["cx"]: "5",["r"]: "2",}));el.appendChild(svg["path"]("M8 8c0 .552-.448 1-1 1s-1-.448-1-1H4c0 .552-.448 1-1 1s-1-.448-1-1H0c0 3.866 1 7 5 7s5-3.134 5-7H8z", {["d"]: "M8 8c0 .552-.448 1-1 1s-1-.448-1-1H4c0 .552-.448 1-1 1s-1-.448-1-1H0c0 3.866 1 7 5 7s5-3.134 5-7H8z",["fill"]: "#99AAB5",}));el.appendChild(svg["circle"](1, 8, 2, {["cy"]: "8",["fill"]: "#99AAB5",["cx"]: "1",["r"]: "1",}));el.appendChild(svg["circle"](5, 8, 2, {["cy"]: "8",["fill"]: "#99AAB5",["cx"]: "5",["r"]: "1",}));el.appendChild(svg["circle"](9, 8, 2, {["cy"]: "8",["fill"]: "#99AAB5",["cx"]: "9",["r"]: "1",}));el.appendChild(svg["path"]("M30 14h4v20h-4z", {["d"]: "M30 14h4v20h-4z",["fill"]: "#99AAB5",}));el.appendChild(svg["circle"](32, 34, 4, {["cy"]: "34",["fill"]: "#99AAB5",["cx"]: "32",["r"]: "2",}));el.appendChild(svg["path"]("M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z", {["d"]: "M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z",["fill"]: "#99AAB5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};