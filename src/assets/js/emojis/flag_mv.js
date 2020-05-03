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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#D21034",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M6 11h24v14H6z", {["fill"]: "#007E3A",["d"]: "M6 11h24v14H6z",}));el.appendChild(svg["path"]("M19.64 22.344c.279 0 .551-.027.814-.077-2.009-.381-3.529-2.146-3.529-4.266s1.52-3.885 3.529-4.266c-.264-.05-.536-.077-.814-.077-2.399 0-4.344 1.945-4.344 4.344 0 2.397 1.945 4.342 4.344 4.342z", {["fill"]: "#FFF",["d"]: "M19.64 22.344c.279 0 .551-.027.814-.077-2.009-.381-3.529-2.146-3.529-4.266s1.52-3.885 3.529-4.266c-.264-.05-.536-.077-.814-.077-2.399 0-4.344 1.945-4.344 4.344 0 2.397 1.945 4.342 4.344 4.342z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};