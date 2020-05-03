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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#C60A1D",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M0 12h36v12H0z", {["fill"]: "#FFC400",["d"]: "M0 12h36v12H0z",}));el.appendChild(svg["path"]("M9 17v3c0 1.657 1.343 3 3 3s3-1.343 3-3v-3H9z", {["fill"]: "#EA596E",["d"]: "M9 17v3c0 1.657 1.343 3 3 3s3-1.343 3-3v-3H9z",}));el.appendChild(svg["path"]("M12 16h3v3h-3z", {["fill"]: "#F4A2B2",["d"]: "M12 16h3v3h-3z",}));el.appendChild(svg["path"]("M9 16h3v3H9z", {["fill"]: "#DD2E44",["d"]: "M9 16h3v3H9z",}));el.appendChild(svg["ellipse"](12, 14.5, 6, 3, {["rx"]: "3",["cy"]: "14.5",["ry"]: "1.5",["fill"]: "#EA596E",["cx"]: "12",}));el.appendChild(svg["ellipse"](12, 13.75, 6, 1.5, {["rx"]: "3",["cy"]: "13.75",["ry"]: ".75",["fill"]: "#FFAC33",["cx"]: "12",}));el.appendChild(svg["path"]("M7 16h1v7H7zm9 0h1v7h-1z", {["fill"]: "#99AAB5",["d"]: "M7 16h1v7H7zm9 0h1v7h-1z",}));el.appendChild(svg["path"]("M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z", {["fill"]: "#66757F",["d"]: "M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};