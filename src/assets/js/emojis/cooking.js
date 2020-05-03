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
				el.appendChild(svg["path"]("M34.238 27.931c-.704-.703-3.857-2.661-6.935-4.364C28.999 21.137 30 18.187 30 15c0-8.284-6.716-15-15-15C6.715 0 0 6.716 0 15c0 8.284 6.715 15 15 15 3.159 0 6.086-.981 8.504-2.649 1.705 3.081 3.666 6.24 4.37 6.944C29.288 35.709 31 36.002 32 36c1.177-.002 4.055-2.881 4-4-.049-.999-.348-2.655-1.762-4.069z", {["fill"]: "#292F33",["d"]: "M34.238 27.931c-.704-.703-3.857-2.661-6.935-4.364C28.999 21.137 30 18.187 30 15c0-8.284-6.716-15-15-15C6.715 0 0 6.716 0 15c0 8.284 6.715 15 15 15 3.159 0 6.086-.981 8.504-2.649 1.705 3.081 3.666 6.24 4.37 6.944C29.288 35.709 31 36.002 32 36c1.177-.002 4.055-2.881 4-4-.049-.999-.348-2.655-1.762-4.069z",}));el.appendChild(svg["circle"](15, 15, 24, {["cy"]: "15",["r"]: "12",["fill"]: "#66757F",["cx"]: "15",}));el.appendChild(svg["path"]("M16 25c4.863-1.533 4-5 4-9s4.001-6.708.334-9.75c-2.177-1.806-6.75-2.417-8.875-1.625C9.506 5.352 7 6.833 7 9.833s-.058 2.927-1.708 5.625C2.667 19.75 9.125 27.167 16 25z", {["fill"]: "#F5F8FA",["d"]: "M16 25c4.863-1.533 4-5 4-9s4.001-6.708.334-9.75c-2.177-1.806-6.75-2.417-8.875-1.625C9.506 5.352 7 6.833 7 9.833s-.058 2.927-1.708 5.625C2.667 19.75 9.125 27.167 16 25z",}));el.appendChild(svg["circle"](13, 18, 8, {["cy"]: "18",["r"]: "4",["fill"]: "#FFAC33",["cx"]: "13",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};