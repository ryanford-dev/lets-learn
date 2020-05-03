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
				el.appendChild(svg["path"]("M5 23h26v7H5z", {["fill"]: "#D1D3D4",["d"]: "M5 23h26v7H5z",}));el.appendChild(svg["path"]("M0 36h36l-4-7H4z", {["fill"]: "#D99E82",["d"]: "M0 36h36l-4-7H4z",}));el.appendChild(svg["path"]("M30 20H6l-5 4h34z", {["fill"]: "#66757F",["d"]: "M30 20H6l-5 4h34z",}));el.appendChild(svg["path"]("M18 9.882L9.764 14h16.472z", {["fill"]: "#D1D3D4",["d"]: "M18 9.882L9.764 14h16.472z",}));el.appendChild(svg["path"]("M30 14l-1-5H7l-1 5-4 3h32l-4-3zM18 9.882L26.236 14H9.764L18 9.882z", {["fill"]: "#66757F",["d"]: "M30 14l-1-5H7l-1 5-4 3h32l-4-3zM18 9.882L26.236 14H9.764L18 9.882z",}));el.appendChild(svg["path"]("M6 17h24v3H6zm18-8V5H12v4h-2v2h16V9z", {["fill"]: "#D1D3D4",["d"]: "M6 17h24v3H6zm18-8V5H12v4h-2v2h16V9z",}));el.appendChild(svg["path"]("M12 2h12v2l2 2H10l2-2z", {["fill"]: "#66757F",["d"]: "M12 2h12v2l2 2H10l2-2z",}));el.appendChild(svg["path"]("M23 0v1H13V0h-1v2h12V0z", {["fill"]: "#99AAB5",["d"]: "M23 0v1H13V0h-1v2h12V0z",}));el.appendChild(svg["path"]("M30 14.764l-5.105-2.553-6-3L18 8.764l-.895.447-6 3L6 14.764V16h24v-1.236zM12 14l6-3 6 3H12z", {["fill"]: "#66757F",["d"]: "M30 14.764l-5.105-2.553-6-3L18 8.764l-.895.447-6 3L6 14.764V16h24v-1.236zM12 14l6-3 6 3H12z",}));el.appendChild(svg["path"]("M5 27h26v2H5z", {["fill"]: "#6D6E71",["d"]: "M5 27h26v2H5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};