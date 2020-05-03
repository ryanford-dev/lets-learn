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
				el.appendChild(svg["ellipse"](18, 23, 36, 20, {["rx"]: "18",["cy"]: "23",["ry"]: "10",["fill"]: "#939598",["cx"]: "18",}));el.appendChild(svg["ellipse"](18, 21, 36, 20, {["rx"]: "18",["cy"]: "21",["ry"]: "10",["fill"]: "#F1F2F2",["cx"]: "18",}));el.appendChild(svg["path"]("M31 20c0 3.988-5.82 7.223-13 7.223S5 23.988 5 20s5.82-7.222 13-7.222S31 16.012 31 20z", {["fill"]: "#C1694F",["d"]: "M31 20c0 3.988-5.82 7.223-13 7.223S5 23.988 5 20s5.82-7.222 13-7.222S31 16.012 31 20z",}));el.appendChild(svg["ellipse"](18, 20, 22, 11.112, {["rx"]: "11",["cy"]: "20",["ry"]: "5.556",["fill"]: "#8A4B38",["cx"]: "18",}));el.appendChild(svg["path"]("M18 7c3.383 0 4.724 2 5.921 2 1.691 0 2.537 2 4.229 9 .697 2.885-4.229 6-10.149 6-5.92 0-10.846-3.115-10.149-6 1.692-7 2.538-9 4.229-9C13.275 9 14.617 7 18 7z", {["fill"]: "#FFCC4D",["d"]: "M18 7c3.383 0 4.724 2 5.921 2 1.691 0 2.537 2 4.229 9 .697 2.885-4.229 6-10.149 6-5.92 0-10.846-3.115-10.149-6 1.692-7 2.538-9 4.229-9C13.275 9 14.617 7 18 7z",}));el.appendChild(svg["path"]("M25.612 11c0 2.209-3.408 4-7.612 4s-7.612-1.791-7.612-4S13.796 7 18 7s7.612 1.791 7.612 4z", {["fill"]: "#662113",["d"]: "M25.612 11c0 2.209-3.408 4-7.612 4s-7.612-1.791-7.612-4S13.796 7 18 7s7.612 1.791 7.612 4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};