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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v4.5h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#141414",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v4.5h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4.5H0V27z", {["fill"]: "#007A3D",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4.5H0V27z",}));el.appendChild(svg["path"]("M0 13.5h36v9H0z", {["fill"]: "#EEE",["d"]: "M0 13.5h36v9H0z",}));el.appendChild(svg["path"]("M1.129 6.223C.433 6.943 0 7.92 0 9v18c0 1.08.433 2.057 1.129 2.777L12 18 1.129 6.223z", {["fill"]: "#C4111B",["d"]: "M1.129 6.223C.433 6.943 0 7.92 0 9v18c0 1.08.433 2.057 1.129 2.777L12 18 1.129 6.223z",}));el.appendChild(svg["path"]("M17.894 18.033c0-1.692 1.213-3.101 2.817-3.405-.211-.04-.428-.062-.65-.062-1.915 0-3.467 1.552-3.467 3.467S18.146 21.5 20.06 21.5c.222 0 .439-.022.65-.062-1.603-.304-2.816-1.712-2.816-3.405z", {["d"]: "M17.894 18.033c0-1.692 1.213-3.101 2.817-3.405-.211-.04-.428-.062-.65-.062-1.915 0-3.467 1.552-3.467 3.467S18.146 21.5 20.06 21.5c.222 0 .439-.022.65-.062-1.603-.304-2.816-1.712-2.816-3.405z",["fill"]: "#C4111B",}));el.appendChild(svg["path"]("M19.13 20.132l1.478-1.057 1.467 1.073-.548-1.732L23 17.353l-1.817-.014-.556-1.73-.575 1.724-1.817-.006 1.462 1.079-.567 1.726z", {["d"]: "M19.13 20.132l1.478-1.057 1.467 1.073-.548-1.732L23 17.353l-1.817-.014-.556-1.73-.575 1.724-1.817-.006 1.462 1.079-.567 1.726z",["fill"]: "#C4111B",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};