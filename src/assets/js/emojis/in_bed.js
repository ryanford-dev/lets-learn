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
				el.appendChild(svg["path"]("M35 20c-.553 0-1 .447-1 1v7H2V13c0-.552-.447-1-1-1s-1 .448-1 1v22c0 .553.447 1 1 1s1-.447 1-1v-2h32v2c0 .553.447 1 1 1s1-.447 1-1V21c0-.553-.447-1-1-1z", {["fill"]: "#C1694F",["d"]: "M35 20c-.553 0-1 .447-1 1v7H2V13c0-.552-.447-1-1-1s-1 .448-1 1v22c0 .553.447 1 1 1s1-.447 1-1v-2h32v2c0 .553.447 1 1 1s1-.447 1-1V21c0-.553-.447-1-1-1z",}));el.appendChild(svg["path"]("M17 17h-2c-1.1 0-2 .9-2 2v4h4v-6z", {["fill"]: "#AA8DD8",["d"]: "M17 17h-2c-1.1 0-2 .9-2 2v4h4v-6z",}));el.appendChild(svg["path"]("M31 18.222L17 17c-3.208 0-4 6-4 6h-1v6h22v-8c0-1.925-1.075-2.778-3-2.778z", {["fill"]: "#55ACEE",["d"]: "M31 18.222L17 17c-3.208 0-4 6-4 6h-1v6h22v-8c0-1.925-1.075-2.778-3-2.778z",}));el.appendChild(svg["path"]("M13 23H4c-1.104 0-2 .896-2 2v4h10l1-6z", {["fill"]: "#BDDDF4",["d"]: "M13 23H4c-1.104 0-2 .896-2 2v4h10l1-6z",}));el.appendChild(svg["path"]("M2.114 20.279c-.283 1.213 1.897 2.518 4.871 2.917 2.974.398 5.614-.263 5.898-1.475.283-1.213-1.897-2.518-4.871-2.917-2.973-.399-5.614.262-5.898 1.475z", {["fill"]: "#5C913B",["d"]: "M2.114 20.279c-.283 1.213 1.897 2.518 4.871 2.917 2.974.398 5.614-.263 5.898-1.475.283-1.213-1.897-2.518-4.871-2.917-2.973-.399-5.614.262-5.898 1.475z",}));el.appendChild(svg["path"]("M13.189 22c-.134.595-.189 1-.189 1h21v-1H13.189z", {["fill"]: "#269",["d"]: "M13.189 22c-.134.595-.189 1-.189 1h21v-1H13.189z",}));el.appendChild(svg["path"]("M34 21H13.452c-.11.365-.197.705-.263 1H34v-1z", {["fill"]: "#3B88C3",["d"]: "M34 21H13.452c-.11.365-.197.705-.263 1H34v-1z",}));el.appendChild(svg["ellipse"](9.598, 19.045, 6, 8.584, {["rx"]: "3",["fill"]: "#FFDC5D",["cy"]: "19.045",["ry"]: "4.292",["cx"]: "9.598",["transform"]: "rotate(-62.651 9.598 19.046)",}));el.appendChild(svg["path"]("M7.875 22.376s-3.812-1.972-2.09-5.303c1.378-2.665 5.191-.693 5.191-.693s-1.906-.986-2.94 1.013c-.689 1.333 2.17 2.811-.161 4.983z", {["fill"]: "#FFAC33",["d"]: "M7.875 22.376s-3.812-1.972-2.09-5.303c1.378-2.665 5.191-.693 5.191-.693s-1.906-.986-2.94 1.013c-.689 1.333 2.17 2.811-.161 4.983z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};