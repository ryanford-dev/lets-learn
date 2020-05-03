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
				el.appendChild(svg["path"]("M34 16C34 6 26.837 0 18 0 9.164 0 2 6 2 16c0 5.574.002 10.388 6 12.64V33c0 1.657 1.343 3 3 3s3-1.343 3-3v-3.155c.324.027.659.05 1 .07V33c0 1.657 1.343 3 3 3s3-1.343 3-3v-3.085c.342-.021.676-.043 1-.07V33c0 1.657 1.344 3 3 3 1.657 0 3-1.343 3-3v-4.36c5.998-2.252 6-7.066 6-12.64z", {["fill"]: "#CCD6DD",["d"]: "M34 16C34 6 26.837 0 18 0 9.164 0 2 6 2 16c0 5.574.002 10.388 6 12.64V33c0 1.657 1.343 3 3 3s3-1.343 3-3v-3.155c.324.027.659.05 1 .07V33c0 1.657 1.343 3 3 3s3-1.343 3-3v-3.085c.342-.021.676-.043 1-.07V33c0 1.657 1.344 3 3 3 1.657 0 3-1.343 3-3v-4.36c5.998-2.252 6-7.066 6-12.64z",}));el.appendChild(svg["circle"](11, 14, 10, {["cy"]: "14",["r"]: "5",["fill"]: "#292F33",["cx"]: "11",}));el.appendChild(svg["circle"](25, 14, 10, {["cy"]: "14",["r"]: "5",["fill"]: "#292F33",["cx"]: "25",}));el.appendChild(svg["path"]("M19.903 23.062C19.651 22.449 18.9 22 18 22s-1.652.449-1.903 1.062c-.632.176-1.097.75-1.097 1.438 0 .828.671 1.5 1.5 1.5.655 0 1.206-.422 1.41-1.007.03.001.059.007.09.007s.06-.006.09-.007c.205.585.756 1.007 1.41 1.007.828 0 1.5-.672 1.5-1.5 0-.688-.466-1.261-1.097-1.438z", {["fill"]: "#292F33",["d"]: "M19.903 23.062C19.651 22.449 18.9 22 18 22s-1.652.449-1.903 1.062c-.632.176-1.097.75-1.097 1.438 0 .828.671 1.5 1.5 1.5.655 0 1.206-.422 1.41-1.007.03.001.059.007.09.007s.06-.006.09-.007c.205.585.756 1.007 1.41 1.007.828 0 1.5-.672 1.5-1.5 0-.688-.466-1.261-1.097-1.438z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};