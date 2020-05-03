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
				el.appendChild(svg["path"]("M32 5h-7.833L1.129 29.785l.001.001c.152.157.317.301.493.431l.001.001L36 13.667V9c0-2.209-1.791-4-4-4z", {["fill"]: "#D62828",["d"]: "M32 5h-7.833L1.129 29.785l.001.001c.152.157.317.301.493.431l.001.001L36 13.667V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M.763 29.35c.112.154.235.299.367.435L24.167 5H12L.763 29.35c-.001-.001-.001-.001 0 0z", {["fill"]: "#FCD856",["d"]: "M.763 29.35c.112.154.235.299.367.435L24.167 5H12L.763 29.35c-.001-.001-.001-.001 0 0z",}));el.appendChild(svg["path"]("M12 5H4C1.791 5 0 6.791 0 9v18c0 .878.283 1.689.762 2.349L12 5z", {["fill"]: "#003F87",["d"]: "M12 5H4C1.791 5 0 6.791 0 9v18c0 .878.283 1.689.762 2.349L12 5z",}));el.appendChild(svg["path"]("M2.063 30.501l.004.002L36 22.333v-8.667L1.624 30.218c.14.103.287.198.439.283z", {["fill"]: "#EEE",["d"]: "M2.063 30.501l.004.002L36 22.333v-8.667L1.624 30.218c.14.103.287.198.439.283z",}));el.appendChild(svg["path"]("M4 31h28c2.209 0 4-1.791 4-4v-4.667L2.067 30.502C2.64 30.819 3.299 31 4 31z", {["fill"]: "#007A3D",["d"]: "M4 31h28c2.209 0 4-1.791 4-4v-4.667L2.067 30.502C2.64 30.819 3.299 31 4 31z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};