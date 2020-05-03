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
				el.appendChild(svg["path"]("M9.344 14.702h-2c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5z", {["fill"]: "#A0041E",["d"]: "M9.344 14.702h-2c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5z",}));el.appendChild(svg["path"]("M5 16L18 3l13 13v17H5z", {["fill"]: "#FFE8B6",["d"]: "M5 16L18 3l13 13v17H5z",}));el.appendChild(svg["path"]("M18 16h1v16h-1z", {["fill"]: "#FFCC4D",["d"]: "M18 16h1v16h-1z",}));el.appendChild(svg["path"]("M31 17c-.256 0-.512-.098-.707-.293L18 4.414 5.707 16.707c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l13-13c.391-.391 1.023-.391 1.414 0l13 13c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z", {["fill"]: "#66757F",["d"]: "M31 17c-.256 0-.512-.098-.707-.293L18 4.414 5.707 16.707c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l13-13c.391-.391 1.023-.391 1.414 0l13 13c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z",}));el.appendChild(svg["path"]("M18 17c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l6.5-6.5c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-6.5 6.5c-.195.195-.451.293-.707.293z", {["fill"]: "#66757F",["d"]: "M18 17c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l6.5-6.5c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-6.5 6.5c-.195.195-.451.293-.707.293z",}));el.appendChild(svg["path"]("M10 26h4v6h-4z", {["fill"]: "#C1694F",["d"]: "M10 26h4v6h-4z",}));el.appendChild(svg["path"]("M10 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z", {["fill"]: "#55ACEE",["d"]: "M10 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z",}));el.appendChild(svg["path"]("M33.5 33.5c0 .828-.672 1.5-1.5 1.5H4c-.828 0-1.5-.672-1.5-1.5S3.172 32 4 32h28c.828 0 1.5.672 1.5 1.5z", {["fill"]: "#5C913B",["d"]: "M33.5 33.5c0 .828-.672 1.5-1.5 1.5H4c-.828 0-1.5-.672-1.5-1.5S3.172 32 4 32h28c.828 0 1.5.672 1.5 1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};