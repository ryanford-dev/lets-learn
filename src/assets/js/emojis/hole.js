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
				el.appendChild(svg["path"]("M18 11.001c-9.389 0-17 3.358-17 7.5s7.611 7.5 17 7.5 17-3.358 17-7.5-7.611-7.5-17-7.5z", {["fill"]: "#31373D",["d"]: "M18 11.001c-9.389 0-17 3.358-17 7.5s7.611 7.5 17 7.5 17-3.358 17-7.5-7.611-7.5-17-7.5z",}));el.appendChild(svg["path"]("M33.871 19.284c.079-.256.129-.516.129-.783 0-1.418-1.16-2.676-3-3.699v2.778c1.083.51 2.05 1.08 2.871 1.704zM5 14.802c-1.84 1.023-3 2.281-3 3.699 0 .267.05.527.129.783C2.95 18.66 3.917 18.09 5 17.58v-2.778z", {["fill"]: "#7D8B93",["d"]: "M33.871 19.284c.079-.256.129-.516.129-.783 0-1.418-1.16-2.676-3-3.699v2.778c1.083.51 2.05 1.08 2.871 1.704zM5 14.802c-1.84 1.023-3 2.281-3 3.699 0 .267.05.527.129.783C2.95 18.66 3.917 18.09 5 17.58v-2.778z",}));el.appendChild(svg["path"]("M18 12.001c-4.766 0-9.87 1.06-13 2.801v2.778c3.398-1.598 7.967-2.579 13-2.579s9.602.981 13 2.579v-2.778c-3.13-1.741-8.234-2.801-13-2.801z", {["fill"]: "#CCD6DD",["d"]: "M18 12.001c-4.766 0-9.87 1.06-13 2.801v2.778c3.398-1.598 7.967-2.579 13-2.579s9.602.981 13 2.579v-2.778c-3.13-1.741-8.234-2.801-13-2.801z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};