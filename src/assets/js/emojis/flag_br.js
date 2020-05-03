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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#009B3A",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M32.728 18L18 29.124 3.272 18 18 6.875z", {["fill"]: "#FEDF01",["d"]: "M32.728 18L18 29.124 3.272 18 18 6.875z",}));el.appendChild(svg["circle"](17.976, 17.924, 12.916, {["cy"]: "17.924",["r"]: "6.458",["fill"]: "#002776",["cx"]: "17.976",}));el.appendChild(svg["path"]("M12.277 14.887c-.332.621-.558 1.303-.672 2.023 3.995-.29 9.417 1.891 11.744 4.595.402-.604.7-1.28.883-2.004-2.872-2.808-7.917-4.63-11.955-4.614z", {["fill"]: "#CBE9D4",["d"]: "M12.277 14.887c-.332.621-.558 1.303-.672 2.023 3.995-.29 9.417 1.891 11.744 4.595.402-.604.7-1.28.883-2.004-2.872-2.808-7.917-4.63-11.955-4.614z",}));el.appendChild(svg["path"]("M12 18.233h1v1h-1zm1 2h1v1h-1z", {["fill"]: "#88C9F9",["d"]: "M12 18.233h1v1h-1zm1 2h1v1h-1z",}));el.appendChild(svg["path"]("M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z", {["fill"]: "#55ACEE",["d"]: "M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z",}));el.appendChild(svg["path"]("M19 20.233h1v1h-1z", {["fill"]: "#3B88C3",["d"]: "M19 20.233h1v1h-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};