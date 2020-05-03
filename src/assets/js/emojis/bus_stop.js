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
				el.appendChild(svg["path"]("M14 7h2v29h-2z", {["fill"]: "#6D6E71",["d"]: "M14 7h2v29h-2z",}));el.appendChild(svg["path"]("M15 19h3v2h-3zm0-6h3v2h-3z", {["fill"]: "#6D6E71",["d"]: "M15 19h3v2h-3zm0-6h3v2h-3z",}));el.appendChild(svg["path"]("M29 24c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1V10c0-.552.447-1 1-1h9c.553 0 1 .448 1 1v14z", {["fill"]: "#BCBEC0",["d"]: "M29 24c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1V10c0-.552.447-1 1-1h9c.553 0 1 .448 1 1v14z",}));el.appendChild(svg["path"]("M29 13v-3c0-.552-.447-1-1-1h-9c-.553 0-1 .448-1 1v3h11z", {["fill"]: "#BE1931",["d"]: "M29 13v-3c0-.552-.447-1-1-1h-9c-.553 0-1 .448-1 1v3h11z",}));el.appendChild(svg["path"]("M21 34H9l-1 1v1h14v-1zm-2-2h-8l-1 1v1h10v-1z", {["fill"]: "#6D6E71",["d"]: "M21 34H9l-1 1v1h14v-1zm-2-2h-8l-1 1v1h10v-1z",}));el.appendChild(svg["circle"](15, 4, 8, {["cy"]: "4",["r"]: "4",["fill"]: "#BE1931",["cx"]: "15",}));el.appendChild(svg["path"]("M20 13h3v3h-3z", {["fill"]: "#808285",["d"]: "M20 13h3v3h-3z",}));el.appendChild(svg["path"]("M20 17h3v3h-3zm0 4h3v3h-3z", {["fill"]: "#F4900C",["d"]: "M20 17h3v3h-3zm0 4h3v3h-3z",}));el.appendChild(svg["path"]("M24 13h3v3h-3zm0 4h3v3h-3z", {["fill"]: "#808285",["d"]: "M24 13h3v3h-3zm0 4h3v3h-3z",}));el.appendChild(svg["path"]("M24 21h3v3h-3z", {["fill"]: "#F4900C",["d"]: "M24 21h3v3h-3z",}));el.appendChild(svg["path"]("M13 2h4v4h-4zm7 8h7v2h-7z", {["fill"]: "#DD2E44",["d"]: "M13 2h4v4h-4zm7 8h7v2h-7z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};