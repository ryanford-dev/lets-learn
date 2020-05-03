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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M20.589 5.8l6 7.2H23v7.2c0 5.523-4.683 10-10.206 10-1.414 0-2.861-.298-4.081-.827l2.699-3.3c.396.083.987.127 1.408.127 3.314 0 6.18-2.686 6.18-6V13h-4.411l6-7.2z", {["fill"]: "#FFF",["d"]: "M20.589 5.8l6 7.2H23v7.2c0 5.523-4.683 10-10.206 10-1.414 0-2.861-.298-4.081-.827l2.699-3.3c.396.083.987.127 1.408.127 3.314 0 6.18-2.686 6.18-6V13h-4.411l6-7.2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};