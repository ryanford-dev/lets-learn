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
				el.appendChild(svg["path"]("M35 12c0-3.866-3.134-7-7-7-1.167 0-2.265.29-3.232.794-2.082-2.827-5.425-4.669-9.205-4.669-5.132 0-9.475 3.38-10.923 8.036C1.982 9.778 0 12.155 0 15c0 2.979 2.174 5.445 5.021 5.913C5.237 24.862 8.498 28 12.5 28c2.176 0 4.13-.933 5.5-2.413C19.37 27.067 21.323 28 23.5 28c4.143 0 7.5-3.357 7.5-7.5 0-.71-.105-1.394-.289-2.045C33.23 17.396 35 14.905 35 12z", {["fill"]: "#BDDDF4",["d"]: "M35 12c0-3.866-3.134-7-7-7-1.167 0-2.265.29-3.232.794-2.082-2.827-5.425-4.669-9.205-4.669-5.132 0-9.475 3.38-10.923 8.036C1.982 9.778 0 12.155 0 15c0 2.979 2.174 5.445 5.021 5.913C5.237 24.862 8.498 28 12.5 28c2.176 0 4.13-.933 5.5-2.413C19.37 27.067 21.323 28 23.5 28c4.143 0 7.5-3.357 7.5-7.5 0-.71-.105-1.394-.289-2.045C33.23 17.396 35 14.905 35 12z",}));el.appendChild(svg["circle"](4, 31, 6, {["cy"]: "31",["r"]: "3",["fill"]: "#BDDDF4",["cx"]: "4",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};