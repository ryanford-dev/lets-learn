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
				el.appendChild(svg["path"]("M2 6C0 6 0 8 0 8v20s0 2 2 2h32c2 0 2-2 2-2V8s0-2-2-2H2z", {["fill"]: "#CBB8E9",["d"]: "M2 6C0 6 0 8 0 8v20s0 2 2 2h32c2 0 2-2 2-2V8s0-2-2-2H2z",}));el.appendChild(svg["path"]("M13 6h10v24.062H13z", {["fill"]: "#9AAAB4",["d"]: "M13 6h10v24.062H13z",}));el.appendChild(svg["path"]("M8.02 13.009c.439 0 .755.228.755.72s-.316.72-.755.72H6.105c.053.299.123.632.123 1.159 0 .826-.544 2.09-1.51 2.951h5.919c.44 0 .756.227.756.72 0 .492-.316.721-.756.721H3.611c-.491 0-.931-.123-.931-.738 0-.754 2.002-1.58 2.002-3.67 0-.316-.018-.755-.123-1.142H2.786c-.439 0-.755-.228-.755-.72s.316-.72.755-.72h1.353c-.421-.755-.86-1.581-.86-2.511 0-1.845 1.809-3.109 3.793-3.109 2.09 0 4.022 1.722 4.022 3.109 0 .474-.298.755-.737.755-1.177 0-.562-2.424-3.268-2.424-1.142 0-2.266.615-2.266 1.774 0 .931.527 1.633.931 2.406H8.02z", {["fill"]: "#67757F",["d"]: "M8.02 13.009c.439 0 .755.228.755.72s-.316.72-.755.72H6.105c.053.299.123.632.123 1.159 0 .826-.544 2.09-1.51 2.951h5.919c.44 0 .756.227.756.72 0 .492-.316.721-.756.721H3.611c-.491 0-.931-.123-.931-.738 0-.754 2.002-1.58 2.002-3.67 0-.316-.018-.755-.123-1.142H2.786c-.439 0-.755-.228-.755-.72s.316-.72.755-.72h1.353c-.421-.755-.86-1.581-.86-2.511 0-1.845 1.809-3.109 3.793-3.109 2.09 0 4.022 1.722 4.022 3.109 0 .474-.298.755-.737.755-1.177 0-.562-2.424-3.268-2.424-1.142 0-2.266.615-2.266 1.774 0 .931.527 1.633.931 2.406H8.02z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};