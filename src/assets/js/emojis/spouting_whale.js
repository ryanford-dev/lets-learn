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
				el.appendChild(svg["path"]("M32 12c2.122-2.122 5 14.312-3 21-2.757 2.305-6 2.969-8 2.969-2.371 0-10.029.031-13 .031-7.18 0-8-4.925-8-11s.82-11 8-11c6 0 10 2 13 3.996 4.977 3.312 5.992 3.861 8 2.004 3.213-2.97 1-6 3-8z", {["fill"]: "#3B88C3",["d"]: "M32 12c2.122-2.122 5 14.312-3 21-2.757 2.305-6 2.969-8 2.969-2.371 0-10.029.031-13 .031-7.18 0-8-4.925-8-11s.82-11 8-11c6 0 10 2 13 3.996 4.977 3.312 5.992 3.861 8 2.004 3.213-2.97 1-6 3-8z",}));el.appendChild(svg["path"]("M34.003 23c-.465 3.727-2.041 7.523-5.003 10-2.757 2.305-6 2.969-8 2.969-2.371 0-10.029.031-13 .031-4.035 0-6.062-1.555-7.062-3.996C.157 30.102 4 33 15 33c14 0 17-5 19.003-10z", {["fill"]: "#55ACEE",["d"]: "M34.003 23c-.465 3.727-2.041 7.523-5.003 10-2.757 2.305-6 2.969-8 2.969-2.371 0-10.029.031-13 .031-4.035 0-6.062-1.555-7.062-3.996C.157 30.102 4 33 15 33c14 0 17-5 19.003-10z",}));el.appendChild(svg["path"]("M32 14c4.123 0 4-5 4-7s-2 1-5 2-7-2-6 0 3 5 7 5z", {["fill"]: "#3B88C3",["d"]: "M32 14c4.123 0 4-5 4-7s-2 1-5 2-7-2-6 0 3 5 7 5z",}));el.appendChild(svg["path"]("M10 7c0 2.209-.896 6-2 6S6 9.209 6 7s.896-2 2-2 2-.209 2 2z", {["fill"]: "#55ACEE",["d"]: "M10 7c0 2.209-.896 6-2 6S6 9.209 6 7s.896-2 2-2 2-.209 2 2z",}));el.appendChild(svg["path"]("M8 5c0-3-6-2-6 0s3 1 4 3 2-3 2-3zm0 0c0-3 6-2 6 0s-3 1-4 3-2-3-2-3z", {["fill"]: "#55ACEE",["d"]: "M8 5c0-3-6-2-6 0s3 1 4 3 2-3 2-3zm0 0c0-3 6-2 6 0s-3 1-4 3-2-3-2-3z",}));el.appendChild(svg["circle"](6.5, 25.5, 3, {["cy"]: "25.5",["r"]: "1.5",["fill"]: "#292F33",["cx"]: "6.5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};