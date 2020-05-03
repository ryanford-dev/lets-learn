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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18",}));el.appendChild(svg["ellipse"](18, 25.5, 6, 7, {["rx"]: "3",["cy"]: "25.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "18",}));el.appendChild(svg["path"]("M31.001 11c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C23.006 5.444 23.45 5 24 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zM4.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C7.462 5.05 11.816 5 12 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4z", {["fill"]: "#664500",["d"]: "M31.001 11c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C23.006 5.444 23.45 5 24 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zM4.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C7.462 5.05 11.816 5 12 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4z",}));el.appendChild(svg["ellipse"](12, 14.5, 5, 7, {["rx"]: "2.5",["cy"]: "14.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "12",}));el.appendChild(svg["ellipse"](24, 14.5, 5, 7, {["rx"]: "2.5",["cy"]: "14.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};