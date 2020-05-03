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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#99AAB5",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 28, {["cy"]: "18",["r"]: "14",["fill"]: "#E1E8ED",["cx"]: "18",}));el.appendChild(svg["path"]("M19 18c0 .553-.447 1-1 1-.552 0-1-.447-1-1V7c0-.552.448-1 1-1 .553 0 1 .448 1 1v11z", {["fill"]: "#66757F",["d"]: "M19 18c0 .553-.447 1-1 1-.552 0-1-.447-1-1V7c0-.552.448-1 1-1 .553 0 1 .448 1 1v11z",}));el.appendChild(svg["path"]("M26.66 23c-.275.479-.887.643-1.365.367l-7.795-4.5c-.478-.276-.642-.889-.366-1.367s.887-.642 1.366-.365l7.795 4.5c.478.276.642.887.365 1.365z", {["fill"]: "#66757F",["d"]: "M26.66 23c-.275.479-.887.643-1.365.367l-7.795-4.5c-.478-.276-.642-.889-.366-1.367s.887-.642 1.366-.365l7.795 4.5c.478.276.642.887.365 1.365z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};