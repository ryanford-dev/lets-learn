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
				el.appendChild(svg["ellipse"](8.828, 18, 15.906, 26.562, {["rx"]: "7.953",["cy"]: "18",["ry"]: "13.281",["fill"]: "#F5F8FA",["cx"]: "8.828",}));el.appendChild(svg["path"]("M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z", {["fill"]: "#E1E8ED",["d"]: "M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z",}));el.appendChild(svg["circle"](6.594, 18, 9.92, {["cy"]: "18",["r"]: "4.96",["fill"]: "#8899A6",["cx"]: "6.594",}));el.appendChild(svg["circle"](6.594, 18, 7.13, {["cy"]: "18",["r"]: "3.565",["fill"]: "#292F33",["cx"]: "6.594",}));el.appendChild(svg["circle"](7.911, 15.443, 2.852, {["cy"]: "15.443",["r"]: "1.426",["fill"]: "#F5F8FA",["cx"]: "7.911",}));el.appendChild(svg["ellipse"](27.234, 18, 15.906, 26.562, {["rx"]: "7.953",["cy"]: "18",["ry"]: "13.281",["fill"]: "#F5F8FA",["cx"]: "27.234",}));el.appendChild(svg["path"]("M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z", {["fill"]: "#E1E8ED",["d"]: "M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z",}));el.appendChild(svg["circle"](25, 18, 9.92, {["cy"]: "18",["r"]: "4.96",["fill"]: "#8899A6",["cx"]: "25",}));el.appendChild(svg["circle"](25, 18, 7.13, {["cy"]: "18",["r"]: "3.565",["fill"]: "#292F33",["cx"]: "25",}));el.appendChild(svg["circle"](26.317, 15.443, 2.852, {["cy"]: "15.443",["r"]: "1.426",["fill"]: "#F5F8FA",["cx"]: "26.317",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};