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
				el.appendChild(svg["path"]("M35 12c0-1-1-4-4-4H9.401c-1.377 0-3.29 1.791-4.302 4L2 17c-1.453.599-2 2.331-2 4v6c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-8c0-1.027-1-7-1-7z", {["fill"]: "#CCD6DD",["d"]: "M35 12c0-1-1-4-4-4H9.401c-1.377 0-3.29 1.791-4.302 4L2 17c-1.453.599-2 2.331-2 4v6c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-8c0-1.027-1-7-1-7z",}));el.appendChild(svg["path"]("M9 25c-3.267 0-5.918 2.612-5.993 5.861.32.081.648.139.993.139h11c0-3.313-2.686-6-6-6zm23.993 5.86C32.918 27.612 30.268 25 27 25c-3.312 0-6 2.687-6 6h11c.345 0 .674-.058.993-.14z", {["fill"]: "#E1E8ED",["d"]: "M9 25c-3.267 0-5.918 2.612-5.993 5.861.32.081.648.139.993.139h11c0-3.313-2.686-6-6-6zm23.993 5.86C32.918 27.612 30.268 25 27 25c-3.312 0-6 2.687-6 6h11c.345 0 .674-.058.993-.14z",}));el.appendChild(svg["circle"](9, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "9",}));el.appendChild(svg["circle"](9, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "9",}));el.appendChild(svg["circle"](27, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "27",}));el.appendChild(svg["circle"](27, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "27",}));el.appendChild(svg["path"]("M0 21h36v3H0zm31-8h-3v-3h-2v3h-3v2h3v3h2v-3h3z", {["fill"]: "#DD2E44",["d"]: "M0 21h36v3H0zm31-8h-3v-3h-2v3h-3v2h3v3h2v-3h3z",}));el.appendChild(svg["path"]("M8 10h5v7H4z", {["fill"]: "#55ACEE",["d"]: "M8 10h5v7H4z",}));el.appendChild(svg["path"]("M15 6.5c0 .829-.671 1.5-1.5 1.5h-2c-.829 0-1.5-.671-1.5-1.5S10.671 5 11.5 5h2c.829 0 1.5.671 1.5 1.5z", {["fill"]: "#DD2E44",["d"]: "M15 6.5c0 .829-.671 1.5-1.5 1.5h-2c-.829 0-1.5-.671-1.5-1.5S10.671 5 11.5 5h2c.829 0 1.5.671 1.5 1.5z",}));el.appendChild(svg["path"]("M18 6.5c0 .829-.671 1.5-1.5 1.5h-2c-.829 0-1.5-.671-1.5-1.5S13.671 5 14.5 5h2c.829 0 1.5.671 1.5 1.5z", {["fill"]: "#55ACEE",["d"]: "M18 6.5c0 .829-.671 1.5-1.5 1.5h-2c-.829 0-1.5-.671-1.5-1.5S13.671 5 14.5 5h2c.829 0 1.5.671 1.5 1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};