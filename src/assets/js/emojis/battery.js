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
				el.appendChild(svg["path"]("M24 4c0 2.209-1.791 4-4 4h-4c-2.209 0-4-1.791-4-4s1.791-4 4-4h4c2.209 0 4 1.791 4 4z", {["fill"]: "#CCD6DD",["d"]: "M24 4c0 2.209-1.791 4-4 4h-4c-2.209 0-4-1.791-4-4s1.791-4 4-4h4c2.209 0 4 1.791 4 4z",}));el.appendChild(svg["path"]("M30 32c0 2.209-1.791 4-4 4H10c-2.209 0-4-1.791-4-4V8c0-2.209 1.791-4 4-4h16c2.209 0 4 1.791 4 4v24z", {["fill"]: "#E1E8ED",["d"]: "M30 32c0 2.209-1.791 4-4 4H10c-2.209 0-4-1.791-4-4V8c0-2.209 1.791-4 4-4h16c2.209 0 4 1.791 4 4v24z",}));el.appendChild(svg["path"]("M6 8h24v24H6z", {["fill"]: "#77B255",["d"]: "M6 8h24v24H6z",}));el.appendChild(svg["path"]("M23 14h-3v-3c0-.552-.447-1-1-1h-2c-.552 0-1 .448-1 1v3h-3c-.553 0-1 .448-1 1v2c0 .553.447 1 1 1h3v3c0 .553.448 1 1 1h2c.553 0 1-.447 1-1v-3h3c.553 0 1-.447 1-1v-2c0-.552-.447-1-1-1zM13 30c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h10c.553 0 1 .447 1 1v2c0 .553-.447 1-1 1H13z", {["fill"]: "#F5F8FA",["d"]: "M23 14h-3v-3c0-.552-.447-1-1-1h-2c-.552 0-1 .448-1 1v3h-3c-.553 0-1 .448-1 1v2c0 .553.447 1 1 1h3v3c0 .553.448 1 1 1h2c.553 0 1-.447 1-1v-3h3c.553 0 1-.447 1-1v-2c0-.552-.447-1-1-1zM13 30c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h10c.553 0 1 .447 1 1v2c0 .553-.447 1-1 1H13z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};