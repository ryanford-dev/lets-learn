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
				el.appendChild(svg["path"]("M30 16c0 1.104-.896 2-2 2H18c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v2z", {["fill"]: "#58595B",["d"]: "M30 16c0 1.104-.896 2-2 2H18c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v2z",}));el.appendChild(svg["path"]("M4 14c-2.209 0-4 1.791-4 4v10c0 4.418 3.582 8 8 8h28V14H4z", {["fill"]: "#F4900C",["d"]: "M4 14c-2.209 0-4 1.791-4 4v10c0 4.418 3.582 8 8 8h28V14H4z",}));el.appendChild(svg["path"]("M.587 31H36v-2H.069c.087.698.263 1.369.518 2z", {["fill"]: "#FFD983",["d"]: "M.587 31H36v-2H.069c.087.698.263 1.369.518 2z",}));el.appendChild(svg["path"]("M0 2h36v6H0z", {["fill"]: "#808285",["d"]: "M0 2h36v6H0z",}));el.appendChild(svg["path"]("M0 4h36v2H0z", {["fill"]: "#414042",["d"]: "M0 4h36v2H0z",}));el.appendChild(svg["path"]("M28 0H18c-1.657 0-3 1.343-3 3s1.343 3 3 3h3v4l-2 2h8l-2-2V6h3c1.657 0 3-1.343 3-3s-1.343-3-3-3z", {["fill"]: "#A7A9AC",["d"]: "M28 0H18c-1.657 0-3 1.343-3 3s1.343 3 3 3h3v4l-2 2h8l-2-2V6h3c1.657 0 3-1.343 3-3s-1.343-3-3-3z",}));el.appendChild(svg["path"]("M14 14h22v15H14z", {["fill"]: "#3B88C3",["d"]: "M14 14h22v15H14z",}));el.appendChild(svg["path"]("M12 25c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-6c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v6z", {["fill"]: "#58595B",["d"]: "M12 25c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-6c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v6z",}));el.appendChild(svg["path"]("M24 23c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v4zm10 0c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v4z", {["fill"]: "#414042",["d"]: "M24 23c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v4zm10 0c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v4z",}));el.appendChild(svg["path"]("M0 17v10c1.104 0 2-.896 2-2v-6c0-1.104-.896-2-2-2z", {["fill"]: "#58595B",["d"]: "M0 17v10c1.104 0 2-.896 2-2v-6c0-1.104-.896-2-2-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};