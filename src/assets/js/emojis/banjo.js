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
				el.appendChild(svg["circle"](10.047, 16.953, 2, {["cy"]: "16.953",["r"]: "1",["fill"]: "#67757F",["cx"]: "10.047",}));el.appendChild(svg["circle"](1.047, 25.953, 2, {["cy"]: "25.953",["r"]: "1",["fill"]: "#67757F",["cx"]: "1.047",}));el.appendChild(svg["circle"](19.047, 25.953, 2, {["cy"]: "25.953",["r"]: "1",["fill"]: "#67757F",["cx"]: "19.047",}));el.appendChild(svg["circle"](10.047, 34.953, 2, {["cy"]: "34.953",["r"]: "1",["fill"]: "#67757F",["cx"]: "10.047",}));el.appendChild(svg["circle"](3.547, 19.828, 2, {["cy"]: "19.828",["r"]: "1",["fill"]: "#67757F",["cx"]: "3.547",}));el.appendChild(svg["circle"](16.214, 32.495, 2, {["cy"]: "32.495",["r"]: "1",["fill"]: "#67757F",["cx"]: "16.214",}));el.appendChild(svg["path"]("M32.339 5.338l-15.45 17.334-3.561-3.56L30.66 3.66z", {["fill"]: "#292F33",["d"]: "M32.339 5.338l-15.45 17.334-3.561-3.56L30.66 3.66z",}));el.appendChild(svg["ellipse"](10.047, 25.953, 18, 18, {["rx"]: "9",["fill"]: "#F18F26",["cy"]: "25.953",["ry"]: "9",["cx"]: "10.047",["transform"]: "rotate(-52.019 10.047 25.953)",}));el.appendChild(svg["ellipse"](10.047, 25.953, 14, 14, {["rx"]: "7",["fill"]: "#F5F8FA",["cy"]: "25.953",["ry"]: "7",["cx"]: "10.047",["transform"]: "rotate(-52.019 10.047 25.953)",}));el.appendChild(svg["path"]("M4.628 29.934L28.8 5.807l.53.531L5.16 30.466zm.869.87L29.67 6.676l.531.531L6.028 31.335z", {["fill"]: "#CCD6DD",["d"]: "M4.628 29.934L28.8 5.807l.53.531L5.16 30.466zm.869.87L29.67 6.676l.531.531L6.028 31.335z",}));el.appendChild(svg["path"]("M2.047 31.953l2-3s1 0 2 1 1 2 1 2l-3 2-2-2z", {["fill"]: "#292F33",["d"]: "M2.047 31.953l2-3s1 0 2 1 1 2 1 2l-3 2-2-2z",}));el.appendChild(svg["path"]("M9.097 30.903c-.256 0-.512-.098-.707-.293l-3-3c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l3 3c.391.391.391 1.023 0 1.414-.196.196-.452.293-.707.293z", {["fill"]: "#67757F",["d"]: "M9.097 30.903c-.256 0-.512-.098-.707-.293l-3-3c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l3 3c.391.391.391 1.023 0 1.414-.196.196-.452.293-.707.293z",}));el.appendChild(svg["path"]("M34.704 2.685c.438.438.438 1.155-.001 1.592l-3.186 3.186c-.438.438-1.155.438-1.593-.001l-1.39-1.389c-.438-.438-.438-1.155.001-1.592l3.187-3.186c.438-.438 1.155-.438 1.593 0l1.389 1.39z", {["fill"]: "#F18F26",["d"]: "M34.704 2.685c.438.438.438 1.155-.001 1.592l-3.186 3.186c-.438.438-1.155.438-1.593-.001l-1.39-1.389c-.438-.438-.438-1.155.001-1.592l3.187-3.186c.438-.438 1.155-.438 1.593 0l1.389 1.39z",}));el.appendChild(svg["circle"](33, 8, 2, {["cy"]: "8",["r"]: "1",["fill"]: "#642116",["cx"]: "33",}));el.appendChild(svg["circle"](35, 6, 2, {["cy"]: "6",["r"]: "1",["fill"]: "#642116",["cx"]: "35",}));el.appendChild(svg["circle"](28, 3, 2, {["cy"]: "3",["r"]: "1",["fill"]: "#642116",["cx"]: "28",}));el.appendChild(svg["circle"](30, 1, 2, {["cy"]: "1",["r"]: "1",["fill"]: "#642116",["cx"]: "30",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};