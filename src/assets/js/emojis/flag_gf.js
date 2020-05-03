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
				el.appendChild(svg["path"]("M32 5H4c-1.006 0-1.915.384-2.618.998L16.228 16.72h.828L18 13.814l.944 2.906H22l-2.472 1.796.249.767 14.841 10.718C35.458 29.269 36 28.203 36 27V9c0-2.209-1.791-4-4-4z", {["fill"]: "#078930",["d"]: "M32 5H4c-1.006 0-1.915.384-2.618.998L16.228 16.72h.828L18 13.814l.944 2.906H22l-2.472 1.796.249.767 14.841 10.718C35.458 29.269 36 28.203 36 27V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M20.472 21.422L18 19.626l-2.472 1.796.944-2.906L14 16.72h2.228L1.382 5.998C.542 6.731 0 7.797 0 9v18c0 2.209 1.791 4 4 4h28c1.006 0 1.915-.384 2.618-.998L19.777 19.284l.695 2.138z", {["fill"]: "#FCDD09",["d"]: "M20.472 21.422L18 19.626l-2.472 1.796.944-2.906L14 16.72h2.228L1.382 5.998C.542 6.731 0 7.797 0 9v18c0 2.209 1.791 4 4 4h28c1.006 0 1.915-.384 2.618-.998L19.777 19.284l.695 2.138z",}));el.appendChild(svg["path"]("M16.472 18.516l-.944 2.906L18 19.626l2.472 1.796-.695-2.138-.249-.768L22 16.72h-3.056L18 13.814l-.944 2.906H14z", {["fill"]: "#DA121A",["d"]: "M16.472 18.516l-.944 2.906L18 19.626l2.472 1.796-.695-2.138-.249-.768L22 16.72h-3.056L18 13.814l-.944 2.906H14z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};