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
				el.appendChild(svg["path"]("M17 36c-1.32 0-9.241-.826-10.707-2.293-.215-.216-.321-.518-.287-.82.035-.303.205-.573.464-.734 4.563-2.853 6.825-7.969 6.541-14.796-.007-.162-.011-.282-.011-.357 0-.552.448-1 1-1h9c.522 0 .957.402.997.923.841 10.931-2.468 15.783-3.93 17.361C19.043 35.391 17.954 36 17 36z", {["fill"]: "#99AAB5",["d"]: "M17 36c-1.32 0-9.241-.826-10.707-2.293-.215-.216-.321-.518-.287-.82.035-.303.205-.573.464-.734 4.563-2.853 6.825-7.969 6.541-14.796-.007-.162-.011-.282-.011-.357 0-.552.448-1 1-1h9c.522 0 .957.402.997.923.841 10.931-2.468 15.783-3.93 17.361C19.043 35.391 17.954 36 17 36z",}));el.appendChild(svg["path"]("M18 18c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3c0 .552-.448 1-1 1z", {["fill"]: "#3E721D",["d"]: "M18 18c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3c0 .552-.448 1-1 1z",}));el.appendChild(svg["path"]("M26 10c0 4.418-3.582 5-8 5s-8-.582-8-5 3.582-8 8-8 8 3.582 8 8z", {["fill"]: "#77B255",["d"]: "M26 10c0 4.418-3.582 5-8 5s-8-.582-8-5 3.582-8 8-8 8 3.582 8 8z",}));el.appendChild(svg["path"]("M18 4c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v2c0 .552-.448 1-1 1z", {["fill"]: "#3E721D",["d"]: "M18 4c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v2c0 .552-.448 1-1 1z",}));el.appendChild(svg["circle"](18, 21, 4, {["cy"]: "21",["r"]: "2",["fill"]: "#FFF",["cx"]: "18",}));el.appendChild(svg["circle"](17, 27, 4, {["cy"]: "27",["r"]: "2",["fill"]: "#FFF",["cx"]: "17",}));el.appendChild(svg["ellipse"](14, 32.5, 4, 3, {["rx"]: "2",["cy"]: "32.5",["ry"]: "1.5",["fill"]: "#FFF",["cx"]: "14",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};