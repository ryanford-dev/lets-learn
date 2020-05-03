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
				el.appendChild(svg["path"]("M35 26c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V6.313C1 4.104 6.791 0 9 0h20.625C32.719 0 35 2.312 35 5.375V26z", {["fill"]: "#A0041E",["d"]: "M35 26c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V6.313C1 4.104 6.791 0 9 0h20.625C32.719 0 35 2.312 35 5.375V26z",}));el.appendChild(svg["path"]("M33 30c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V6c0-4.119-.021-4 5-4h21c2.209 0 4 1.791 4 4v24z", {["fill"]: "#CCD6DD",["d"]: "M33 30c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V6c0-4.119-.021-4 5-4h21c2.209 0 4 1.791 4 4v24z",}));el.appendChild(svg["path"]("M31 31c0 1.657-1.343 3-3 3H4c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z", {["fill"]: "#E1E8ED",["d"]: "M31 31c0 1.657-1.343 3-3 3H4c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z",}));el.appendChild(svg["path"]("M31 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V10c0-2.209 1.791-4 4-4h21c2.209 0 4 1.791 4 4v22z", {["fill"]: "#BE1931",["d"]: "M31 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V10c0-2.209 1.791-4 4-4h21c2.209 0 4 1.791 4 4v22z",}));el.appendChild(svg["path"]("M29 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V12c0-2.209 1.791-4 4-4h19.335C27.544 8 29 9.456 29 11.665V32z", {["fill"]: "#DD2E44",["d"]: "M29 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V12c0-2.209 1.791-4 4-4h19.335C27.544 8 29 9.456 29 11.665V32z",}));el.appendChild(svg["path"]("M6 6C4.312 6 4.269 4.078 5 3.25 5.832 2.309 7.125 2 9.438 2H11V0H8.281C4.312 0 1 2.5 1 5.375V32c0 2.209 1.791 4 4 4h2V6H6z", {["fill"]: "#A0041E",["d"]: "M6 6C4.312 6 4.269 4.078 5 3.25 5.832 2.309 7.125 2 9.438 2H11V0H8.281C4.312 0 1 2.5 1 5.375V32c0 2.209 1.791 4 4 4h2V6H6z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};