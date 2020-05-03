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
				el.appendChild(svg["path"]("M0 22v6c0 1.657 1.343 3 3 3h30c1.657 0 3-1.343 3-3v-6H0z", {["fill"]: "#77B255",["d"]: "M0 22v6c0 1.657 1.343 3 3 3h30c1.657 0 3-1.343 3-3v-6H0z",}));el.appendChild(svg["path"]("M15 12c-.226 0-.453-.076-.64-.232-.424-.354-.482-.984-.128-1.408 5.186-6.224 12.325-7.307 12.626-7.35.047-.007.095-.01.142-.01h3c.553 0 1 .448 1 1s-.447 1-1 1h-2.919c-.69.119-6.878 1.319-11.312 6.641-.198.237-.482.359-.769.359z", {["fill"]: "#6D6E71",["d"]: "M15 12c-.226 0-.453-.076-.64-.232-.424-.354-.482-.984-.128-1.408 5.186-6.224 12.325-7.307 12.626-7.35.047-.007.095-.01.142-.01h3c.553 0 1 .448 1 1s-.447 1-1 1h-2.919c-.69.119-6.878 1.319-11.312 6.641-.198.237-.482.359-.769.359z",}));el.appendChild(svg["path"]("M11 9h14v4H11z", {["fill"]: "#A7A9AC",["d"]: "M11 9h14v4H11z",}));el.appendChild(svg["path"]("M36 22v-8c0-1.657-1.343-3-3-3H3c-1.657 0-3 1.343-3 3v8h36z", {["fill"]: "#E6E7E8",["d"]: "M36 22v-8c0-1.657-1.343-3-3-3H3c-1.657 0-3 1.343-3 3v8h36z",}));el.appendChild(svg["path"]("M0 22h36v2H0zm7 3c-3.063 0-5.586 2.298-5.95 5.263.526.453 1.202.737 1.95.737h10c0-3.313-2.686-6-6-6zm27.95 5.263C34.586 27.298 32.063 25 29 25c-3.313 0-6 2.687-6 6h10c.749 0 1.425-.284 1.95-.737z", {["fill"]: "#5C913B",["d"]: "M0 22h36v2H0zm7 3c-3.063 0-5.586 2.298-5.95 5.263.526.453 1.202.737 1.95.737h10c0-3.313-2.686-6-6-6zm27.95 5.263C34.586 27.298 32.063 25 29 25c-3.313 0-6 2.687-6 6h10c.749 0 1.425-.284 1.95-.737z",}));el.appendChild(svg["circle"](7, 31, 8, {["cy"]: "31",["cx"]: "7",["r"]: "4",}));el.appendChild(svg["circle"](7, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "7",}));el.appendChild(svg["circle"](29, 31, 8, {["cy"]: "31",["cx"]: "29",["r"]: "4",}));el.appendChild(svg["circle"](29, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "29",}));el.appendChild(svg["path"]("M27 19c0 .553-.447 1-1 1h-3c-.553 0-1-.447-1-1v-3c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v3zm7 0c0 .553-.447 1-1 1h-3c-.553 0-1-.447-1-1v-3c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v3zm-21 0c0 .553-.448 1-1 1H9c-.552 0-1-.447-1-1v-3c0-.552.448-1 1-1h3c.552 0 1 .448 1 1v3zm7 0c0 .553-.447 1-1 1h-3c-.552 0-1-.447-1-1v-3c0-.552.448-1 1-1h3c.553 0 1 .448 1 1v3zM5 15H0v7h5c.552 0 1-.447 1-1v-5c0-.552-.448-1-1-1z", {["fill"]: "#55ACEE",["d"]: "M27 19c0 .553-.447 1-1 1h-3c-.553 0-1-.447-1-1v-3c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v3zm7 0c0 .553-.447 1-1 1h-3c-.553 0-1-.447-1-1v-3c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v3zm-21 0c0 .553-.448 1-1 1H9c-.552 0-1-.447-1-1v-3c0-.552.448-1 1-1h3c.552 0 1 .448 1 1v3zm7 0c0 .553-.447 1-1 1h-3c-.552 0-1-.447-1-1v-3c0-.552.448-1 1-1h3c.553 0 1 .448 1 1v3zM5 15H0v7h5c.552 0 1-.447 1-1v-5c0-.552-.448-1-1-1z",}));el.appendChild(svg["path"]("M0 25h1v2H0z", {["fill"]: "#FFE8B6",["d"]: "M0 25h1v2H0z",}));el.appendChild(svg["path"]("M35 25h1v2h-1z", {["fill"]: "#EA596E",["d"]: "M35 25h1v2h-1z",}));el.appendChild(svg["path"]("M35 22h1v2h-1z", {["fill"]: "#F4ABBA",["d"]: "M35 22h1v2h-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};