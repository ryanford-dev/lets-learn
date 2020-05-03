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
				el.appendChild(svg["path"]("M35 8H13c-.552 0-1 .448-1 1s.448 1 1 1h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2c.553 0 1-.448 1-1s-.447-1-1-1zm1 5c0 .552-.447 1-1 1H13c-.552 0-1-.448-1-1s.448-1 1-1h22c.553 0 1 .448 1 1z", {["fill"]: "#CCD6DD",["d"]: "M35 8H13c-.552 0-1 .448-1 1s.448 1 1 1h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2c.553 0 1-.448 1-1s-.447-1-1-1zm1 5c0 .552-.447 1-1 1H13c-.552 0-1-.448-1-1s.448-1 1-1h22c.553 0 1 .448 1 1z",}));el.appendChild(svg["path"]("M32 14H14s.041-2-2.979-2H5.146C0 12 0 19.959 0 19.959V27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9c0-2.209-1.791-4-4-4z", {["fill"]: "#DD2E44",["d"]: "M32 14H14s.041-2-2.979-2H5.146C0 12 0 19.959 0 19.959V27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M2 22h32v3H2z", {["fill"]: "#F5F8FA",["d"]: "M2 22h32v3H2z",}));el.appendChild(svg["circle"](7, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "7",}));el.appendChild(svg["circle"](7, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#8899A6",["cx"]: "7",}));el.appendChild(svg["circle"](28, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "28",}));el.appendChild(svg["circle"](28, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#8899A6",["cx"]: "28",}));el.appendChild(svg["path"]("M7 20H2s0-6 3-6h2v6zm5 0H9v-6h1c1 0 2 1 2 2v4z", {["fill"]: "#55ACEE",["d"]: "M7 20H2s0-6 3-6h2v6zm5 0H9v-6h1c1 0 2 1 2 2v4z",}));el.appendChild(svg["path"]("M8 11c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1z", {["fill"]: "#FFAC33",["d"]: "M8 11c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1z",}));el.appendChild(svg["path"]("M10 11c0 .552-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1z", {["fill"]: "#3B88C3",["d"]: "M10 11c0 .552-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};