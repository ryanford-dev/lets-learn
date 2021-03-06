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
				el.appendChild(svg["path"]("M36 33.5c0 .828-.672 1.5-1.5 1.5h-33C.672 35 0 34.328 0 33.5S.672 32 1.5 32h33c.828 0 1.5.672 1.5 1.5z", {["fill"]: "#5C913B",["d"]: "M36 33.5c0 .828-.672 1.5-1.5 1.5h-33C.672 35 0 34.328 0 33.5S.672 32 1.5 32h33c.828 0 1.5.672 1.5 1.5z",}));el.appendChild(svg["path"]("M12.344 14.702h-2c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5z", {["fill"]: "#A0041E",["d"]: "M12.344 14.702h-2c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5z",}));el.appendChild(svg["path"]("M5.942 32c-.137-4.657-.506-8-.942-8-.435 0-.804 3.343-.941 8h1.883z", {["fill"]: "#FFCC4D",["d"]: "M5.942 32c-.137-4.657-.506-8-.942-8-.435 0-.804 3.343-.941 8h1.883z",}));el.appendChild(svg["path"]("M10 18.731C10 24.306 7.762 26 5 26c-2.761 0-5-1.694-5-7.269C0 13.154 4 5 5 5s5 8.154 5 13.731z", {["fill"]: "#77B255",["d"]: "M10 18.731C10 24.306 7.762 26 5 26c-2.761 0-5-1.694-5-7.269C0 13.154 4 5 5 5s5 8.154 5 13.731z",}));el.appendChild(svg["path"]("M8 16L21 3l13 13v16H8z", {["fill"]: "#FFE8B6",["d"]: "M8 16L21 3l13 13v16H8z",}));el.appendChild(svg["path"]("M21 16h1v16h-1z", {["fill"]: "#FFCC4D",["d"]: "M21 16h1v16h-1z",}));el.appendChild(svg["path"]("M34 17c-.256 0-.512-.098-.707-.293L21 4.414 8.707 16.707c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l13-13c.391-.391 1.023-.391 1.414 0l13 13c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z", {["fill"]: "#66757F",["d"]: "M34 17c-.256 0-.512-.098-.707-.293L21 4.414 8.707 16.707c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l13-13c.391-.391 1.023-.391 1.414 0l13 13c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z",}));el.appendChild(svg["path"]("M21 17c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l6.5-6.5c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-6.5 6.5c-.195.195-.451.293-.707.293z", {["fill"]: "#66757F",["d"]: "M21 17c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l6.5-6.5c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-6.5 6.5c-.195.195-.451.293-.707.293z",}));el.appendChild(svg["path"]("M13 26h4v6h-4z", {["fill"]: "#C1694F",["d"]: "M13 26h4v6h-4z",}));el.appendChild(svg["path"]("M13 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z", {["fill"]: "#55ACEE",["d"]: "M13 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z",}));el.appendChild(svg["path"]("M10.625 29.991c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973s1.917 2.359 1.917 3.973zm25.25 0c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973.384 0 1.917 2.359 1.917 3.973z", {["fill"]: "#77B255",["d"]: "M10.625 29.991c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973s1.917 2.359 1.917 3.973zm25.25 0c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973.384 0 1.917 2.359 1.917 3.973z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};