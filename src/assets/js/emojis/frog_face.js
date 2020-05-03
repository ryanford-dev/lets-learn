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
				el.appendChild(svg["path"]("M36 22c0 7.456-8.059 12-18 12S0 29.456 0 22 8.059 7 18 7s18 7.544 18 15z", {["fill"]: "#C6E5B3",["d"]: "M36 22c0 7.456-8.059 12-18 12S0 29.456 0 22 8.059 7 18 7s18 7.544 18 15z",}));el.appendChild(svg["path"]("M31.755 12.676C33.123 11.576 34 9.891 34 8c0-3.313-2.687-6-6-6-2.861 0-5.25 2.004-5.851 4.685-1.288-.483-2.683-.758-4.149-.758-1.465 0-2.861.275-4.149.758C13.25 4.004 10.861 2 8 2 4.687 2 2 4.687 2 8c0 1.891.877 3.576 2.245 4.676C1.6 15.356 0 18.685 0 22c0 7.456 8.059 1 18 1s18 6.456 18-1c0-3.315-1.6-6.644-4.245-9.324z", {["fill"]: "#77B255",["d"]: "M31.755 12.676C33.123 11.576 34 9.891 34 8c0-3.313-2.687-6-6-6-2.861 0-5.25 2.004-5.851 4.685-1.288-.483-2.683-.758-4.149-.758-1.465 0-2.861.275-4.149.758C13.25 4.004 10.861 2 8 2 4.687 2 2 4.687 2 8c0 1.891.877 3.576 2.245 4.676C1.6 15.356 0 18.685 0 22c0 7.456 8.059 1 18 1s18 6.456 18-1c0-3.315-1.6-6.644-4.245-9.324z",}));el.appendChild(svg["circle"](7.5, 7.5, 7, {["cy"]: "7.5",["r"]: "3.5",["fill"]: "#FFF",["cx"]: "7.5",}));el.appendChild(svg["circle"](7.5, 7.5, 3, {["cy"]: "7.5",["r"]: "1.5",["fill"]: "#292F33",["cx"]: "7.5",}));el.appendChild(svg["circle"](28.5, 7.5, 7, {["cy"]: "7.5",["r"]: "3.5",["fill"]: "#FFF",["cx"]: "28.5",}));el.appendChild(svg["circle"](28.5, 7.5, 3, {["cy"]: "7.5",["r"]: "1.5",["fill"]: "#292F33",["cx"]: "28.5",}));el.appendChild(svg["circle"](14, 20, 2, {["cy"]: "20",["r"]: "1",["fill"]: "#5C913B",["cx"]: "14",}));el.appendChild(svg["circle"](22, 20, 2, {["cy"]: "20",["r"]: "1",["fill"]: "#5C913B",["cx"]: "22",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};