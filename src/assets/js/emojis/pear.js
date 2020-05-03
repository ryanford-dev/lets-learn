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
				el.appendChild(svg["path"]("M7.681 9.097c1.587-3.151 7.698-1.916 11.958 2.171 2.697 2.586 8.056 1.498 11.498 4.804 3.493 3.354 3.259 9.361-3.053 15.767C23 37 16 37 11.835 33.384c-4.388-3.811-2.476-8.61-4.412-13.585C5.487 14.823 3.1 9.375 7.681 9.097z", {["fill"]: "#A6D388",["d"]: "M7.681 9.097c1.587-3.151 7.698-1.916 11.958 2.171 2.697 2.586 8.056 1.498 11.498 4.804 3.493 3.354 3.259 9.361-3.053 15.767C23 37 16 37 11.835 33.384c-4.388-3.811-2.476-8.61-4.412-13.585C5.487 14.823 3.1 9.375 7.681 9.097z",}));el.appendChild(svg["path"]("M8.178 9.534c-.43.448-1.114.489-1.527.093-3.208-3.079-3.918-7.544-3.946-7.776-.074-.586.348-1.157.939-1.278.592-.121 1.131.257 1.205.842.006.05.657 3.997 3.359 6.59.413.397.4 1.081-.03 1.529z", {["fill"]: "#662113",["d"]: "M8.178 9.534c-.43.448-1.114.489-1.527.093-3.208-3.079-3.918-7.544-3.946-7.776-.074-.586.348-1.157.939-1.278.592-.121 1.131.257 1.205.842.006.05.657 3.997 3.359 6.59.413.397.4 1.081-.03 1.529z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};