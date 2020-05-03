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
				el.appendChild(svg["path"]("M6 15h24v2H6zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z", {["fill"]: "#292F33",["d"]: "M6 15h24v2H6zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z",}));el.appendChild(svg["path"]("M18 31c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z", {["fill"]: "#66757F",["d"]: "M18 31c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z",}));el.appendChild(svg["path"]("M18 0c-4.971 0-9 4.029-9 9v7h18V9c0-4.971-4.029-9-9-9z", {["fill"]: "#99AAB5",["d"]: "M18 0c-4.971 0-9 4.029-9 9v7h18V9c0-4.971-4.029-9-9-9z",}));el.appendChild(svg["circle"](15.5, 2.5, 3, {["cy"]: "2.5",["fill"]: "#292F33",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](20.5, 2.5, 3, {["cy"]: "2.5",["fill"]: "#292F33",["cx"]: "20.5",["r"]: "1.5",}));el.appendChild(svg["circle"](17.5, 6.5, 3, {["cy"]: "6.5",["fill"]: "#292F33",["cx"]: "17.5",["r"]: "1.5",}));el.appendChild(svg["circle"](22.5, 6.5, 3, {["cy"]: "6.5",["fill"]: "#292F33",["cx"]: "22.5",["r"]: "1.5",}));el.appendChild(svg["circle"](12.5, 6.5, 3, {["cy"]: "6.5",["fill"]: "#292F33",["cx"]: "12.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 10.5, 3, {["cy"]: "10.5",["fill"]: "#292F33",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](10.5, 10.5, 3, {["cy"]: "10.5",["fill"]: "#292F33",["cx"]: "10.5",["r"]: "1.5",}));el.appendChild(svg["circle"](20.5, 10.5, 3, {["cy"]: "10.5",["fill"]: "#292F33",["cx"]: "20.5",["r"]: "1.5",}));el.appendChild(svg["circle"](25.5, 10.5, 3, {["cy"]: "10.5",["fill"]: "#292F33",["cx"]: "25.5",["r"]: "1.5",}));el.appendChild(svg["circle"](17.5, 14.5, 3, {["cy"]: "14.5",["fill"]: "#292F33",["cx"]: "17.5",["r"]: "1.5",}));el.appendChild(svg["circle"](22.5, 14.5, 3, {["cy"]: "14.5",["fill"]: "#292F33",["cx"]: "22.5",["r"]: "1.5",}));el.appendChild(svg["circle"](12.5, 14.5, 3, {["cy"]: "14.5",["fill"]: "#292F33",["cx"]: "12.5",["r"]: "1.5",}));el.appendChild(svg["path"]("M9 15.062V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H9z", {["fill"]: "#66757F",["d"]: "M9 15.062V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H9z",}));el.appendChild(svg["path"]("M30 14c-.553 0-1 .448-1 1v2c0 6.074-4.925 11-11 11S7 23.074 7 17v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2c0-.552-.447-1-1-1z", {["fill"]: "#66757F",["d"]: "M30 14c-.553 0-1 .448-1 1v2c0 6.074-4.925 11-11 11S7 23.074 7 17v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2c0-.552-.447-1-1-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};