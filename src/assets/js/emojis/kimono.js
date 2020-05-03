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
				el.appendChild(svg["path"]("M22 0h3l5 2.808 5 23.307L26 27l-6-16.423M14 0h-3L6 2.808 1 26.115 10 27l6-16.423", {["fill"]: "#3B88C3",["d"]: "M22 0h3l5 2.808 5 23.307L26 27l-6-16.423M14 0h-3L6 2.808 1 26.115 10 27l6-16.423",}));el.appendChild(svg["path"]("M11 5h14v31H11z", {["fill"]: "#3B88C3",["d"]: "M11 5h14v31H11z",}));el.appendChild(svg["path"]("M17.985 8.761L11 14h2l5.094-5.094z", {["fill"]: "#269",["d"]: "M17.985 8.761L11 14h2l5.094-5.094z",}));el.appendChild(svg["path"]("M25 20s-1.167 1-7 1-7-1-7-1v-6h14v6z", {["fill"]: "#88C9F9",["d"]: "M25 20s-1.167 1-7 1-7-1-7-1v-6h14v6z",}));el.appendChild(svg["path"]("M25 18s-1.167 1-7 1-7-1-7-1v-2h14v2zm0-18l-7 9-7-9z", {["fill"]: "#FFF",["d"]: "M25 18s-1.167 1-7 1-7-1-7-1v-2h14v2zm0-18l-7 9-7-9z",}));el.appendChild(svg["path"]("M20.333 0L18 3l-2.333-3z", {["fill"]: "#99AAB5",["d"]: "M20.333 0L18 3l-2.333-3z",}));el.appendChild(svg["path"]("M25 25V4l2 23zm-14 0V4L9 27z", {["fill"]: "#269",["d"]: "M25 25V4l2 23zm-14 0V4L9 27z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};