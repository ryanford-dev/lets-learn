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
				el.appendChild(svg["path"]("M13 3C7.477 3 3 7.477 3 13v10h4V13c0-3.313 2.686-5.999 6-5.999S19 9.687 19 13v10h4V13c0-5.523-4.477-10-10-10z", {["fill"]: "#AAB8C2",["d"]: "M13 3C7.477 3 3 7.477 3 13v10h4V13c0-3.313 2.686-5.999 6-5.999S19 9.687 19 13v10h4V13c0-5.523-4.477-10-10-10z",}));el.appendChild(svg["path"]("M26 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V20c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v12z", {["fill"]: "#FFAC33",["d"]: "M26 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V20c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v12z",}));el.appendChild(svg["path"]("M32 22l-16-4-11 7h12.184c.413-1.163 1.512-2 2.816-2 1.656 0 3 1.343 3 3s-1.344 3-3 3c-1.305 0-2.403-.837-2.816-2H5l11 7 16-4-1-4 1-4z", {["fill"]: "#66757F",["d"]: "M32 22l-16-4-11 7h12.184c.413-1.163 1.512-2 2.816-2 1.656 0 3 1.343 3 3s-1.344 3-3 3c-1.305 0-2.403-.837-2.816-2H5l11 7 16-4-1-4 1-4z",}));el.appendChild(svg["path"]("M36 18h-3c-.55 0-1.201.402-1.447.894l-3.105 6.211c-.246.492-.246 1.297 0 1.789l3.105 6.211c.246.493.897.895 1.447.895h3V18z", {["fill"]: "#292F33",["d"]: "M36 18h-3c-.55 0-1.201.402-1.447.894l-3.105 6.211c-.246.492-.246 1.297 0 1.789l3.105 6.211c.246.493.897.895 1.447.895h3V18z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};