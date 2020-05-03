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
				el.appendChild(svg["path"]("M0 21v7c0 1.657 1.343 3 3 3h30c1.657 0 3-1.343 3-3v-7H0z", {["fill"]: "#808285",["d"]: "M0 21v7c0 1.657 1.343 3 3 3h30c1.657 0 3-1.343 3-3v-7H0z",}));el.appendChild(svg["path"]("M36 22v-9c0-1.657-3.343-3-5-3H11c-8 0-11 2.343-11 4v8h36z", {["fill"]: "#CCD6DD",["d"]: "M36 22v-9c0-1.657-3.343-3-5-3H11c-8 0-11 2.343-11 4v8h36z",}));el.appendChild(svg["path"]("M0 22h36v3H0z", {["fill"]: "#939598",["d"]: "M0 22h36v3H0z",}));el.appendChild(svg["path"]("M7 25c-3.063 0-5.586 2.298-5.95 5.263.526.453 1.202.737 1.95.737h10c0-3.313-2.686-6-6-6zm27.95 5.263C34.586 27.298 32.063 25 29 25c-3.313 0-6 2.687-6 6h10c.749 0 1.425-.284 1.95-.737z", {["fill"]: "#BCBEC0",["d"]: "M7 25c-3.063 0-5.586 2.298-5.95 5.263.526.453 1.202.737 1.95.737h10c0-3.313-2.686-6-6-6zm27.95 5.263C34.586 27.298 32.063 25 29 25c-3.313 0-6 2.687-6 6h10c.749 0 1.425-.284 1.95-.737z",}));el.appendChild(svg["circle"](7, 31, 8, {["cy"]: "31",["cx"]: "7",["r"]: "4",}));el.appendChild(svg["circle"](7, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "7",}));el.appendChild(svg["circle"](29, 31, 8, {["cy"]: "31",["cx"]: "29",["r"]: "4",}));el.appendChild(svg["circle"](29, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "29",}));el.appendChild(svg["path"]("M0 25h1v2H0zm35-2h1v2h-1z", {["fill"]: "#F4900C",["d"]: "M0 25h1v2H0zm35-2h1v2h-1z",}));el.appendChild(svg["path"]("M1 13h35v10H1z", {["fill"]: "#58595B",["d"]: "M1 13h35v10H1z",}));el.appendChild(svg["path"]("M2 13H.342C.11 13.344 0 13.685 0 14v11h2c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2z", {["fill"]: "#292F33",["d"]: "M2 13H.342C.11 13.344 0 13.685 0 14v11h2c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M31 20c0 .553-.447 1-1 1H7c-.552 0-1-.447-1-1v-4c0-.552.448-1 1-1h23c.553 0 1 .448 1 1v4z", {["fill"]: "#55ACEE",["d"]: "M31 20c0 .553-.447 1-1 1H7c-.552 0-1-.447-1-1v-4c0-.552.448-1 1-1h23c.553 0 1 .448 1 1v4z",}));el.appendChild(svg["path"]("M35 19h1v2h-1z", {["fill"]: "#FFAC33",["d"]: "M35 19h1v2h-1z",}));el.appendChild(svg["path"]("M1 15H0v8h1c.552 0 1-.447 1-1v-6c0-.552-.448-1-1-1z", {["fill"]: "#55ACEE",["d"]: "M1 15H0v8h1c.552 0 1-.447 1-1v-6c0-.552-.448-1-1-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};