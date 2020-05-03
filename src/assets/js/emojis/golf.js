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
				el.appendChild(svg["path"]("M4 36h28c2 0 3.731-2 3.731-4 0-4.355-4.634-11-17.731-11C4.508 21 .193 27.459.193 32 .193 34 2 36 4 36z", {["fill"]: "#77B255",["d"]: "M4 36h28c2 0 3.731-2 3.731-4 0-4.355-4.634-11-17.731-11C4.508 21 .193 27.459.193 32 .193 34 2 36 4 36z",}));el.appendChild(svg["path"]("M11.292 29.5s.958.667 1.958.667c2.208-4.875 13-7.5 14-7.5.15 0 .33-.018.512-.047-.716-.28-1.502-.521-2.33-.737-4.626.063-13.031 3.917-14.14 7.617z", {["fill"]: "#5C913B",["d"]: "M11.292 29.5s.958.667 1.958.667c2.208-4.875 13-7.5 14-7.5.15 0 .33-.018.512-.047-.716-.28-1.502-.521-2.33-.737-4.626.063-13.031 3.917-14.14 7.617z",}));el.appendChild(svg["ellipse"](12.5, 30.5, 13, 5, {["rx"]: "6.5",["cy"]: "30.5",["ry"]: "2.5",["fill"]: "#292F33",["cx"]: "12.5",}));el.appendChild(svg["path"]("M10 4v26c0 .553.448.844 1 .844s1-.291 1-.844V4h-2z", {["fill"]: "#FFAC33",["d"]: "M10 4v26c0 .553.448.844 1 .844s1-.291 1-.844V4h-2z",}));el.appendChild(svg["path"]("M10 3C10 .8 11.695-.395 13.767.345l9.466 3.381c2.071.74 2.071 1.951 0 2.69l-9.466 3.381C11.695 10.538 10 9.343 10 7.143V3z", {["fill"]: "#DD2E44",["d"]: "M10 3C10 .8 11.695-.395 13.767.345l9.466 3.381c2.071.74 2.071 1.951 0 2.69l-9.466 3.381C11.695 10.538 10 9.343 10 7.143V3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};