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
				el.appendChild(svg["path"]("M0 34h36v2H0z", {["fill"]: "#939598",["d"]: "M0 34h36v2H0z",}));el.appendChild(svg["path"]("M6 27h29v5H6z", {["fill"]: "#231F20",["d"]: "M6 27h29v5H6z",}));el.appendChild(svg["circle"](6.999, 32, 6, {["cy"]: "32",["r"]: "3",["fill"]: "#58595B",["cx"]: "6.999",}));el.appendChild(svg["circle"](12.999, 32, 6, {["cy"]: "32",["r"]: "3",["fill"]: "#58595B",["cx"]: "12.999",}));el.appendChild(svg["circle"](6.999, 32, 3, {["cy"]: "32",["r"]: "1.5",["fill"]: "#A0041E",["cx"]: "6.999",}));el.appendChild(svg["circle"](12.999, 32, 3, {["cy"]: "32",["r"]: "1.5",["fill"]: "#A0041E",["cx"]: "12.999",}));el.appendChild(svg["path"]("M5 33H1c-1 0-1.5-.5 0-2l4-4c1-1 2-2.001 2 0v4c0 2-.001 2-2 2z", {["fill"]: "#DD2E44",["d"]: "M5 33H1c-1 0-1.5-.5 0-2l4-4c1-1 2-2.001 2 0v4c0 2-.001 2-2 2z",}));el.appendChild(svg["path"]("M8 20c0 3.313-1.343 6-3 6s-3-2.687-3-6c0-3.314 1.343-6 3-6s3 2.686 3 6z", {["fill"]: "#231F20",["d"]: "M8 20c0 3.313-1.343 6-3 6s-3-2.687-3-6c0-3.314 1.343-6 3-6s3 2.686 3 6z",}));el.appendChild(svg["path"]("M11 15H7L5 7h8z", {["fill"]: "#6D6E71",["d"]: "M11 15H7L5 7h8z",}));el.appendChild(svg["path"]("M26 25c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V15c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v10z", {["fill"]: "#414042",["d"]: "M26 25c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V15c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v10z",}));el.appendChild(svg["path"]("M13 26c0 .553-.448 1-1 1s-1-.447-1-1V13c0-.552.448-1 1-1s1 .448 1 1v13zm6 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1V13c0-.552.447-1 1-1 .553 0 1 .448 1 1v13z", {["fill"]: "#C1694F",["d"]: "M13 26c0 .553-.448 1-1 1s-1-.447-1-1V13c0-.552.448-1 1-1s1 .448 1 1v13zm6 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1V13c0-.552.447-1 1-1 .553 0 1 .448 1 1v13z",}));el.appendChild(svg["path"]("M36 26c0 .553-.447 1-1 1H7c-.552 0-1-.447-1-1 0-.553.448-1 1-1h28c.553 0 1 .447 1 1z", {["fill"]: "#808285",["d"]: "M36 26c0 .553-.447 1-1 1H7c-.552 0-1-.447-1-1 0-.553.448-1 1-1h28c.553 0 1 .447 1 1z",}));el.appendChild(svg["circle"](29.999, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#58595B",["cx"]: "29.999",}));el.appendChild(svg["circle"](21.999, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#58595B",["cx"]: "21.999",}));el.appendChild(svg["circle"](29.999, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#A0041E",["cx"]: "29.999",}));el.appendChild(svg["circle"](21.999, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#A0041E",["cx"]: "21.999",}));el.appendChild(svg["path"]("M12 3H6c-.552 0-1 .448-1 1v3h8V4c0-.552-.448-1-1-1z", {["fill"]: "#414042",["d"]: "M12 3H6c-.552 0-1 .448-1 1v3h8V4c0-.552-.448-1-1-1z",}));el.appendChild(svg["path"]("M23 7h12v18H23z", {["fill"]: "#BE1931",["d"]: "M23 7h12v18H23z",}));el.appendChild(svg["path"]("M36 6c0 .552-.447 1-1 1H23c-.553 0-1-.448-1-1s.447-1 1-1h12c.553 0 1 .448 1 1z", {["fill"]: "#A0041E",["d"]: "M36 6c0 .552-.447 1-1 1H23c-.553 0-1-.448-1-1s.447-1 1-1h12c.553 0 1 .448 1 1z",}));el.appendChild(svg["path"]("M25 18h8v5h-8z", {["fill"]: "#EA596E",["d"]: "M25 18h8v5h-8z",}));el.appendChild(svg["path"]("M30 32h-8c-.127 0-.253-.024-.371-.071L16.807 30H10c-.552 0-1-.447-1-1s.448-1 1-1h7c.128 0 .253.024.372.071L22.192 30H30c.553 0 1 .447 1 1s-.447 1-1 1z", {["fill"]: "#F4900C",["d"]: "M30 32h-8c-.127 0-.253-.024-.371-.071L16.807 30H10c-.552 0-1-.447-1-1s.448-1 1-1h7c.128 0 .253.024.372.071L22.192 30H30c.553 0 1 .447 1 1s-.447 1-1 1z",}));el.appendChild(svg["path"]("M33 10c0-.552-.447-1-1-1h-6c-.553 0-1 .448-1 1v5c0 .552.447 1 1 1h6c.553 0 1-.448 1-1v-5z", {["fill"]: "#55ACEE",["d"]: "M33 10c0-.552-.447-1-1-1h-6c-.553 0-1 .448-1 1v5c0 .552.447 1 1 1h6c.553 0 1-.448 1-1v-5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};