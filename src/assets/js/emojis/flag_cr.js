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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#002B7F",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M0 9h36v18H0z", {["fill"]: "#EEE",["d"]: "M0 9h36v18H0z",}));el.appendChild(svg["path"]("M0 13h36v10H0z", {["fill"]: "#CE1225",["d"]: "M0 13h36v10H0z",}));el.appendChild(svg["ellipse"](8.5, 18, 7, 8, {["rx"]: "3.5",["cy"]: "18",["ry"]: "4",["fill"]: "#EEE",["cx"]: "8.5",}));el.appendChild(svg["path"]("M10.269 19.5c0 .828-.792 2.079-1.769 2.079S6.731 20.328 6.731 19.5c0-.829.792-1.5 1.769-1.5s1.769.671 1.769 1.5z", {["fill"]: "#F4CB58",["d"]: "M10.269 19.5c0 .828-.792 2.079-1.769 2.079S6.731 20.328 6.731 19.5c0-.829.792-1.5 1.769-1.5s1.769.671 1.769 1.5z",}));el.appendChild(svg["ellipse"](8.5, 19.5, 5, 3, {["rx"]: "2.5",["cy"]: "19.5",["ry"]: "1.5",["fill"]: "#DCA841",["cx"]: "8.5",}));el.appendChild(svg["ellipse"](8.5, 16, 3, 2, {["rx"]: "1.5",["cy"]: "16",["ry"]: "1",["fill"]: "#89C5E4",["cx"]: "8.5",}));el.appendChild(svg["ellipse"](8.5, 18.5, 3, 5, {["rx"]: "1.5",["cy"]: "18.5",["ry"]: "2.5",["fill"]: "#088930",["cx"]: "8.5",}));el.appendChild(svg["ellipse"](8.5, 16.5, 3, 1, {["rx"]: "1.5",["cy"]: "16.5",["ry"]: ".5",["fill"]: "#DCA841",["cx"]: "8.5",}));el.appendChild(svg["path"]("M10 18c0 1.104-.671 2-1.5 2S7 19.104 7 18s.671-1.498 1.5-1.498S10 16.896 10 18z", {["fill"]: "#89C5E4",["d"]: "M10 18c0 1.104-.671 2-1.5 2S7 19.104 7 18s.671-1.498 1.5-1.498S10 16.896 10 18z",}));el.appendChild(svg["ellipse"](8.5, 18.5, 3, 1, {["rx"]: "1.5",["cy"]: "18.5",["ry"]: ".5",["fill"]: "#DCA841",["cx"]: "8.5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};