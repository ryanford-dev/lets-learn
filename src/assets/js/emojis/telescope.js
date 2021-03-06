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
				el.appendChild(svg["circle"](17, 20, 6, {["cy"]: "20",["r"]: "3",["fill"]: "#9AAAB4",["cx"]: "17",}));el.appendChild(svg["path"]("M19.235 17.059c-.259.485-.868.671-1.353.412L5.529 10.883c-.485-.259-.67-.868-.412-1.353L7.94 4.235c.259-.485.868-.67 1.353-.412l12.353 6.588c.485.259.671.868.412 1.353l-2.823 5.295z", {["fill"]: "#DA2F47",["d"]: "M19.235 17.059c-.259.485-.868.671-1.353.412L5.529 10.883c-.485-.259-.67-.868-.412-1.353L7.94 4.235c.259-.485.868-.67 1.353-.412l12.353 6.588c.485.259.671.868.412 1.353l-2.823 5.295z",}));el.appendChild(svg["path"]("M31.177 22.293c-.259.485-.868.671-1.354.412l-9.705-5.176c-.485-.259-.671-.868-.412-1.354l1.882-3.529c.259-.485.868-.67 1.354-.412l9.705 5.176c.485.259.671.868.412 1.354l-1.882 3.529z", {["fill"]: "#DA2F47",["d"]: "M31.177 22.293c-.259.485-.868.671-1.354.412l-9.705-5.176c-.485-.259-.671-.868-.412-1.354l1.882-3.529c.259-.485.868-.67 1.354-.412l9.705 5.176c.485.259.671.868.412 1.354l-1.882 3.529z",}));el.appendChild(svg["path"]("M19.235 17.058l2.824-5.293 1.765.941L20.999 18z", {["fill"]: "#BB1A34",["d"]: "M19.235 17.058l2.824-5.293 1.765.941L20.999 18z",}));el.appendChild(svg["path"]("M28.942 22.235l2.823-5.294 3.53 1.882-2.824 5.294z", {["fill"]: "#9D0522",["d"]: "M28.942 22.235l2.823-5.294 3.53 1.882-2.824 5.294z",}));el.appendChild(svg["path"]("M8.294 7.824l1.882-3.53-.881-.47v-.001L4.882 1.471c-.485-.259-1.094-.074-1.353.411L.706 7.177c-.259.486-.074 1.094.412 1.353l3.529 1.882 1.766.941.47-.882 1.411-2.647zM23 25c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2s.896-2 2-2h8c1.104 0 2 .896 2 2z", {["fill"]: "#292F33",["d"]: "M8.294 7.824l1.882-3.53-.881-.47v-.001L4.882 1.471c-.485-.259-1.094-.074-1.353.411L.706 7.177c-.259.486-.074 1.094.412 1.353l3.529 1.882 1.766.941.47-.882 1.411-2.647zM23 25c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2s.896-2 2-2h8c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M9.467 36l3.344-7.152c.468-1 .036-2.191-.965-2.658-1-.469-2.191-.037-2.658.965L5.052 36h4.415zm15.065 0h4.416l-4.137-8.846c-.467-1.002-1.658-1.434-2.658-.965-1.001.467-1.433 1.658-.965 2.658L24.532 36zM19 36v-8c0-1.104-.896-2-2-2s-2 .896-2 2v8h4z", {["d"]: "M9.467 36l3.344-7.152c.468-1 .036-2.191-.965-2.658-1-.469-2.191-.037-2.658.965L5.052 36h4.415zm15.065 0h4.416l-4.137-8.846c-.467-1.002-1.658-1.434-2.658-.965-1.001.467-1.433 1.658-.965 2.658L24.532 36zM19 36v-8c0-1.104-.896-2-2-2s-2 .896-2 2v8h4z",["fill"]: "#9AAAB4",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};