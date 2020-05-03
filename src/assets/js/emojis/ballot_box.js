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
				el.appendChild(svg["path"]("M34.5 24.995c0 2.209-1.791 2-4 2h-25c-2.209 0-4 .209-4-2L3.5 11c.293-1.75 1-2 2-2h25c1 0 1.791.208 2 2l2 13.995z", {["fill"]: "#8CCAF7",["d"]: "M34.5 24.995c0 2.209-1.791 2-4 2h-25c-2.209 0-4 .209-4-2L3.5 11c.293-1.75 1-2 2-2h25c1 0 1.791.208 2 2l2 13.995z",}));el.appendChild(svg["path"]("M28.5 16.5c0 .829-.672 1.5-1.5 1.5H9c-.829 0-1.5-.671-1.5-1.5S8.172 15 9 15h18c.828 0 1.5.671 1.5 1.5z", {["fill"]: "#292F33",["d"]: "M28.5 16.5c0 .829-.672 1.5-1.5 1.5H9c-.829 0-1.5-.671-1.5-1.5S8.172 15 9 15h18c.828 0 1.5.671 1.5 1.5z",}));el.appendChild(svg["path"]("M26.25 17.188v-14c0-1.105-.895-2-2-2h-13c-1.104 0-2 .895-2 2v14h17z", {["fill"]: "#FFD983",["d"]: "M26.25 17.188v-14c0-1.105-.895-2-2-2h-13c-1.104 0-2 .895-2 2v14h17z",}));el.appendChild(svg["path"]("M34.5 25c0-1.104-.896-2-2-2h-29c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h29c1.104 0 2-.896 2-2v-8z", {["fill"]: "#5DADEC",["d"]: "M34.5 25c0-1.104-.896-2-2-2h-29c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h29c1.104 0 2-.896 2-2v-8z",}));el.appendChild(svg["path"]("M13.5 23v6c0 1.104.896 2 2 2h5c1.105 0 2-.896 2-2v-6h-9z", {["fill"]: "#4289C1",["d"]: "M13.5 23v6c0 1.104.896 2 2 2h5c1.105 0 2-.896 2-2v-6h-9z",}));el.appendChild(svg["path"]("M22.5 23v-1c0-1.104-.895-2-2-2h-5c-1.104 0-2 .896-2 2v1h9zm-3 4.5c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5v-1c0-.828.671-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5v1z", {["fill"]: "#5DADEC",["d"]: "M22.5 23v-1c0-1.104-.895-2-2-2h-5c-1.104 0-2 .896-2 2v1h9zm-3 4.5c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5v-1c0-.828.671-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5v1z",}));el.appendChild(svg["path"]("M24 5c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5m0 4c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5m0 4c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5", {["d"]: "M24 5c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5m0 4c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5m0 4c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5",["fill"]: "#C1694F",}));el.appendChild(svg["circle"](13, 5, 2, {["cy"]: "5",["fill"]: "#C1694F",["cx"]: "13",["r"]: "1",}));el.appendChild(svg["circle"](13, 9, 2, {["cy"]: "9",["fill"]: "#C1694F",["cx"]: "13",["r"]: "1",}));el.appendChild(svg["circle"](13, 13, 2, {["cy"]: "13",["fill"]: "#C1694F",["cx"]: "13",["r"]: "1",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};