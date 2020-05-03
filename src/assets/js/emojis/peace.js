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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#9266CC",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M18 4C10.281 4 4 10.281 4 18s6.281 14 14 14 14-6.281 14-14S25.719 4 18 4zm11.103 14c0 2.246-.675 4.335-1.827 6.085l-7.823-7.178V7.003c5.437.716 9.65 5.368 9.65 10.997zm-12.65 10.983c-2.209-.31-4.207-1.268-5.802-2.682l5.802-5.323v8.005zm3-8.005l5.848 5.366c-1.609 1.41-3.624 2.36-5.848 2.653v-8.019zm-3-13.961v9.889L8.69 24.03C7.56 22.291 6.897 20.223 6.897 18c0-5.596 4.165-10.226 9.556-10.983z", {["fill"]: "#FFF",["d"]: "M18 4C10.281 4 4 10.281 4 18s6.281 14 14 14 14-6.281 14-14S25.719 4 18 4zm11.103 14c0 2.246-.675 4.335-1.827 6.085l-7.823-7.178V7.003c5.437.716 9.65 5.368 9.65 10.997zm-12.65 10.983c-2.209-.31-4.207-1.268-5.802-2.682l5.802-5.323v8.005zm3-8.005l5.848 5.366c-1.609 1.41-3.624 2.36-5.848 2.653v-8.019zm-3-13.961v9.889L8.69 24.03C7.56 22.291 6.897 20.223 6.897 18c0-5.596 4.165-10.226 9.556-10.983z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};