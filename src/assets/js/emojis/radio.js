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
				el.appendChild(svg["path"]("M2.697 12.389c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l9.192-9.192c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-9.192 9.192z", {["fill"]: "#292F33",["d"]: "M2.697 12.389c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l9.192-9.192c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-9.192 9.192z",}));el.appendChild(svg["path"]("M36 32c0 4-4 4-4 4H4s-4 0-4-4V14s0-4 4-4h28c4 0 4 4 4 4v18z", {["fill"]: "#99AAB5",["d"]: "M36 32c0 4-4 4-4 4H4s-4 0-4-4V14s0-4 4-4h28c4 0 4 4 4 4v18z",}));el.appendChild(svg["path"]("M15.561 3.061c-.391.391-1.023.391-1.414 0l-.707-.707c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l.707.707c.39.39.39 1.023 0 1.414z", {["fill"]: "#292F33",["d"]: "M15.561 3.061c-.391.391-1.023.391-1.414 0l-.707-.707c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l.707.707c.39.39.39 1.023 0 1.414z",}));el.appendChild(svg["circle"](27.5, 18.5, 11, {["cy"]: "18.5",["r"]: "5.5",["fill"]: "#292F33",["cx"]: "27.5",}));el.appendChild(svg["circle"](27.5, 29.5, 7, {["cy"]: "29.5",["r"]: "3.5",["fill"]: "#292F33",["cx"]: "27.5",}));el.appendChild(svg["circle"](27.5, 18.5, 7, {["cy"]: "18.5",["r"]: "3.5",["fill"]: "#66757F",["cx"]: "27.5",}));el.appendChild(svg["circle"](27.5, 29.5, 3, {["cy"]: "29.5",["r"]: "1.5",["fill"]: "#66757F",["cx"]: "27.5",}));el.appendChild(svg["circle"](10.5, 25.5, 3, {["cy"]: "25.5",["fill"]: "#292F33",["cx"]: "10.5",["r"]: "1.5",}));el.appendChild(svg["circle"](5.5, 25.5, 3, {["cy"]: "25.5",["fill"]: "#292F33",["cx"]: "5.5",["r"]: "1.5",}));el.appendChild(svg["circle"](10.5, 20.5, 3, {["cy"]: "20.5",["fill"]: "#292F33",["cx"]: "10.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 20.5, 3, {["cy"]: "20.5",["fill"]: "#292F33",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 25.5, 3, {["cy"]: "25.5",["fill"]: "#292F33",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 30.5, 3, {["cy"]: "30.5",["fill"]: "#292F33",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](5.5, 30.5, 3, {["cy"]: "30.5",["fill"]: "#292F33",["cx"]: "5.5",["r"]: "1.5",}));el.appendChild(svg["circle"](5.5, 20.5, 3, {["cy"]: "20.5",["fill"]: "#292F33",["cx"]: "5.5",["r"]: "1.5",}));el.appendChild(svg["circle"](10.5, 15.5, 3, {["cy"]: "15.5",["fill"]: "#292F33",["cx"]: "10.5",["r"]: "1.5",}));el.appendChild(svg["circle"](15.5, 15.5, 3, {["cy"]: "15.5",["fill"]: "#292F33",["cx"]: "15.5",["r"]: "1.5",}));el.appendChild(svg["circle"](5.5, 15.5, 3, {["cy"]: "15.5",["fill"]: "#292F33",["cx"]: "5.5",["r"]: "1.5",}));el.appendChild(svg["circle"](10.5, 30.5, 3, {["cy"]: "30.5",["fill"]: "#292F33",["cx"]: "10.5",["r"]: "1.5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};