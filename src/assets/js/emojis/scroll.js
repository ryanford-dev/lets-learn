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
				el.appendChild(svg["path"]("M32 0H10C7.791 0 6 1.791 6 4v24H4c-2.209 0-4 1.791-4 4s1.791 4 4 4h24c2.209 0 4-1.791 4-4V8c2.209 0 4-1.791 4-4s-1.791-4-4-4z", {["fill"]: "#FFD983",["d"]: "M32 0H10C7.791 0 6 1.791 6 4v24H4c-2.209 0-4 1.791-4 4s1.791 4 4 4h24c2.209 0 4-1.791 4-4V8c2.209 0 4-1.791 4-4s-1.791-4-4-4z",}));el.appendChild(svg["path"]("M8 10h24V8H10L8 7z", {["fill"]: "#E39F3D",["d"]: "M8 10h24V8H10L8 7z",}));el.appendChild(svg["path"]("M10 0C7.791 0 6 1.791 6 4v24.555C5.41 28.211 4.732 28 4 28c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4V7.445C8.59 7.789 9.268 8 10 8c2.209 0 4-1.791 4-4s-1.791-4-4-4z", {["fill"]: "#FFE8B6",["d"]: "M10 0C7.791 0 6 1.791 6 4v24.555C5.41 28.211 4.732 28 4 28c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4V7.445C8.59 7.789 9.268 8 10 8c2.209 0 4-1.791 4-4s-1.791-4-4-4z",}));el.appendChild(svg["path"]("M12 4c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2M6 32c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2m24-17c0 .552-.447 1-1 1H11c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1s.448-1 1-1h18c.553 0 1 .447 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1s.448-1 1-1h18c.553 0 1 .447 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1", {["fill"]: "#C1694F",["d"]: "M12 4c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2M6 32c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2m24-17c0 .552-.447 1-1 1H11c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1s.448-1 1-1h18c.553 0 1 .447 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1s.448-1 1-1h18c.553 0 1 .447 1 1m0 4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};