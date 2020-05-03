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
				el.appendChild(svg["path"]("M13.062 4c0-2.209 2.211-4 4.938-4 2.728 0 4.938 1.791 4.938 4S20.728 8 18 8c-2.727-.001-4.938-1.792-4.938-4z", {["fill"]: "#6D6E71",["d"]: "M13.062 4c0-2.209 2.211-4 4.938-4 2.728 0 4.938 1.791 4.938 4S20.728 8 18 8c-2.727-.001-4.938-1.792-4.938-4z",}));el.appendChild(svg["path"]("M33 21c0-2.14-1.053-3.872-2.373-3.98C29.255 9.555 24.13 4 18 4S6.745 9.555 5.373 17.02C4.053 17.128 3 18.86 3 21c0 2.153 1.066 3.896 2.399 3.983C6.807 31.946 11.906 36 18 36c6.094 0 11.193-4.054 12.602-11.017C31.934 24.896 33 23.153 33 21z", {["fill"]: "#FFDC5D",["d"]: "M33 21c0-2.14-1.053-3.872-2.373-3.98C29.255 9.555 24.13 4 18 4S6.745 9.555 5.373 17.02C4.053 17.128 3 18.86 3 21c0 2.153 1.066 3.896 2.399 3.983C6.807 31.946 11.906 36 18 36c6.094 0 11.193-4.054 12.602-11.017C31.934 24.896 33 23.153 33 21z",}));el.appendChild(svg["path"]("M25 19h-3c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zm-11 0h-3c-.552 0-1-.448-1-1s.448-1 1-1h3c.552 0 1 .448 1 1s-.448 1-1 1z", {["fill"]: "#808285",["d"]: "M25 19h-3c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zm-11 0h-3c-.552 0-1-.448-1-1s.448-1 1-1h3c.552 0 1 .448 1 1s-.448 1-1 1z",}));el.appendChild(svg["path"]("M18 31.651c-2.519 0-3.494-.753-3.664-.903-.413-.367-.45-.999-.083-1.412.355-.402.963-.449 1.376-.113.06.039.7.429 2.371.429 1.751 0 2.37-.428 2.376-.433.414-.367 1.026-.311 1.392.101.367.413.31 1.062-.103 1.429-.171.149-1.146.902-3.665.902z", {["fill"]: "#DF1F32",["d"]: "M18 31.651c-2.519 0-3.494-.753-3.664-.903-.413-.367-.45-.999-.083-1.412.355-.402.963-.449 1.376-.113.06.039.7.429 2.371.429 1.751 0 2.37-.428 2.376-.433.414-.367 1.026-.311 1.392.101.367.413.31 1.062-.103 1.429-.171.149-1.146.902-3.665.902z",}));el.appendChild(svg["path"]("M19 28h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z", {["fill"]: "#C1694F",["d"]: "M19 28h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z",}));el.appendChild(svg["path"]("M23 24c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1s1 .447 1 1v2c0 .553-.447 1-1 1zm-10 0c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2c0 .553-.448 1-1 1z", {["d"]: "M23 24c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1s1 .447 1 1v2c0 .553-.447 1-1 1zm-10 0c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2c0 .553-.448 1-1 1z",["fill"]: "#662113",}));el.appendChild(svg["path"]("M33 12c-2-7-8-9-11.188-9C20 3 18 4 18 4s-2-1-4-1c-3 0-9 2-11 9-1.648 5.769 2 11 2 11 0-3.001 2-9 7-9s6-4 6-4 .786 4 5.786 4S31 20 31 23c0 0 3.648-5.231 2-11z", {["fill"]: "#808285",["d"]: "M33 12c-2-7-8-9-11.188-9C20 3 18 4 18 4s-2-1-4-1c-3 0-9 2-11 9-1.648 5.769 2 11 2 11 0-3.001 2-9 7-9s6-4 6-4 .786 4 5.786 4S31 20 31 23c0 0 3.648-5.231 2-11z",}));el.appendChild(svg["circle"](32, 24, 2, {["cy"]: "24",["r"]: "1",["fill"]: "#AA8DD8",["cx"]: "32",}));el.appendChild(svg["circle"](4, 24, 2, {["cy"]: "24",["r"]: "1",["fill"]: "#AA8DD8",["cx"]: "4",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};