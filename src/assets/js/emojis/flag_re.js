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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#36F",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M18 18L1.368 30.012l.001.001C2.072 30.628 2.993 31 4 31h28c1.008 0 1.929-.373 2.632-.988L18 18z", {["fill"]: "red",["d"]: "M18 18L1.368 30.012l.001.001C2.072 30.628 2.993 31 4 31h28c1.008 0 1.929-.373 2.632-.988L18 18z",}));el.appendChild(svg["path"]("M18 18.019l18 1.487v-2.975zM0 16.531v2.975l18-1.487zm2.405-11.2C1.531 5.711.82 6.394.404 7.247L18 18 2.406 5.33l-.001.001zm33.191 1.916c-.417-.853-1.129-1.536-2.003-1.917L18 18 35.596 7.247zM19.5 5h-3L18 18z", {["fill"]: "#FF0",["d"]: "M18 18.019l18 1.487v-2.975zM0 16.531v2.975l18-1.487zm2.405-11.2C1.531 5.711.82 6.394.404 7.247L18 18 2.406 5.33l-.001.001zm33.191 1.916c-.417-.853-1.129-1.536-2.003-1.917L18 18 35.596 7.247zM19.5 5h-3L18 18z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};