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
				el.appendChild(svg["path"]("M13 3C7.477 3 3 7.477 3 13v10h4V13c0-3.313 2.687-6 6-6s6 2.687 6 6v10h4V13c0-5.523-4.477-10-10-10z", {["fill"]: "#AAB8C2",["d"]: "M13 3C7.477 3 3 7.477 3 13v10h4V13c0-3.313 2.687-6 6-6s6 2.687 6 6v10h4V13c0-5.523-4.477-10-10-10z",}));el.appendChild(svg["path"]("M26 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V20c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v12z", {["fill"]: "#FFAC33",["d"]: "M26 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V20c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v12z",}));el.appendChild(svg["path"]("M35 9c0-4.971-4.029-9-9-9s-9 4.029-9 9c0 3.917 2.507 7.24 6 8.477V33.5c0 1.381 1.119 2.5 2.5 2.5 1.213 0 2.223-.864 2.45-2.01.018.001.032.01.05.01.553 0 1-.447 1-1v-1c0-.553-.447-1-1-1v-1c.553 0 1-.447 1-1v-2c0-.553-.447-1-1-1v-2.277c.596-.347 1-.984 1-1.723v-4.523c3.493-1.236 6-4.559 6-8.477zm-9-7c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z", {["fill"]: "#C1694F",["d"]: "M35 9c0-4.971-4.029-9-9-9s-9 4.029-9 9c0 3.917 2.507 7.24 6 8.477V33.5c0 1.381 1.119 2.5 2.5 2.5 1.213 0 2.223-.864 2.45-2.01.018.001.032.01.05.01.553 0 1-.447 1-1v-1c0-.553-.447-1-1-1v-1c.553 0 1-.447 1-1v-2c0-.553-.447-1-1-1v-2.277c.596-.347 1-.984 1-1.723v-4.523c3.493-1.236 6-4.559 6-8.477zm-9-7c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};