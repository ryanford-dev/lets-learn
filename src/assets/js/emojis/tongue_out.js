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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCB4C",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["ellipse"](11.5, 14.5, 5, 7, {["rx"]: "2.5",["cy"]: "14.5",["ry"]: "3.5",["fill"]: "#65471B",["cx"]: "11.5",}));el.appendChild(svg["ellipse"](24.5, 14.5, 5, 7, {["rx"]: "2.5",["cy"]: "14.5",["ry"]: "3.5",["fill"]: "#65471B",["cx"]: "24.5",}));el.appendChild(svg["path"]("M7 21.262c0 3.964 4.596 9 11 9s11-5 11-9c0 0-10.333 2.756-22 0z", {["fill"]: "#65471B",["d"]: "M7 21.262c0 3.964 4.596 9 11 9s11-5 11-9c0 0-10.333 2.756-22 0z",}));el.appendChild(svg["path"]("M18.545 23.604l-1.091-.005c-3.216-.074-5.454-.596-5.454-.596v6.961c0 3 2 6 6 6s6-3 6-6v-6.92c-1.922.394-3.787.542-5.455.56z", {["fill"]: "#E8596E",["d"]: "M18.545 23.604l-1.091-.005c-3.216-.074-5.454-.596-5.454-.596v6.961c0 3 2 6 6 6s6-3 6-6v-6.92c-1.922.394-3.787.542-5.455.56z",}));el.appendChild(svg["path"]("M18 31.843c.301 0 .545-.244.545-.545v-7.694l-1.091-.005v7.699c.001.301.245.545.546.545z", {["fill"]: "#DD2F45",["d"]: "M18 31.843c.301 0 .545-.244.545-.545v-7.694l-1.091-.005v7.699c.001.301.245.545.546.545z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};