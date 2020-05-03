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
				el.appendChild(svg["path"]("M30 12H6V5c0-1.105.826-2 1.846-2h20.309C29.173 3 30 3.895 30 5v7zm0 19c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2v-3h24v3z", {["fill"]: "#67757F",["d"]: "M30 12H6V5c0-1.105.826-2 1.846-2h20.309C29.173 3 30 3.895 30 5v7zm0 19c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2v-3h24v3z",}));el.appendChild(svg["path"]("M27 12H9V2c0-1.105.896-2 2-2h14c1.104 0 2 .896 2 2v10z", {["fill"]: "#E1E8ED",["d"]: "M27 12H9V2c0-1.105.896-2 2-2h14c1.104 0 2 .896 2 2v10z",}));el.appendChild(svg["path"]("M34 25c0 1-1 3-3 3H5c-2 0-3-2-3-3v-9c0-2.209 1.791-4 4-4h24c2.209 0 4 1.791 4 4v9z", {["fill"]: "#5DADEC",["d"]: "M34 25c0 1-1 3-3 3H5c-2 0-3-2-3-3v-9c0-2.209 1.791-4 4-4h24c2.209 0 4 1.791 4 4v9z",}));el.appendChild(svg["path"]("M30 25c0-1.104-.978-2-2.182-2H8.182C6.977 23 6 23.896 6 25v4h24v-4z", {["fill"]: "#292F33",["d"]: "M30 25c0-1.104-.978-2-2.182-2H8.182C6.977 23 6 23.896 6 25v4h24v-4z",}));el.appendChild(svg["path"]("M30 15c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2v-4h24v4z", {["fill"]: "#4289C1",["d"]: "M30 15c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2v-4h24v4z",}));el.appendChild(svg["path"]("M27 34c0 1.104-.896 2-2 2H11c-1.104 0-2-.896-2-2v-8h18v8z", {["fill"]: "#E1E8ED",["d"]: "M27 34c0 1.104-.896 2-2 2H11c-1.104 0-2-.896-2-2v-8h18v8z",}));el.appendChild(svg["path"]("M25 29c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1 0-.553.448-1 1-1h12c.553 0 1 .447 1 1z", {["fill"]: "#9AAAB4",["d"]: "M25 29c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1 0-.553.448-1 1-1h12c.553 0 1 .447 1 1z",}));el.appendChild(svg["circle"](30.5, 19.5, 3, {["cy"]: "19.5",["r"]: "1.5",["fill"]: "#F5F8FA",["cx"]: "30.5",}));el.appendChild(svg["path"]("M25 32c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1 0-.553.448-1 1-1h12c.553 0 1 .447 1 1zM9 25h18v2H9z", {["fill"]: "#9AAAB4",["d"]: "M25 32c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1 0-.553.448-1 1-1h12c.553 0 1 .447 1 1zM9 25h18v2H9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};