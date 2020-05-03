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
				el.appendChild(svg["path"]("M22 2h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z", {["fill"]: "#292F33",["d"]: "M22 2h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z",}));el.appendChild(svg["path"]("M13 1h2v2h-2zm8 0h2v2h-2z", {["fill"]: "#292F33",["d"]: "M13 1h2v2h-2zm8 0h2v2h-2z",}));el.appendChild(svg["path"]("M13 3h2v6h-2zm8 0h2v6h-2z", {["fill"]: "#CCD6DD",["d"]: "M13 3h2v6h-2zm8 0h2v6h-2z",}));el.appendChild(svg["path"]("M7 25c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1zm3 9.2H9c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zm17 0h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z", {["fill"]: "#292F33",["d"]: "M7 25c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1zm3 9.2H9c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zm17 0h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z",}));el.appendChild(svg["path"]("M27 33H9c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v21c0 1.1-.9 2-2 2z", {["fill"]: "#4289C1",["d"]: "M27 33H9c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v21c0 1.1-.9 2-2 2z",}));el.appendChild(svg["path"]("M26 18H10c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1zm0 13H10c-.55 0-1-.45-1-1V20c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z", {["fill"]: "#5DADEC",["d"]: "M26 18H10c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1zm0 13H10c-.55 0-1-.45-1-1V20c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z",}));el.appendChild(svg["circle"](9, 35, 2, {["cy"]: "35",["r"]: "1",["fill"]: "#292F33",["cx"]: "9",}));el.appendChild(svg["circle"](27, 35, 2, {["cy"]: "35",["r"]: "1",["fill"]: "#292F33",["cx"]: "27",}));el.appendChild(svg["path"]("M25.5 12h-15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h15c.275 0 .5.225.5.5s-.225.5-.5.5zm0 9h-15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h15c.275 0 .5.225.5.5s-.225.5-.5.5z", {["fill"]: "#2A6797",["d"]: "M25.5 12h-15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h15c.275 0 .5.225.5.5s-.225.5-.5.5zm0 9h-15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h15c.275 0 .5.225.5.5s-.225.5-.5.5z",}));el.appendChild(svg["path"]("M11.5 12h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1c.275 0 .5.225.5.5s-.225.5-.5.5zm0 9h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1c.275 0 .5.225.5.5s-.225.5-.5.5z", {["fill"]: "#F5F8FA",["d"]: "M11.5 12h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1c.275 0 .5.225.5.5s-.225.5-.5.5zm0 9h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1c.275 0 .5.225.5.5s-.225.5-.5.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};