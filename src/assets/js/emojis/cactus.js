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
				el.appendChild(svg["path"]("M30 4c-2.209 0-4 1.791-4 4v9.125c0 1.086-.887 1.96-2 2.448V6c0-3.313-2.687-6-6-6s-6 2.687-6 6v17.629c-1.122-.475-2-1.371-2-2.504V16c0-2.209-1.791-4-4-4s-4 1.791-4 4v7c0 2.209 1.75 3.875 3.375 4.812 1.244.718 4.731 1.6 6.625 1.651V33c0 3.313 12 3.313 12 0v-7.549c1.981-.119 5.291-.953 6.479-1.639C32.104 22.875 34 21.209 34 19V8c0-2.209-1.791-4-4-4z", {["fill"]: "#77B255",["d"]: "M30 4c-2.209 0-4 1.791-4 4v9.125c0 1.086-.887 1.96-2 2.448V6c0-3.313-2.687-6-6-6s-6 2.687-6 6v17.629c-1.122-.475-2-1.371-2-2.504V16c0-2.209-1.791-4-4-4s-4 1.791-4 4v7c0 2.209 1.75 3.875 3.375 4.812 1.244.718 4.731 1.6 6.625 1.651V33c0 3.313 12 3.313 12 0v-7.549c1.981-.119 5.291-.953 6.479-1.639C32.104 22.875 34 21.209 34 19V8c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["circle"](12, 6, 2, {["cy"]: "6",["fill"]: "#3E721D",["cx"]: "12",["r"]: "1",}));el.appendChild(svg["circle"](23, 3, 2, {["cy"]: "3",["fill"]: "#3E721D",["cx"]: "23",["r"]: "1",}));el.appendChild(svg["circle"](21, 9, 2, {["cy"]: "9",["fill"]: "#3E721D",["cx"]: "21",["r"]: "1",}));el.appendChild(svg["circle"](14, 16, 2, {["cy"]: "16",["fill"]: "#3E721D",["cx"]: "14",["r"]: "1",}));el.appendChild(svg["circle"](20, 20, 2, {["cy"]: "20",["fill"]: "#3E721D",["cx"]: "20",["r"]: "1",}));el.appendChild(svg["circle"](13, 26, 2, {["cy"]: "26",["fill"]: "#3E721D",["cx"]: "13",["r"]: "1",}));el.appendChild(svg["circle"](5, 27, 2, {["cy"]: "27",["fill"]: "#3E721D",["cx"]: "5",["r"]: "1",}));el.appendChild(svg["circle"](9, 20, 2, {["cy"]: "20",["fill"]: "#3E721D",["cx"]: "9",["r"]: "1",}));el.appendChild(svg["circle"](2, 18, 2, {["cy"]: "18",["fill"]: "#3E721D",["cx"]: "2",["r"]: "1",}));el.appendChild(svg["circle"](34, 8, 2, {["cy"]: "8",["fill"]: "#3E721D",["cx"]: "34",["r"]: "1",}));el.appendChild(svg["circle"](28, 11, 2, {["cy"]: "11",["fill"]: "#3E721D",["cx"]: "28",["r"]: "1",}));el.appendChild(svg["circle"](32, 16, 2, {["cy"]: "16",["fill"]: "#3E721D",["cx"]: "32",["r"]: "1",}));el.appendChild(svg["circle"](29, 24, 2, {["cy"]: "24",["fill"]: "#3E721D",["cx"]: "29",["r"]: "1",}));el.appendChild(svg["circle"](22, 30, 2, {["cy"]: "30",["fill"]: "#3E721D",["cx"]: "22",["r"]: "1",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};