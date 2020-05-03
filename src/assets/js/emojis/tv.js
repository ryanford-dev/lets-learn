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
				el.appendChild(svg["path"]("M35 31s0 4-4 4H5c-4 0-4-4-4-4V12c0-4 4-4 4-4h26s4 0 4 4v19z", {["fill"]: "#31373D",["d"]: "M35 31s0 4-4 4H5c-4 0-4-4-4-4V12c0-4 4-4 4-4h26s4 0 4 4v19z",}));el.appendChild(svg["path"]("M21.303 10.389c.391.391.391 1.023 0 1.414s-1.023.391-1.414 0l-9.192-9.192c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l9.192 9.192z", {["fill"]: "#31373D",["d"]: "M21.303 10.389c.391.391.391 1.023 0 1.414s-1.023.391-1.414 0l-9.192-9.192c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l9.192 9.192z",}));el.appendChild(svg["path"]("M14.697 10.389c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l9.192-9.192c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-9.192 9.192z", {["fill"]: "#31373D",["d"]: "M14.697 10.389c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l9.192-9.192c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-9.192 9.192z",}));el.appendChild(svg["path"]("M18 11c8 0 10 1 11 2s2 3 2 8-1 7-2 8-3 2-11 2-10-1-11-2-2-3-2-8 1-7 2-8 3-2 11-2z", {["fill"]: "#55ACEE",["d"]: "M18 11c8 0 10 1 11 2s2 3 2 8-1 7-2 8-3 2-11 2-10-1-11-2-2-3-2-8 1-7 2-8 3-2 11-2z",}));el.appendChild(svg["circle"](31.5, 31.5, 3, {["cy"]: "31.5",["r"]: "1.5",["fill"]: "#66757F",["cx"]: "31.5",}));el.appendChild(svg["circle"](4.5, 31.5, 3, {["cy"]: "31.5",["r"]: "1.5",["fill"]: "#66757F",["cx"]: "4.5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};