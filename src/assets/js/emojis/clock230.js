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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#99AAB5",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 28, {["cy"]: "18",["r"]: "14",["fill"]: "#E1E8ED",["cx"]: "18",}));el.appendChild(svg["path"]("M18 31c-.552 0-1-.447-1-1V18c0-.552.448-1 1-1 .553 0 1 .448 1 1v12c0 .553-.447 1-1 1z", {["fill"]: "#67757F",["d"]: "M18 31c-.552 0-1-.447-1-1V18c0-.552.448-1 1-1 .553 0 1 .448 1 1v12c0 .553-.447 1-1 1z",}));el.appendChild(svg["path"]("M18.001 19c-.312 0-.62-.146-.815-.419-.321-.449-.217-1.074.233-1.395l7-5c.448-.32 1.073-.217 1.395.233.321.449.217 1.074-.232 1.395l-7 4.999c-.177.127-.38.187-.581.187z", {["fill"]: "#67757F",["d"]: "M18.001 19c-.312 0-.62-.146-.815-.419-.321-.449-.217-1.074.233-1.395l7-5c.448-.32 1.073-.217 1.395.233.321.449.217 1.074-.232 1.395l-7 4.999c-.177.127-.38.187-.581.187z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};