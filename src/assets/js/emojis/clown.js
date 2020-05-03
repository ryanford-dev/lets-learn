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
				el.appendChild(svg["circle"](29, 3, 4, {["cy"]: "3",["r"]: "2",["fill"]: "#4289C1",["cx"]: "29",}));el.appendChild(svg["circle"](33, 8, 6, {["cy"]: "8",["r"]: "3",["fill"]: "#4289C1",["cx"]: "33",}));el.appendChild(svg["circle"](33, 4, 6, {["cy"]: "4",["r"]: "3",["fill"]: "#4289C1",["cx"]: "33",}));el.appendChild(svg["circle"](7, 3, 4, {["cy"]: "3",["r"]: "2",["fill"]: "#4289C1",["cx"]: "7",}));el.appendChild(svg["circle"](3, 8, 6, {["cy"]: "8",["r"]: "3",["fill"]: "#4289C1",["cx"]: "3",}));el.appendChild(svg["circle"](3, 4, 6, {["cy"]: "4",["r"]: "3",["fill"]: "#4289C1",["cx"]: "3",}));el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18", {["fill"]: "#FEE7B8",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18",}));el.appendChild(svg["circle"](30.5, 4.5, 5, {["cy"]: "4.5",["r"]: "2.5",["fill"]: "#4289C1",["cx"]: "30.5",}));el.appendChild(svg["circle"](32, 7, 4, {["cy"]: "7",["r"]: "2",["fill"]: "#4289C1",["cx"]: "32",}));el.appendChild(svg["circle"](5.5, 4.5, 5, {["cy"]: "4.5",["r"]: "2.5",["fill"]: "#4289C1",["cx"]: "5.5",}));el.appendChild(svg["circle"](4, 7, 4, {["cy"]: "7",["r"]: "2",["fill"]: "#4289C1",["cx"]: "4",}));el.appendChild(svg["circle"](6.93, 21, 8, {["cy"]: "21",["r"]: "4",["fill"]: "#FF7892",["cx"]: "6.93",}));el.appendChild(svg["circle"](28.93, 21, 8, {["cy"]: "21",["r"]: "4",["fill"]: "#FF7892",["cx"]: "28.93",}));el.appendChild(svg["path"]("M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743c.123-.205.084-.468-.094-.628z", {["fill"]: "#DA2F47",["d"]: "M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743c.123-.205.084-.468-.094-.628z",}));el.appendChild(svg["path"]("M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743c.123-.205.084-.468-.094-.628z", {["fill"]: "none",["d"]: "M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743c.123-.205.084-.468-.094-.628z",}));el.appendChild(svg["ellipse"](11.5, 11.5, 5, 7, {["rx"]: "2.5",["cy"]: "11.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "11.5",}));el.appendChild(svg["ellipse"](25.5, 11.5, 5, 7, {["rx"]: "2.5",["cy"]: "11.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "25.5",}));el.appendChild(svg["circle"](18.5, 19.5, 7, {["cy"]: "19.5",["r"]: "3.5",["fill"]: "#BB1A34",["cx"]: "18.5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};