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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#9266CC",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M23 6h-3V4c0-.552-.447-1-1-1h-2c-.552 0-1 .448-1 1v2h-3c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h3v22c0 .553.448 1 1 1h2c.553 0 1-.447 1-1V10h3c.553 0 1-.448 1-1V7c0-.552-.447-1-1-1z", {["fill"]: "#FFF",["d"]: "M23 6h-3V4c0-.552-.447-1-1-1h-2c-.552 0-1 .448-1 1v2h-3c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h3v22c0 .553.448 1 1 1h2c.553 0 1-.447 1-1V10h3c.553 0 1-.448 1-1V7c0-.552-.447-1-1-1z",}));el.appendChild(svg["path"]("M29 13H7c-.552 0-1 .448-1 1v2c0 .553.448 1 1 1h22c.553 0 1-.447 1-1v-2c0-.552-.447-1-1-1zm-4.676 11.924l-11.429-3.657c-.526-.168-1.089.122-1.257.648l-.61 1.905c-.168.526.122 1.089.648 1.257l11.429 3.657c.526.168 1.089-.121 1.257-.648l.61-1.905c.168-.526-.121-1.089-.648-1.257z", {["fill"]: "#FFF",["d"]: "M29 13H7c-.552 0-1 .448-1 1v2c0 .553.448 1 1 1h22c.553 0 1-.447 1-1v-2c0-.552-.447-1-1-1zm-4.676 11.924l-11.429-3.657c-.526-.168-1.089.122-1.257.648l-.61 1.905c-.168.526.122 1.089.648 1.257l11.429 3.657c.526.168 1.089-.121 1.257-.648l.61-1.905c.168-.526-.121-1.089-.648-1.257z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};