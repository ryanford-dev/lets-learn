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
				el.appendChild(svg["path"]("M32 13H4c-2.209 0-4 1.791-4 4v2c0 2.209 1.791 4 4 4v9c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4v-9c2.209 0 4-1.791 4-4v-2c0-2.209-1.791-4-4-4z", {["fill"]: "#292F33",["d"]: "M32 13H4c-2.209 0-4 1.791-4 4v2c0 2.209 1.791 4 4 4v9c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4v-9c2.209 0 4-1.791 4-4v-2c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M30 15c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V2c0-1.105.896-2 2-2h20c1.104 0 2 .896 2 2v13z", {["fill"]: "#CCD6DD",["d"]: "M30 15c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V2c0-1.105.896-2 2-2h20c1.104 0 2 .896 2 2v13z",}));el.appendChild(svg["path"]("M18 13c0 .552-.447 1-1 1H9c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h8c.553 0 1 .448 1 1v10z", {["fill"]: "#55ACEE",["d"]: "M18 13c0 .552-.447 1-1 1H9c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h8c.553 0 1 .448 1 1v10z",}));el.appendChild(svg["path"]("M30 32c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V21c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v11z", {["fill"]: "#CCD6DD",["d"]: "M30 32c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V21c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v11z",}));el.appendChild(svg["path"]("M28 4c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1z", {["fill"]: "#66757F",["d"]: "M28 4c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1z",}));el.appendChild(svg["path"]("M14 20c0 .553-.448 1-1 1s-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4zm10 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1v-4c0-.553.447-1 1-1 .553 0 1 .447 1 1v4z", {["fill"]: "#99AAB5",["d"]: "M14 20c0 .553-.448 1-1 1s-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4zm10 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1v-4c0-.553.447-1 1-1 .553 0 1 .447 1 1v4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};