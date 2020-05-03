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
				el.appendChild(svg["path"]("M35.538 26.679s1.328 2.214-2.658 6.201c-3.987 3.986-6.201 2.658-6.201 2.658L7.185 16.046s.977-2.748 3.544-5.316c2.568-2.567 5.316-3.544 5.316-3.544l19.493 19.493z", {["fill"]: "#D99E82",["d"]: "M35.538 26.679s1.328 2.214-2.658 6.201c-3.987 3.986-6.201 2.658-6.201 2.658L7.185 16.046s.977-2.748 3.544-5.316c2.568-2.567 5.316-3.544 5.316-3.544l19.493 19.493z",}));el.appendChild(svg["path"]("M13.388 9.844c.979.979 4.522 6.109 3.544 7.088-.979.978-6.109-2.565-7.088-3.544l-8.86-8.86C.006 3.549.006 1.963.984.984c.979-.978 2.565-.978 3.544 0l8.86 8.86z", {["fill"]: "#C1694F",["d"]: "M13.388 9.844c.979.979 4.522 6.109 3.544 7.088-.979.978-6.109-2.565-7.088-3.544l-8.86-8.86C.006 3.549.006 1.963.984.984c.979-.978 2.565-.978 3.544 0l8.86 8.86z",}));el.appendChild(svg["path"]("M.983 4.528L4.528.984 9.844 6.3 6.3 9.844z", {["fill"]: "#292F33",["d"]: "M.983 4.528L4.528.984 9.844 6.3 6.3 9.844z",}));el.appendChild(svg["circle"](19, 31, 10, {["cy"]: "31",["r"]: "5",["fill"]: "#BE1931",["cx"]: "19",}));el.appendChild(svg["path"]("M19 36c-.552 0-1-.447-1-1v-8c0-.553.448-1 1-1 .553 0 1 .447 1 1v8c0 .553-.447 1-1 1z", {["fill"]: "#662113",["d"]: "M19 36c-.552 0-1-.447-1-1v-8c0-.553.448-1 1-1 .553 0 1 .447 1 1v8c0 .553-.447 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};