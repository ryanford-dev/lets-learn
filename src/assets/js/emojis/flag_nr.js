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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#002B7F",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M0 17h36v2H0z", {["fill"]: "#FFC61E",["d"]: "M0 17h36v2H0z",}));el.appendChild(svg["path"]("M9.979 19.479l.492 1.965 1.409-1.456-.556 1.949 1.949-.557-1.457 1.409 1.966.492-1.966.492 1.457 1.41-1.949-.557.556 1.949-1.409-1.457-.492 1.966-.492-1.966-1.409 1.457.556-1.949-1.948.557 1.456-1.41-1.966-.492 1.966-.492-1.456-1.409 1.948.557-.556-1.949 1.409 1.456z", {["fill"]: "#FFF",["d"]: "M9.979 19.479l.492 1.965 1.409-1.456-.556 1.949 1.949-.557-1.457 1.409 1.966.492-1.966.492 1.457 1.41-1.949-.557.556 1.949-1.409-1.457-.492 1.966-.492-1.966-1.409 1.457.556-1.949-1.948.557 1.456-1.41-1.966-.492 1.966-.492-1.456-1.409 1.948.557-.556-1.949 1.409 1.456z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};