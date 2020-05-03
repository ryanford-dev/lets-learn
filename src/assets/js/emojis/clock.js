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
				el.appendChild(svg["path"]("M2 29l-1 6h8s1-2 3-2h6v-4H2zm32 0l1 6h-8s-1-2-3-2h-6v-4h16zM6 20c0 1 0 8-4 8l8 1-4-9zm24 0c0 1 0 8 4 8l-8 1 4-9z", {["fill"]: "#662113",["d"]: "M2 29l-1 6h8s1-2 3-2h6v-4H2zm32 0l1 6h-8s-1-2-3-2h-6v-4h16zM6 20c0 1 0 8-4 8l8 1-4-9zm24 0c0 1 0 8 4 8l-8 1 4-9z",}));el.appendChild(svg["path"]("M30 20c0 6.628-5.373 12-12 12S6 26.628 6 20c0-6.627 5.373-12 12-12s12 5.373 12 12z", {["fill"]: "#662113",["d"]: "M30 20c0 6.628-5.373 12-12 12S6 26.628 6 20c0-6.627 5.373-12 12-12s12 5.373 12 12z",}));el.appendChild(svg["path"]("M10 35c0 .553-.448 1-1 1H1c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.552 0 1 .447 1 1zm26 0c0 .553-.447 1-1 1h-8c-.553 0-1-.447-1-1 0-.553.447-1 1-1h8c.553 0 1 .447 1 1zm-1-6c0 .553-.447 1-1 1H2c-.552 0-1-.447-1-1 0-.553.448-1 1-1h32c.553 0 1 .447 1 1z", {["fill"]: "#A0041E",["d"]: "M10 35c0 .553-.448 1-1 1H1c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.552 0 1 .447 1 1zm26 0c0 .553-.447 1-1 1h-8c-.553 0-1-.447-1-1 0-.553.447-1 1-1h8c.553 0 1 .447 1 1zm-1-6c0 .553-.447 1-1 1H2c-.552 0-1-.447-1-1 0-.553.448-1 1-1h32c.553 0 1 .447 1 1z",}));el.appendChild(svg["path"]("M27 20c0 4.971-4.03 9-9 9-4.971 0-9-4.029-9-9 0-4.97 4.029-9 9-9 4.97 0 9 4.03 9 9z", {["fill"]: "#FFAC33",["d"]: "M27 20c0 4.971-4.03 9-9 9-4.971 0-9-4.029-9-9 0-4.97 4.029-9 9-9 4.97 0 9 4.03 9 9z",}));el.appendChild(svg["path"]("M26 20c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z", {["fill"]: "#F5F8FA",["d"]: "M26 20c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z",}));el.appendChild(svg["path"]("M18 20s-.119 1-1.5 1-3.5-1-3.5-1 2.119-1 3.5-1 1.5 1 1.5 1z", {["fill"]: "#C1694F",["d"]: "M18 20s-.119 1-1.5 1-3.5-1-3.5-1 2.119-1 3.5-1 1.5 1 1.5 1z",}));el.appendChild(svg["path"]("M19 16.5c0 1.933-.448 3.5-1 3.5s-1-1.566-1-3.5 1-3.499 1-3.499c0-.001 1 1.566 1 3.499z", {["fill"]: "#C1694F",["d"]: "M19 16.5c0 1.933-.448 3.5-1 3.5s-1-1.566-1-3.5 1-3.499 1-3.499c0-.001 1 1.566 1 3.499z",}));el.appendChild(svg["circle"](18, 20, 1.172, {["cy"]: "20",["r"]: ".586",["fill"]: "#662113",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};