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
				el.appendChild(svg["path"]("M8 17H0v15c0 2.209 1.791 4 4 4s4-1.791 4-4c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4V17H8z", {["fill"]: "#292F33",["d"]: "M8 17H0v15c0 2.209 1.791 4 4 4s4-1.791 4-4c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4V17H8z",}));el.appendChild(svg["path"]("M32 10H12c-2.209 0-4 1.791-4 4 0-2.209-1.791-4-4-4s-4 1.791-4 4v15c0 2.209 1.791 4 4 4s4-1.791 4-4c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4V14c0-2.209-1.791-4-4-4z", {["fill"]: "#66757F",["d"]: "M32 10H12c-2.209 0-4 1.791-4 4 0-2.209-1.791-4-4-4s-4 1.791-4 4v15c0 2.209 1.791 4 4 4s4-1.791 4-4c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4V14c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M21 16c0 1.104-.896 2-2 2h-7c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v2z", {["fill"]: "#C6E5B3",["d"]: "M21 16c0 1.104-.896 2-2 2h-7c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v2z",}));el.appendChild(svg["circle"](11.5, 21.5, 3, {["cy"]: "21.5",["fill"]: "#CCD6DD",["cx"]: "11.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 21.5, 3, {["cy"]: "21.5",["fill"]: "#CCD6DD",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](19.5, 21.5, 3, {["cy"]: "21.5",["fill"]: "#CCD6DD",["cx"]: "19.5",["r"]: "1.5",}));el.appendChild(svg["circle"](11.5, 25.5, 3, {["cy"]: "25.5",["fill"]: "#CCD6DD",["cx"]: "11.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 25.5, 3, {["cy"]: "25.5",["fill"]: "#CCD6DD",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](19.5, 25.5, 3, {["cy"]: "25.5",["fill"]: "#CCD6DD",["cx"]: "19.5",["r"]: "1.5",}));el.appendChild(svg["circle"](11.5, 29.5, 3, {["cy"]: "29.5",["fill"]: "#CCD6DD",["cx"]: "11.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 29.5, 3, {["cy"]: "29.5",["fill"]: "#CCD6DD",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](19.5, 29.5, 3, {["cy"]: "29.5",["fill"]: "#CCD6DD",["cx"]: "19.5",["r"]: "1.5",}));el.appendChild(svg["path"]("M34 21c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1z", {["d"]: "M34 21c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1z",["fill"]: "#99AAB5",}));el.appendChild(svg["circle"](25, 15, 4, {["cy"]: "15",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "25",}));el.appendChild(svg["circle"](32, 15, 4, {["cy"]: "15",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "32",}));el.appendChild(svg["path"]("M32 10H12V4c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v6z", {["fill"]: "#CCD6DD",["d"]: "M32 10H12V4c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v6z",}));el.appendChild(svg["path"]("M30 4c0 .553-.447 1-1 1H15c-.553 0-1-.447-1-1 0-.553.447-1 1-1h14c.553 0 1 .447 1 1zm-8 3c0 .553-.447 1-1 1h-6c-.553 0-1-.447-1-1 0-.553.447-1 1-1h6c.553 0 1 .447 1 1z", {["fill"]: "#99AAB5",["d"]: "M30 4c0 .553-.447 1-1 1H15c-.553 0-1-.447-1-1 0-.553.447-1 1-1h14c.553 0 1 .447 1 1zm-8 3c0 .553-.447 1-1 1h-6c-.553 0-1-.447-1-1 0-.553.447-1 1-1h6c.553 0 1 .447 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};