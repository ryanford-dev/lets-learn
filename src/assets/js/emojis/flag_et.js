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
				el.appendChild(svg["path"]("M0 13h36v10H0z", {["fill"]: "#FCDD0A",["d"]: "M0 13h36v10H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#088930",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M4 31h28c2.209 0 4-1.791 4-4v-4H0v4c0 2.209 1.791 4 4 4z", {["fill"]: "#DA1219",["d"]: "M4 31h28c2.209 0 4-1.791 4-4v-4H0v4c0 2.209 1.791 4 4 4z",}));el.appendChild(svg["circle"](18, 18, 18, {["cy"]: "18",["r"]: "9",["fill"]: "#0F47AF",["cx"]: "18",}));el.appendChild(svg["path"]("M13.25 24.469l1.719-5.531-2.731-1.985h1.156l3.778 2.893-.594.359-.922-.83-1.468 4.406z", {["d"]: "M13.25 24.469l1.719-5.531-2.731-1.985h1.156l3.778 2.893-.594.359-.922-.83-1.468 4.406z",["fill"]: "#FCDD0A",}));el.appendChild(svg["path"]("M22.609 24.469l-4.73-3.345-2.723 1.97.357-1.1 3.964-2.824.158.676-1.128.759 3.739 2.759z", {["d"]: "M22.609 24.469l-4.73-3.345-2.723 1.97.357-1.1 3.964-2.824.158.676-1.128.759 3.739 2.759z",["fill"]: "#FCDD0A",}));el.appendChild(svg["path"]("M25.382 15.64l-4.519 3.372 1.012 3.222-.935-.677-1.463-4.633.693.058.395 1.272 3.7-2.647z", {["d"]: "M25.382 15.64l-4.519 3.372 1.012 3.222-.935-.677-1.463-4.633.693.058.395 1.272 3.7-2.647z",["fill"]: "#FCDD0A",}));el.appendChild(svg["path"]("M17.872 10.07l1.86 5.487 3.344.05-.933.68-4.549-.038.271-.642.979-.06-1.327-4.37zm-7.669 5.477h5.906l1.063-3.254.358 1.098L16.012 18l-.526-.456.476-1.372-4.783.029zm7.526 6.765h.417v3.647h-.417zm7.847-2.087l-.128.396L22 19.466l.128-.396z", {["d"]: "M17.872 10.07l1.86 5.487 3.344.05-.933.68-4.549-.038.271-.642.979-.06-1.327-4.37zm-7.669 5.477h5.906l1.063-3.254.358 1.098L16.012 18l-.526-.456.476-1.372-4.783.029zm7.526 6.765h.417v3.647h-.417zm7.847-2.087l-.128.396L22 19.466l.128-.396z",["fill"]: "#FCDD0A",}));el.appendChild(svg["path"]("M22.473 11.453l.337.245-2.177 3.021-.337-.244zm-9.359.245l.337-.245 2.174 3.021-.336.245zm-2.637 8.923l-.129-.396 3.454-1.155.129.397z", {["d"]: "M22.473 11.453l.337.245-2.177 3.021-.337-.244zm-9.359.245l.337-.245 2.174 3.021-.336.245zm-2.637 8.923l-.129-.396 3.454-1.155.129.397z",["fill"]: "#FCDD0A",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};