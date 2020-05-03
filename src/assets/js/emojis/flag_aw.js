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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v13.055h36V9c0-2.209-1.791-4-4-4zM6.276 11.276l-.943 3.057-.943-3.057-3.057-.943L4.39 9.39l.943-3.057.943 3.057 3.057.943-3.057.943zM4 31h28c1.872 0 3.431-1.291 3.867-3.028H.133C.569 29.709 2.128 31 4 31zm-4-6.972h36V26H0z", {["fill"]: "#4189DD",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v13.055h36V9c0-2.209-1.791-4-4-4zM6.276 11.276l-.943 3.057-.943-3.057-3.057-.943L4.39 9.39l.943-3.057.943 3.057 3.057.943-3.057.943zM4 31h28c1.872 0 3.431-1.291 3.867-3.028H.133C.569 29.709 2.128 31 4 31zm-4-6.972h36V26H0z",}));el.appendChild(svg["path"]("M5.333 6.333l-.942 3.058-3.057.943 3.057.943.943 3.057.943-3.057 3.057-.943-3.058-.943-.943-3.058zm.727 4.727l-.726 2.355-.727-2.355-2.355-.726 2.355-.726.726-2.355.727 2.354 2.355.726-2.355.727z", {["fill"]: "#FFF",["d"]: "M5.333 6.333l-.942 3.058-3.057.943 3.057.943.943 3.057.943-3.057 3.057-.943-3.058-.943-.943-3.058zm.727 4.727l-.726 2.355-.727-2.355-2.355-.726 2.355-.726.726-2.355.727 2.354 2.355.726-2.355.727z",}));el.appendChild(svg["path"]("M5.333 7.252l-.726 2.355-2.355.726 2.355.727.726 2.355.727-2.355 2.355-.727-2.355-.726z", {["fill"]: "#D21034",["d"]: "M5.333 7.252l-.726 2.355-2.355.726 2.355.727.726 2.355.727-2.355 2.355-.727-2.355-.726z",}));el.appendChild(svg["path"]("M0 22.055h36v1.972H0zM0 27c0 .337.054.659.133.972h35.734c.079-.313.133-.635.133-.972v-1H0v1z", {["fill"]: "#F9D616",["d"]: "M0 22.055h36v1.972H0zM0 27c0 .337.054.659.133.972h35.734c.079-.313.133-.635.133-.972v-1H0v1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};