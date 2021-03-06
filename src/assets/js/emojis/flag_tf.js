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
				el.appendChild(svg["path"]("M32 5H18v12H0v10c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#002395",["d"]: "M32 5H18v12H0v10c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 16h19v2H0z", {["fill"]: "#EEE",["d"]: "M0 16h19v2H0z",}));el.appendChild(svg["path"]("M6 17H0V9c0-2.209 1.791-4 4-4h2v12z", {["fill"]: "#002395",["d"]: "M6 17H0V9c0-2.209 1.791-4 4-4h2v12z",}));el.appendChild(svg["path"]("M6 5h6v12H6zm11 0h2v13h-2z", {["fill"]: "#EEE",["d"]: "M6 5h6v12H6zm11 0h2v13h-2z",}));el.appendChild(svg["path"]("M12 5h6v12h-6z", {["fill"]: "#ED2939",["d"]: "M12 5h6v12h-6z",}));el.appendChild(svg["path"]("M29.964 20.094l-1.701 2.631v-4.763h2.268l.838-.962h-7.76l.838.962h2.269v4.763l-1.701-2.631-2.475 3.867h1.236l1.239-2.035 2.474 4.356 2.475-4.356 1.238 2.035h1.237z", {["d"]: "M29.964 20.094l-1.701 2.631v-4.763h2.268l.838-.962h-7.76l.838.962h2.269v4.763l-1.701-2.631-2.475 3.867h1.236l1.239-2.035 2.474 4.356 2.475-4.356 1.238 2.035h1.237z",["fill"]: "#FFF",}));el.appendChild(svg["path"]("M27 19.005h3.132l-.688.941H27zm-3.224 4.018h2.476v.617h-2.476zm4.952 0h2.475v.617h-2.475zm-1.239 4.183l.299 1.027h1.034l-.816.661.299 1.014-.816-.62-.815.604.299-1-.817-.659h1.007zM22.152 18l.299 1.026h1.034l-.815.632.298 1-.816-.627-.815.6.299-.973-.816-.632h1.006zm10.673 0l.3 1.026h1.033l-.815.632.299 1-.817-.627-.814.6.298-.973-.816-.632H32.5zm-8.265 7.15l.298 1.027h1.035l-.816.641.298 1.005-.815-.625-.816.601.3-.982-.816-.64h1.005zm5.858 0l.3 1.027h1.033l-.816.641.299 1.005-.816-.625-.814.601.297-.982-.815-.64h1.007z", {["d"]: "M27 19.005h3.132l-.688.941H27zm-3.224 4.018h2.476v.617h-2.476zm4.952 0h2.475v.617h-2.475zm-1.239 4.183l.299 1.027h1.034l-.816.661.299 1.014-.816-.62-.815.604.299-1-.817-.659h1.007zM22.152 18l.299 1.026h1.034l-.815.632.298 1-.816-.627-.815.6.299-.973-.816-.632h1.006zm10.673 0l.3 1.026h1.033l-.815.632.299 1-.817-.627-.814.6.298-.973-.816-.632H32.5zm-8.265 7.15l.298 1.027h1.035l-.816.641.298 1.005-.815-.625-.816.601.3-.982-.816-.64h1.005zm5.858 0l.3 1.027h1.033l-.816.641.299 1.005-.816-.625-.814.601.297-.982-.815-.64h1.007z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};