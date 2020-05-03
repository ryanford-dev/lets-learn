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
				el.appendChild(svg["path"]("M15.5 31H32c2.209 0 4-1.791 4-4.5v-6H15.5V31zM32 5H15.5v10.5H36V9c0-2.209-1.791-4-4-4zM10.5 5H4C1.792 5 .002 6.789 0 8.997V15.5h10.5V5zM0 20.5v6.004C.002 29.211 1.792 31 4 31h6.5V20.5H0z", {["fill"]: "#006AA7",["d"]: "M15.5 31H32c2.209 0 4-1.791 4-4.5v-6H15.5V31zM32 5H15.5v10.5H36V9c0-2.209-1.791-4-4-4zM10.5 5H4C1.792 5 .002 6.789 0 8.997V15.5h10.5V5zM0 20.5v6.004C.002 29.211 1.792 31 4 31h6.5V20.5H0z",}));el.appendChild(svg["path"]("M15.5 5h-5v10.5H0v5h10.5V31h5V20.5H36v-5H15.5z", {["fill"]: "#FECC00",["d"]: "M15.5 5h-5v10.5H0v5h10.5V31h5V20.5H36v-5H15.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};