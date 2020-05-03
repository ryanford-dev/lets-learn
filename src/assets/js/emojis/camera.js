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
				el.appendChild(svg["path"]("M4 5s0-1 1-1h6s1 0 1 1v2H4V5z", {["fill"]: "#66757F",["d"]: "M4 5s0-1 1-1h6s1 0 1 1v2H4V5z",}));el.appendChild(svg["path"]("M0 10s0-4 4-4h28s4 0 4 4v18s0 4-4 4H4s-4 0-4-4V10z", {["fill"]: "#31373D",["d"]: "M0 10s0-4 4-4h28s4 0 4 4v18s0 4-4 4H4s-4 0-4-4V10z",}));el.appendChild(svg["circle"](21, 19, 20, {["cy"]: "19",["r"]: "10",["fill"]: "#CCD6DD",["cx"]: "21",}));el.appendChild(svg["circle"](21, 19, 16, {["cy"]: "19",["r"]: "8",["fill"]: "#31373D",["cx"]: "21",}));el.appendChild(svg["circle"](21, 19, 10, {["cy"]: "19",["r"]: "5",["fill"]: "#3B88C3",["cx"]: "21",}));el.appendChild(svg["circle"](32.5, 9.5, 3, {["cy"]: "9.5",["r"]: "1.5",["fill"]: "#FFF",["cx"]: "32.5",}));el.appendChild(svg["path"]("M12 9.5c0 .829-.671 1.5-1.5 1.5h-5C4.671 11 4 10.329 4 9.5S4.671 8 5.5 8h5c.829 0 1.5.671 1.5 1.5z", {["fill"]: "#F5F8FA",["d"]: "M12 9.5c0 .829-.671 1.5-1.5 1.5h-5C4.671 11 4 10.329 4 9.5S4.671 8 5.5 8h5c.829 0 1.5.671 1.5 1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};