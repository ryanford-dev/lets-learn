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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#99AAB5",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 28, {["cy"]: "18",["r"]: "14",["fill"]: "#E1E8ED",["cx"]: "18",}));el.appendChild(svg["path"]("M18 19c-.552 0-1-.447-1-1V6c0-.552.448-1 1-1 .553 0 1 .448 1 1v12c0 .553-.447 1-1 1z", {["fill"]: "#67757F",["d"]: "M18 19c-.552 0-1-.447-1-1V6c0-.552.448-1 1-1 .553 0 1 .448 1 1v12c0 .553-.447 1-1 1z",}));el.appendChild(svg["path"]("M18.001 19c-.367 0-.72-.202-.896-.553l-4-8c-.247-.494-.047-1.095.447-1.342.496-.248 1.095-.046 1.342.447l4 8c.247.494.047 1.095-.447 1.342-.143.072-.296.106-.446.106z", {["fill"]: "#67757F",["d"]: "M18.001 19c-.367 0-.72-.202-.896-.553l-4-8c-.247-.494-.047-1.095.447-1.342.496-.248 1.095-.046 1.342.447l4 8c.247.494.047 1.095-.447 1.342-.143.072-.296.106-.446.106z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};