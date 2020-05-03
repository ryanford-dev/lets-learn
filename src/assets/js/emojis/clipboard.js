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
				el.appendChild(svg["path"]("M32 34c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v27z", {["fill"]: "#C1694F",["d"]: "M32 34c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v27z",}));el.appendChild(svg["path"]("M29 32c0 .553-.447 1-1 1H8c-.552 0-1-.447-1-1V9c0-.552.448-1 1-1h20c.553 0 1 .448 1 1v23z", {["fill"]: "#FFF",["d"]: "M29 32c0 .553-.447 1-1 1H8c-.552 0-1-.447-1-1V9c0-.552.448-1 1-1h20c.553 0 1 .448 1 1v23z",}));el.appendChild(svg["path"]("M25 3h-4c0-1.657-1.343-3-3-3s-3 1.343-3 3h-4c-1.104 0-2 .896-2 2v5h18V5c0-1.104-.896-2-2-2z", {["fill"]: "#CCD6DD",["d"]: "M25 3h-4c0-1.657-1.343-3-3-3s-3 1.343-3 3h-4c-1.104 0-2 .896-2 2v5h18V5c0-1.104-.896-2-2-2z",}));el.appendChild(svg["circle"](18, 3, 4, {["cy"]: "3",["r"]: "2",["fill"]: "#292F33",["cx"]: "18",}));el.appendChild(svg["path"]("M20 14c0 .552-.447 1-1 1h-9c-.552 0-1-.448-1-1s.448-1 1-1h9c.553 0 1 .448 1 1zm7 4c0 .552-.447 1-1 1H10c-.552 0-1-.448-1-1s.448-1 1-1h16c.553 0 1 .448 1 1zm0 4c0 .553-.447 1-1 1H10c-.552 0-1-.447-1-1 0-.553.448-1 1-1h16c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H10c-.552 0-1-.447-1-1 0-.553.448-1 1-1h16c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1h-9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h9c.553 0 1 .447 1 1z", {["fill"]: "#99AAB5",["d"]: "M20 14c0 .552-.447 1-1 1h-9c-.552 0-1-.448-1-1s.448-1 1-1h9c.553 0 1 .448 1 1zm7 4c0 .552-.447 1-1 1H10c-.552 0-1-.448-1-1s.448-1 1-1h16c.553 0 1 .448 1 1zm0 4c0 .553-.447 1-1 1H10c-.552 0-1-.447-1-1 0-.553.448-1 1-1h16c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H10c-.552 0-1-.447-1-1 0-.553.448-1 1-1h16c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1h-9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h9c.553 0 1 .447 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};