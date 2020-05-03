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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#004A77",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M32 23.958c1.575.963 2.957 1.676 4 2.171v-2.07C32.465 22.229 25.013 17.594 20 9c0 0 0-2-2-2s-2 2-2 2C10.987 17.594 3.535 22.229 0 24.059v2.07c1.043-.495 2.425-1.208 4-2.171V27H0v4h16v5h4v-5h16v-4h-4v-3.042zM30 27h-4v-7.435c1.362 1.186 2.716 2.214 4 3.095V27zM6 22.659c1.284-.88 2.637-1.908 4-3.094V27H6v-4.341zM12 27v-9.292c1.384-1.375 2.74-2.923 4-4.655V27h-4zm8-13.946c1.26 1.731 2.616 3.28 4 4.655V27h-4V13.054z", {["fill"]: "#FE5011",["d"]: "M32 23.958c1.575.963 2.957 1.676 4 2.171v-2.07C32.465 22.229 25.013 17.594 20 9c0 0 0-2-2-2s-2 2-2 2C10.987 17.594 3.535 22.229 0 24.059v2.07c1.043-.495 2.425-1.208 4-2.171V27H0v4h16v5h4v-5h16v-4h-4v-3.042zM30 27h-4v-7.435c1.362 1.186 2.716 2.214 4 3.095V27zM6 22.659c1.284-.88 2.637-1.908 4-3.094V27H6v-4.341zM12 27v-9.292c1.384-1.375 2.74-2.923 4-4.655V27h-4zm8-13.946c1.26 1.731 2.616 3.28 4 4.655V27h-4V13.054z",}));el.appendChild(svg["path"]("M6.5 7C5.119 7 4 5.881 4 4.5c0-1.13.755-2.074 1.784-2.383C5.533 2.048 5.273 2 5 2 3.343 2 2 3.343 2 5s1.343 3 3 3c.959 0 1.803-.458 2.353-1.159C7.085 6.938 6.801 7 6.5 7z", {["d"]: "M6.5 7C5.119 7 4 5.881 4 4.5c0-1.13.755-2.074 1.784-2.383C5.533 2.048 5.273 2 5 2 3.343 2 2 3.343 2 5s1.343 3 3 3c.959 0 1.803-.458 2.353-1.159C7.085 6.938 6.801 7 6.5 7z",["fill"]: "#FFF",}));el.appendChild(svg["circle"](10.5, 2.5, 1, {["cy"]: "2.5",["fill"]: "#FFF",["cx"]: "10.5",["r"]: ".5",}));el.appendChild(svg["circle"](26.5, 11.5, 1, {["cy"]: "11.5",["fill"]: "#FFF",["cx"]: "26.5",["r"]: ".5",}));el.appendChild(svg["circle"](7.5, 11.5, 1, {["cy"]: "11.5",["fill"]: "#FFF",["cx"]: "7.5",["r"]: ".5",}));el.appendChild(svg["circle"](22, 5, 2, {["cy"]: "5",["fill"]: "#FFF",["cx"]: "22",["r"]: "1",}));el.appendChild(svg["circle"](4, 17, 2, {["cy"]: "17",["fill"]: "#FFF",["cx"]: "4",["r"]: "1",}));el.appendChild(svg["circle"](12, 7, 2, {["cy"]: "7",["fill"]: "#FFF",["cx"]: "12",["r"]: "1",}));el.appendChild(svg["circle"](32, 17, 2, {["cy"]: "17",["fill"]: "#FFF",["cx"]: "32",["r"]: "1",}));el.appendChild(svg["circle"](26.5, 5.5, 1, {["cy"]: "5.5",["fill"]: "#FFF",["cx"]: "26.5",["r"]: ".5",}));el.appendChild(svg["circle"](31, 3, 2, {["cy"]: "3",["fill"]: "#FFF",["cx"]: "31",["r"]: "1",}));el.appendChild(svg["circle"](31.5, 7.5, 1, {["cy"]: "7.5",["fill"]: "#FFF",["cx"]: "31.5",["r"]: ".5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};