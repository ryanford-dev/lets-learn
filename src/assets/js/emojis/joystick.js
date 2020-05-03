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
				el.appendChild(svg["path"]("M16 9h4v17h-4z", {["fill"]: "#99AAB5",["d"]: "M16 9h4v17h-4z",}));el.appendChild(svg["path"]("M10 24.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5S4.672 23 5.5 23h3c.828 0 1.5.672 1.5 1.5z", {["fill"]: "#DA2F47",["d"]: "M10 24.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5S4.672 23 5.5 23h3c.828 0 1.5.672 1.5 1.5z",}));el.appendChild(svg["path"]("M34 33c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-6c0-1.104.896-2 2-2h28c1.104 0 2 .896 2 2v6z", {["fill"]: "#31373D",["d"]: "M34 33c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-6c0-1.104.896-2 2-2h28c1.104 0 2 .896 2 2v6z",}));el.appendChild(svg["path"]("M10 34.5c0 .828-.671 1.5-1.5 1.5h-3c-.829 0-1.5-.672-1.5-1.5S4.671 33 5.5 33h3c.829 0 1.5.672 1.5 1.5zm22 0c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h3c.828 0 1.5.672 1.5 1.5z", {["fill"]: "#31373D",["d"]: "M10 34.5c0 .828-.671 1.5-1.5 1.5h-3c-.829 0-1.5-.672-1.5-1.5S4.671 33 5.5 33h3c.829 0 1.5.672 1.5 1.5zm22 0c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h3c.828 0 1.5.672 1.5 1.5z",}));el.appendChild(svg["circle"](18, 7, 10, {["cy"]: "7",["r"]: "5",["fill"]: "#DA2F47",["cx"]: "18",}));el.appendChild(svg["path"]("M25 26c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2v-1c0-1.104 3.896-6 5-6h4c1.104 0 5 4.896 5 6v1z", {["fill"]: "#31373D",["d"]: "M25 26c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2v-1c0-1.104 3.896-6 5-6h4c1.104 0 5 4.896 5 6v1z",}));el.appendChild(svg["path"]("M33 28c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h28c.553 0 1 .447 1 1z", {["fill"]: "#66757F",["d"]: "M33 28c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h28c.553 0 1 .447 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};