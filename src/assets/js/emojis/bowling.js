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
				el.appendChild(svg["path"]("M22 10c0-1 1-3 1-5s0-3-1-4-2-1-2-1-1 0-2 1-1 2-1 4 1 4 1 5c0 3-4 5-4 9.084C14 22.417 16 29 17 31h6c1-2 3-8.583 3-11.916C26 15 22 13 22 10z", {["fill"]: "#CCD6DD",["d"]: "M22 10c0-1 1-3 1-5s0-3-1-4-2-1-2-1-1 0-2 1-1 2-1 4 1 4 1 5c0 3-4 5-4 9.084C14 22.417 16 29 17 31h6c1-2 3-8.583 3-11.916C26 15 22 13 22 10z",}));el.appendChild(svg["path"]("M18 10h4c0-.475.227-1.18.464-2h-4.927c.236.82.463 1.525.463 2zm5.902 4c-.494-.681-.976-1.333-1.332-2h-5.139c-.357.667-.839 1.319-1.332 2h7.803z", {["fill"]: "#BE1931",["d"]: "M18 10h4c0-.475.227-1.18.464-2h-4.927c.236.82.463 1.525.463 2zm5.902 4c-.494-.681-.976-1.333-1.332-2h-5.139c-.357.667-.839 1.319-1.332 2h7.803z",}));el.appendChild(svg["path"]("M32 13c0-1 1-3 1-5s0-3-1-4-2-1-2-1-1 0-2 1-1 2-1 4 1 4 1 5c0 3-4 5-4 9.084C24 25.417 26 32 27 34h6c1-2 3-8.583 3-11.916C36 18 32 16 32 13z", {["fill"]: "#CCD6DD",["d"]: "M32 13c0-1 1-3 1-5s0-3-1-4-2-1-2-1-1 0-2 1-1 2-1 4 1 4 1 5c0 3-4 5-4 9.084C24 25.417 26 32 27 34h6c1-2 3-8.583 3-11.916C36 18 32 16 32 13z",}));el.appendChild(svg["path"]("M28 13h4c0-.475.227-1.18.464-2h-4.927c.236.82.463 1.525.463 2zm5.902 4c-.494-.681-.976-1.333-1.332-2h-5.139c-.357.667-.839 1.319-1.332 2h7.803z", {["fill"]: "#BE1931",["d"]: "M28 13h4c0-.475.227-1.18.464-2h-4.927c.236.82.463 1.525.463 2zm5.902 4c-.494-.681-.976-1.333-1.332-2h-5.139c-.357.667-.839 1.319-1.332 2h7.803z",}));el.appendChild(svg["circle"](12.562, 23.438, 25.124, {["cy"]: "23.438",["r"]: "12.562",["fill"]: "#31373D",["cx"]: "12.562",}));el.appendChild(svg["circle"](12.915, 18.79, 4.632, {["cy"]: "18.79",["cx"]: "12.915",["r"]: "2.316",}));el.appendChild(svg["circle"](6.505, 20.938, 4.632, {["cy"]: "20.938",["cx"]: "6.505",["r"]: "2.316",}));el.appendChild(svg["circle"](11.431, 28.053, 4.632, {["cy"]: "28.053",["cx"]: "11.431",["r"]: "2.316",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};