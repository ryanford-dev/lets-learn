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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-9c0-2.209.791-3 3-3h30c2.209 0 3 .791 3 3v9z", {["fill"]: "#D99E82",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-9c0-2.209.791-3 3-3h30c2.209 0 3 .791 3 3v9z",}));el.appendChild(svg["path"]("M25 20c0 3.866-3.134 7-7 7s-7-3.134-7-7h14z", {["fill"]: "#662113",["d"]: "M25 20c0 3.866-3.134 7-7 7s-7-3.134-7-7h14z",}));el.appendChild(svg["path"]("M4 36h28c2.209 0 4-1.791 4-4H0c0 2.209 1.791 4 4 4z", {["fill"]: "#C1694F",["d"]: "M4 36h28c2.209 0 4-1.791 4-4H0c0 2.209 1.791 4 4 4z",}));el.appendChild(svg["path"]("M27.435 8.511L19.572.648c-.864-.865-2.28-.865-3.145 0L8.564 8.511C7.7 9.377 7.993 10 9.216 10H14v6c0 1.104.896 2 2 2h4c1.104 0 2-.896 2-2v-6h4.784c1.223 0 1.516-.623.651-1.489z", {["fill"]: "#DD2E44",["d"]: "M27.435 8.511L19.572.648c-.864-.865-2.28-.865-3.145 0L8.564 8.511C7.7 9.377 7.993 10 9.216 10H14v6c0 1.104.896 2 2 2h4c1.104 0 2-.896 2-2v-6h4.784c1.223 0 1.516-.623.651-1.489z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};