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
				el.appendChild(svg["path"]("M3 3h2v33H3z", {["fill"]: "#CCD6DD",["d"]: "M3 3h2v33H3z",}));el.appendChild(svg["circle"](4, 3, 6, {["cy"]: "3",["r"]: "3",["fill"]: "#F4900C",["cx"]: "4",}));el.appendChild(svg["path"]("M9 28H4c-.552 0-1-.447-1-1s.448-1 1-1h5c.552 0 1 .447 1 1s-.448 1-1 1z", {["fill"]: "#66757F",["d"]: "M9 28H4c-.552 0-1-.447-1-1s.448-1 1-1h5c.552 0 1 .447 1 1s-.448 1-1 1z",}));el.appendChild(svg["path"]("M31 27c0-2.209 6.209-6 4-6h-8.447c-1.203-1.464-4.595-3-7.053-3-2.459 0-3.23 1.536-3.435 3H10c-2.209 0-3 1.791-3 4v4c0 2.209.791 4 3 4h25c2.209 0-4-3.791-4-6z", {["fill"]: "#DD2E44",["d"]: "M31 27c0-2.209 6.209-6 4-6h-8.447c-1.203-1.464-4.595-3-7.053-3-2.459 0-3.23 1.536-3.435 3H10c-2.209 0-3 1.791-3 4v4c0 2.209.791 4 3 4h25c2.209 0-4-3.791-4-6z",}));el.appendChild(svg["circle"](12, 25, 6, {["cy"]: "25",["r"]: "3",["fill"]: "#FFF",["cx"]: "12",}));el.appendChild(svg["circle"](11.5, 24.5, 3, {["cy"]: "24.5",["cx"]: "11.5",["r"]: "1.5",}));el.appendChild(svg["path"]("M35 21H15.962c2.068 2.286 4.742 6.465-.037 12H35c2.209 0-4-3.791-4-6s6.209-6 4-6z", {["fill"]: "#F4ABBA",["d"]: "M35 21H15.962c2.068 2.286 4.742 6.465-.037 12H35c2.209 0-4-3.791-4-6s6.209-6 4-6z",}));el.appendChild(svg["path"]("M9 12H4c-.552 0-1-.448-1-1s.448-1 1-1h5c.552 0 1 .448 1 1s-.448 1-1 1z", {["fill"]: "#66757F",["d"]: "M9 12H4c-.552 0-1-.448-1-1s.448-1 1-1h5c.552 0 1 .448 1 1s-.448 1-1 1z",}));el.appendChild(svg["path"]("M31 11c0-2.209 6.209-6 4-6h-8.446c-1.203-1.464-4.595-3-7.054-3-2.459 0-3.23 1.536-3.435 3H10C7.791 5 7 6.791 7 9v4c0 2.209.791 4 3 4h25c2.209 0-4-3.791-4-6z", {["fill"]: "#55ACEE",["d"]: "M31 11c0-2.209 6.209-6 4-6h-8.446c-1.203-1.464-4.595-3-7.054-3-2.459 0-3.23 1.536-3.435 3H10C7.791 5 7 6.791 7 9v4c0 2.209.791 4 3 4h25c2.209 0-4-3.791-4-6z",}));el.appendChild(svg["circle"](12, 9, 6, {["cy"]: "9",["r"]: "3",["fill"]: "#FFF",["cx"]: "12",}));el.appendChild(svg["circle"](11.5, 8.5, 3, {["cy"]: "8.5",["cx"]: "11.5",["r"]: "1.5",}));el.appendChild(svg["path"]("M35 5H15.962c2.068 2.286 4.742 6.465-.037 12H35c2.209 0-4-3.791-4-6s6.209-6 4-6z", {["fill"]: "#BBDDF5",["d"]: "M35 5H15.962c2.068 2.286 4.742 6.465-.037 12H35c2.209 0-4-3.791-4-6s6.209-6 4-6z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};