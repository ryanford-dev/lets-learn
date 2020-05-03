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
				el.appendChild(svg["path"]("M32.855 16.484c-.259-.171-.543-.328-.855-.484-2-1-5 0-9 0-2 0-4.901-3-10-3-.801 0-2.256.635-4.341.89C8.62 12.837 8.044 12 7.333 12 6.597 12 6 12.895 6 14c0 .051.007.1.01.15C3.19 14.916 0 18.589 0 20.375 0 22.375 2 24 2 24s1 0 3-2c1.581-1.581 5-1 5-1l1 12s-1 1-2 1-1 2-1 2h6l1-9h3c2 0 7-1 7-1 2 3 4 4 4 4v3l-2 1c-2 1-1 2-1 2h6s1-8 2-13v5c0 .553.447 1 1 1s1-.447 1-1v-7c0-2.666-1.357-3.928-3.145-4.516z", {["fill"]: "#FFCC4D",["d"]: "M32.855 16.484c-.259-.171-.543-.328-.855-.484-2-1-5 0-9 0-2 0-4.901-3-10-3-.801 0-2.256.635-4.341.89C8.62 12.837 8.044 12 7.333 12 6.597 12 6 12.895 6 14c0 .051.007.1.01.15C3.19 14.916 0 18.589 0 20.375 0 22.375 2 24 2 24s1 0 3-2c1.581-1.581 5-1 5-1l1 12s-1 1-2 1-1 2-1 2h6l1-9h3c2 0 7-1 7-1 2 3 4 4 4 4v3l-2 1c-2 1-1 2-1 2h6s1-8 2-13v5c0 .553.447 1 1 1s1-.447 1-1v-7c0-2.666-1.357-3.928-3.145-4.516z",}));el.appendChild(svg["circle"](4, 17, 2, {["cy"]: "17",["r"]: "1",["fill"]: "#292F33",["cx"]: "4",}));el.appendChild(svg["path"]("M0 20s0 2 1 2c0-2 1-2 1-2s-1-1-2 0z", {["fill"]: "#292F33",["d"]: "M0 20s0 2 1 2c0-2 1-2 1-2s-1-1-2 0z",}));el.appendChild(svg["circle"](10.5, 16.5, 4, {["cy"]: "16.5",["fill"]: "#F4900C",["cx"]: "10.5",["r"]: "2",}));el.appendChild(svg["circle"](17.5, 16.5, 4, {["cy"]: "16.5",["fill"]: "#F4900C",["cx"]: "17.5",["r"]: "2",}));el.appendChild(svg["circle"](14.5, 21.5, 4, {["cy"]: "21.5",["fill"]: "#F4900C",["cx"]: "14.5",["r"]: "2",}));el.appendChild(svg["circle"](21.5, 23.5, 4, {["cy"]: "23.5",["fill"]: "#F4900C",["cx"]: "21.5",["r"]: "2",}));el.appendChild(svg["circle"](24.5, 18.5, 4, {["cy"]: "18.5",["fill"]: "#F4900C",["cx"]: "24.5",["r"]: "2",}));el.appendChild(svg["circle"](28.5, 23.5, 4, {["cy"]: "23.5",["fill"]: "#F4900C",["cx"]: "28.5",["r"]: "2",}));el.appendChild(svg["circle"](31.5, 18.5, 4, {["cy"]: "18.5",["fill"]: "#F4900C",["cx"]: "31.5",["r"]: "2",}));el.appendChild(svg["circle"](10.5, 16.5, 2, {["cy"]: "16.5",["fill"]: "#FFAC33",["cx"]: "10.5",["r"]: "1",}));el.appendChild(svg["circle"](17.5, 16.5, 2, {["cy"]: "16.5",["fill"]: "#FFAC33",["cx"]: "17.5",["r"]: "1",}));el.appendChild(svg["circle"](14.5, 21.5, 2, {["cy"]: "21.5",["fill"]: "#FFAC33",["cx"]: "14.5",["r"]: "1",}));el.appendChild(svg["circle"](21.5, 23.5, 2, {["cy"]: "23.5",["fill"]: "#FFAC33",["cx"]: "21.5",["r"]: "1",}));el.appendChild(svg["circle"](24.5, 18.5, 2, {["cy"]: "18.5",["fill"]: "#FFAC33",["cx"]: "24.5",["r"]: "1",}));el.appendChild(svg["circle"](28.5, 23.5, 2, {["cy"]: "23.5",["fill"]: "#FFAC33",["cx"]: "28.5",["r"]: "1",}));el.appendChild(svg["circle"](31.5, 18.5, 2, {["cy"]: "18.5",["fill"]: "#FFAC33",["cx"]: "31.5",["r"]: "1",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};