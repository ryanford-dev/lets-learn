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
				el.appendChild(svg["path"]("M4.167 32.729c.292.167.626.271.987.271 1.105 0 2-.896 2-2s-.895-2-2-2-2 .896-2 2c0 .361.103.695.27.987L.278 35.133 1.154 28l9-7 5 5-7 9-7.134.876 3.147-3.147z", {["fill"]: "#99AAB5",["d"]: "M4.167 32.729c.292.167.626.271.987.271 1.105 0 2-.896 2-2s-.895-2-2-2-2 .896-2 2c0 .361.103.695.27.987L.278 35.133 1.154 28l9-7 5 5-7 9-7.134.876 3.147-3.147z",}));el.appendChild(svg["path"]("M22.511 5.308c-1.151 1.151-1.151 3.016 0 4.167l4.167 4.168c1.151 1.15 3.018 1.15 4.167 0l4.167-4.168c1.15-1.151 1.15-3.016 0-4.167l-4.167-4.167c-1.15-1.151-3.016-1.151-4.167 0l-4.167 4.167z", {["fill"]: "#66757F",["d"]: "M22.511 5.308c-1.151 1.151-1.151 3.016 0 4.167l4.167 4.168c1.151 1.15 3.018 1.15 4.167 0l4.167-4.168c1.15-1.151 1.15-3.016 0-4.167l-4.167-4.167c-1.15-1.151-3.016-1.151-4.167 0l-4.167 4.167z",}));el.appendChild(svg["path"]("M9.511 18.309L26.713 1.105l8.333 8.335-17.201 17.203c-1.15 1.15-3.016 1.15-4.168 0l-4.166-4.168c-1.151-1.151-1.151-3.016 0-4.166z", {["fill"]: "#31373D",["d"]: "M9.511 18.309L26.713 1.105l8.333 8.335-17.201 17.203c-1.15 1.15-3.016 1.15-4.168 0l-4.166-4.168c-1.151-1.151-1.151-3.016 0-4.166z",}));el.appendChild(svg["path"]("M17.469 10.35l2.125-2.125 8.334 8.334-2.125 2.125z", {["fill"]: "#66757F",["d"]: "M17.469 10.35l2.125-2.125 8.334 8.334-2.125 2.125z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};