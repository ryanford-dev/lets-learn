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
				el.appendChild(svg["path"]("M32 21v1h-2v-1c0-.446-.09-.867-.225-1.268 2.446-.757 4.224-3.038 4.224-5.733 0-3.314-2.687-6-6-6-1.603 0-3.055.632-4.131 1.656C23.241 6.433 20.405 4 17 4c-3.866 0-7 3.134-7 7 0 2.551 1.369 4.777 3.409 6H13c-2.209 0-4 1.791-4 4H8l-6-4H1v14h1l6-4h1v2c0 2.209 1.791 4 4 4h13c2.209 0 4-1.791 4-4v-3h2v1h3v-6h-3z", {["fill"]: "#31373D",["d"]: "M32 21v1h-2v-1c0-.446-.09-.867-.225-1.268 2.446-.757 4.224-3.038 4.224-5.733 0-3.314-2.687-6-6-6-1.603 0-3.055.632-4.131 1.656C23.241 6.433 20.405 4 17 4c-3.866 0-7 3.134-7 7 0 2.551 1.369 4.777 3.409 6H13c-2.209 0-4 1.791-4 4H8l-6-4H1v14h1l6-4h1v2c0 2.209 1.791 4 4 4h13c2.209 0 4-1.791 4-4v-3h2v1h3v-6h-3z",}));el.appendChild(svg["path"]("M22 11c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.238 5 5z", {["fill"]: "#66757F",["d"]: "M22 11c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.238 5 5z",}));el.appendChild(svg["circle"](17, 11, 4, {["cy"]: "11",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "17",}));el.appendChild(svg["circle"](27.999, 14, 8, {["cy"]: "14",["r"]: "4",["fill"]: "#66757F",["cx"]: "27.999",}));el.appendChild(svg["circle"](27.999, 14, 4, {["cy"]: "14",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "27.999",}));el.appendChild(svg["path"]("M17 20h10v10H17z", {["fill"]: "#8899A6",["d"]: "M17 20h10v10H17z",}));el.appendChild(svg["path"]("M19 22h6v6h-6z", {["fill"]: "#31373D",["d"]: "M19 22h6v6h-6z",}));el.appendChild(svg["circle"](12.999, 28, 4, {["cy"]: "28",["r"]: "2",["fill"]: "#8899A6",["cx"]: "12.999",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};