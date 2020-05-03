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
				el.appendChild(svg["path"]("M22 33c0 2.209-1.791 3-4 3s-4-.791-4-3l1-9c0-2.209.791-2 3-2s3-.209 3 2l1 9z", {["fill"]: "#662113",["d"]: "M22 33c0 2.209-1.791 3-4 3s-4-.791-4-3l1-9c0-2.209.791-2 3-2s3-.209 3 2l1 9z",}));el.appendChild(svg["path"]("M34 17c0 8.837-7.163 12-16 12-8.836 0-16-3.163-16-12C2 8.164 11 0 18 0s16 8.164 16 17z", {["fill"]: "#5C913B",["d"]: "M34 17c0 8.837-7.163 12-16 12-8.836 0-16-3.163-16-12C2 8.164 11 0 18 0s16 8.164 16 17z",}));el.appendChild(svg["ellipse"](6, 21, 4, 2, {["rx"]: "2",["cy"]: "21",["ry"]: "1",["cx"]: "6",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](30, 21, 4, 2, {["rx"]: "2",["cy"]: "21",["ry"]: "1",["cx"]: "30",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](10, 25, 4, 2, {["rx"]: "2",["cy"]: "25",["ry"]: "1",["cx"]: "10",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](14, 22, 4, 2, {["rx"]: "2",["cy"]: "22",["ry"]: "1",["cx"]: "14",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](10, 16, 4, 2, {["rx"]: "2",["cy"]: "16",["ry"]: "1",["cx"]: "10",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](7, 12, 4, 2, {["rx"]: "2",["cy"]: "12",["ry"]: "1",["cx"]: "7",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](29, 12, 4, 2, {["rx"]: "2",["cy"]: "12",["ry"]: "1",["cx"]: "29",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](14, 10, 4, 2, {["rx"]: "2",["cy"]: "10",["ry"]: "1",["cx"]: "14",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](22, 10, 4, 2, {["rx"]: "2",["cy"]: "10",["ry"]: "1",["cx"]: "22",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](26, 16, 4, 2, {["rx"]: "2",["cy"]: "16",["ry"]: "1",["cx"]: "26",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](18, 17, 4, 2, {["rx"]: "2",["cy"]: "17",["ry"]: "1",["cx"]: "18",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](22, 22, 4, 2, {["rx"]: "2",["cy"]: "22",["ry"]: "1",["cx"]: "22",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](18, 26, 4, 2, {["rx"]: "2",["cy"]: "26",["ry"]: "1",["cx"]: "18",["fill"]: "#3E721D",}));el.appendChild(svg["ellipse"](26, 25, 4, 2, {["rx"]: "2",["cy"]: "25",["ry"]: "1",["cx"]: "26",["fill"]: "#3E721D",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};