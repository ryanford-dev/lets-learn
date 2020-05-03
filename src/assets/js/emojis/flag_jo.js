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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v4.5h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#141414",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v4.5h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4.5H0V27z", {["fill"]: "#007A3D",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4.5H0V27z",}));el.appendChild(svg["path"]("M0 13.5h36v9H0z", {["fill"]: "#EEE",["d"]: "M0 13.5h36v9H0z",}));el.appendChild(svg["path"]("M1.351 6.004H1.35C.522 6.737 0 7.808 0 9v18c0 1.193.522 2.264 1.351 2.997L17.5 18 1.351 6.004z", {["fill"]: "#CE1126",["d"]: "M1.351 6.004H1.35C.522 6.737 0 7.808 0 9v18c0 1.193.522 2.264 1.351 2.997L17.5 18 1.351 6.004z",}));el.appendChild(svg["path"]("M6.627 19.338l1.056.976-.105-1.435L9 18.662l-1.187-.812.717-1.247-1.375.421-.528-1.338-.528 1.338-1.375-.421.716 1.247-1.186.812 1.421.217-.104 1.435z", {["fill"]: "#FFF",["d"]: "M6.627 19.338l1.056.976-.105-1.435L9 18.662l-1.187-.812.717-1.247-1.375.421-.528-1.338-.528 1.338-1.375-.421.716 1.247-1.186.812 1.421.217-.104 1.435z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};