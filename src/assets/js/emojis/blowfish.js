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
				el.appendChild(svg["path"]("M33 17c.461.184.902 3-1 3-6 0-11 11-20 11S1 18.5 1 16 5.82 6 13 6s15 9 20 11z", {["fill"]: "#D99E82",["d"]: "M33 17c.461.184.902 3-1 3-6 0-11 11-20 11S1 18.5 1 16 5.82 6 13 6s15 9 20 11z",}));el.appendChild(svg["path"]("M3 19c0 .553-.671 1-1.5 1S0 19.553 0 19s0-2 1.5-1c.689.46 1.5.447 1.5 1z", {["fill"]: "#D99E82",["d"]: "M3 19c0 .553-.671 1-1.5 1S0 19.553 0 19s0-2 1.5-1c.689.46 1.5.447 1.5 1z",}));el.appendChild(svg["path"]("M33 17c.461.184.876.688-1 1-6 1-10.045-.896-19 0-10 1-12 1-12-2C1 13.5 5.82 6 13 6s15 9 20 11z", {["fill"]: "#C1694F",["d"]: "M33 17c.461.184.876.688-1 1-6 1-10.045-.896-19 0-10 1-12 1-12-2C1 13.5 5.82 6 13 6s15 9 20 11z",}));el.appendChild(svg["path"]("M30 17.5c0 2.485 3.343 4.5 5 4.5s0-2.015 0-4.5 1.657-4.5 0-4.5-5 2.015-5 4.5z", {["fill"]: "#D99E82",["d"]: "M30 17.5c0 2.485 3.343 4.5 5 4.5s0-2.015 0-4.5 1.657-4.5 0-4.5-5 2.015-5 4.5z",}));el.appendChild(svg["circle"](7, 13, 2, {["cy"]: "13",["r"]: "1",["fill"]: "#292F33",["cx"]: "7",}));el.appendChild(svg["path"]("M19.16 25S22 29 24 29s0-5 0-5h-2.84c-3 0-2 1-2 1z", {["fill"]: "#D99E82",["d"]: "M19.16 25S22 29 24 29s0-5 0-5h-2.84c-3 0-2 1-2 1z",}));el.appendChild(svg["path"]("M21.351 8.923S24.211 6.106 26 7c4.074 2.036-2 4-2 4l-1.593-.106c-2.993-.201-1.056-1.971-1.056-1.971z", {["fill"]: "#C1694F",["d"]: "M21.351 8.923S24.211 6.106 26 7c4.074 2.036-2 4-2 4l-1.593-.106c-2.993-.201-1.056-1.971-1.056-1.971z",}));el.appendChild(svg["circle"](16, 25, 4, {["cy"]: "25",["r"]: "2",["fill"]: "#C1694F",["cx"]: "16",}));el.appendChild(svg["circle"](20, 21, 2, {["cy"]: "21",["r"]: "1",["fill"]: "#C1694F",["cx"]: "20",}));el.appendChild(svg["circle"](24.5, 20.5, 3, {["cy"]: "20.5",["r"]: "1.5",["fill"]: "#C1694F",["cx"]: "24.5",}));el.appendChild(svg["circle"](16.5, 14.5, 3, {["cy"]: "14.5",["r"]: "1.5",["fill"]: "#662113",["cx"]: "16.5",}));el.appendChild(svg["circle"](23.5, 15.5, 3, {["cy"]: "15.5",["r"]: "1.5",["fill"]: "#662113",["cx"]: "23.5",}));el.appendChild(svg["circle"](20, 11, 2, {["cy"]: "11",["r"]: "1",["fill"]: "#662113",["cx"]: "20",}));el.appendChild(svg["path"]("M3 17c0 .552 1 2-1.5 1-.77-.308-1.5-.448-1.5-1s.671-1 1.5-1 1.5.448 1.5 1z", {["fill"]: "#C1694F",["d"]: "M3 17c0 .552 1 2-1.5 1-.77-.308-1.5-.448-1.5-1s.671-1 1.5-1 1.5.448 1.5 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};