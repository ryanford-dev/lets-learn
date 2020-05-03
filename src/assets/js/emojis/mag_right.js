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
				el.appendChild(svg["path"]("M13.503 19.693l2.828 2.828-4.95 4.95-2.828-2.829z", {["fill"]: "#9AAAB4",["d"]: "M13.503 19.693l2.828 2.828-4.95 4.95-2.828-2.829z",}));el.appendChild(svg["path"]("M1.257 29.11l5.88-5.879c.781-.781 2.047-.781 2.828 0l2.828 2.828c.781.781.781 2.047 0 2.828l-5.879 5.879c-1.562 1.563-4.096 1.563-5.658 0-1.561-1.561-1.56-4.094.001-5.656z", {["fill"]: "#66757F",["d"]: "M1.257 29.11l5.88-5.879c.781-.781 2.047-.781 2.828 0l2.828 2.828c.781.781.781 2.047 0 2.828l-5.879 5.879c-1.562 1.563-4.096 1.563-5.658 0-1.561-1.561-1.56-4.094.001-5.656z",}));el.appendChild(svg["circle"](22.355, 13.669, 27, {["cy"]: "13.669",["r"]: "13.5",["fill"]: "#8899A6",["cx"]: "22.355",}));el.appendChild(svg["circle"](22.355, 13.669, 19, {["cy"]: "13.669",["r"]: "9.5",["fill"]: "#BBDDF5",["cx"]: "22.355",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};