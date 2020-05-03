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
				el.appendChild(svg["path"]("M19.602 18.942l.99 3.048L18 20.106l-2.593 1.884.99-3.048L15.101 18H0v9c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9H20.899l-1.297.942z", {["fill"]: "#009E49",["d"]: "M19.602 18.942l.99 3.048L18 20.106l-2.593 1.884.99-3.048L15.101 18H0v9c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9H20.899l-1.297.942z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v9h15.101l-1.296-.942h3.205L18 14.01l.99 3.048h3.205L20.899 18H36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EF2B2D",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v9h15.101l-1.296-.942h3.205L18 14.01l.99 3.048h3.205L20.899 18H36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M15.407 21.99L18 20.106l2.593 1.884-.991-3.048L20.899 18l1.296-.942H18.99L18 14.01l-.99 3.048h-3.205l1.296.942 1.297.942z", {["fill"]: "#FCD116",["d"]: "M15.407 21.99L18 20.106l2.593 1.884-.991-3.048L20.899 18l1.296-.942H18.99L18 14.01l-.99 3.048h-3.205l1.296.942 1.297.942z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};