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
				el.appendChild(svg["path"]("M12.908 30.75c-.276 2.209-2.291 3-4.5 3s-3.776-1.791-3.5-4l1-9c.276-2.209 2.291-4 4.5-4s6.468 0 3.5 4-1 10-1 10z", {["fill"]: "#BE1931",["d"]: "M12.908 30.75c-.276 2.209-2.291 3-4.5 3s-3.776-1.791-3.5-4l1-9c.276-2.209 2.291-4 4.5-4s6.468 0 3.5 4-1 10-1 10z",}));el.appendChild(svg["path"]("M35.825 14.75c0 6.902-1.544 12.5-3.45 12.5-1.905 0-20.45-5.598-20.45-12.5 0-6.903 18.545-12.5 20.45-12.5 1.906 0 3.45 5.597 3.45 12.5z", {["fill"]: "#CCD6DD",["d"]: "M35.825 14.75c0 6.902-1.544 12.5-3.45 12.5-1.905 0-20.45-5.598-20.45-12.5 0-6.903 18.545-12.5 20.45-12.5 1.906 0 3.45 5.597 3.45 12.5z",}));el.appendChild(svg["ellipse"](32.375, 14.75, 6.9, 25, {["rx"]: "3.45",["cy"]: "14.75",["ry"]: "12.5",["fill"]: "#66757F",["cx"]: "32.375",}));el.appendChild(svg["path"]("M17.925 21.75l-14-1c-5 0-5-12 0-12l14-1c-3 3-3 11 0 14z", {["fill"]: "#DD2E44",["d"]: "M17.925 21.75l-14-1c-5 0-5-12 0-12l14-1c-3 3-3 11 0 14z",}));el.appendChild(svg["ellipse"](31.325, 14.75, 3, 8.696, {["rx"]: "1.5",["cy"]: "14.75",["ry"]: "4.348",["fill"]: "#99AAB5",["cx"]: "31.325",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};