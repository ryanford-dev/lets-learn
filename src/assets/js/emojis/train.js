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
				el.appendChild(svg["path"]("M2 36h32L23 19H13z", {["fill"]: "#A7A9AC",["d"]: "M2 36h32L23 19H13z",}));el.appendChild(svg["path"]("M5 36h26L21 19h-6z", {["fill"]: "#58595B",["d"]: "M5 36h26L21 19h-6z",}));el.appendChild(svg["path"]("M8 36h20l-9-17h-2z", {["fill"]: "#808285",["d"]: "M8 36h20l-9-17h-2z",}));el.appendChild(svg["path"]("M28 35c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1z", {["fill"]: "#A7A9AC",["d"]: "M28 35c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1z",}));el.appendChild(svg["path"]("M27.076 25.3L23 19H13l-4.076 6.3c1.889 2.517 4.798 4.699 9.076 4.699 4.277 0 7.188-2.183 9.076-4.699z", {["fill"]: "#58595B",["d"]: "M27.076 25.3L23 19H13l-4.076 6.3c1.889 2.517 4.798 4.699 9.076 4.699 4.277 0 7.188-2.183 9.076-4.699z",}));el.appendChild(svg["path"]("M18 0C9 0 6 3 6 9v8c0 1.999 3 11 12 11s12-9.001 12-11V9c0-6-3-9-12-9z", {["fill"]: "#A7A9AC",["d"]: "M18 0C9 0 6 3 6 9v8c0 1.999 3 11 12 11s12-9.001 12-11V9c0-6-3-9-12-9z",}));el.appendChild(svg["path"]("M8 11C8 2 12.477 1 18 1s10 1 10 10c0 6-4.477 11-10 11-5.523-.001-10-5-10-11z", {["fill"]: "#E6E7E8",["d"]: "M8 11C8 2 12.477 1 18 1s10 1 10 10c0 6-4.477 11-10 11-5.523-.001-10-5-10-11z",}));el.appendChild(svg["path"]("M18 21.999c1.642 0 3.185-.45 4.553-1.228C21.77 19.729 20.03 19 18 19s-3.769.729-4.552 1.772c1.366.777 2.911 1.227 4.552 1.227z", {["fill"]: "#FFAC33",["d"]: "M18 21.999c1.642 0 3.185-.45 4.553-1.228C21.77 19.729 20.03 19 18 19s-3.769.729-4.552 1.772c1.366.777 2.911 1.227 4.552 1.227z",}));el.appendChild(svg["path"]("M19 4.997v4.965c3.488-.232 6-1.621 6-2.463V5.833c0-.791-3.692-.838-6-.836zm-2 0c-2.308-.002-6 .044-6 .836V7.5c0 .842 2.512 2.231 6 2.463V4.997z", {["d"]: "M19 4.997v4.965c3.488-.232 6-1.621 6-2.463V5.833c0-.791-3.692-.838-6-.836zm-2 0c-2.308-.002-6 .044-6 .836V7.5c0 .842 2.512 2.231 6 2.463V4.997z",["fill"]: "#55ACEE",}));el.appendChild(svg["path"]("M6 10s0 3 4 9c0 0-4-2-4-6v-3zm24 0s0 3-4 9c0 0 4-2 4-6v-3z", {["fill"]: "#269",["d"]: "M6 10s0 3 4 9c0 0-4-2-4-6v-3zm24 0s0 3-4 9c0 0 4-2 4-6v-3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};