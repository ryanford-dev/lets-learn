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
				el.appendChild(svg["path"]("M1 22.923v6.538C1 33.073 8.611 36 18 36s17-2.927 17-6.538v-6.538H1z", {["fill"]: "#99AAB5",["d"]: "M1 22.923v6.538C1 33.073 8.611 36 18 36s17-2.927 17-6.538v-6.538H1z",}));el.appendChild(svg["ellipse"](18, 22.923, 34, 13.076, {["rx"]: "17",["cy"]: "22.923",["ry"]: "6.538",["fill"]: "#E1E8ED",["cx"]: "18",}));el.appendChild(svg["path"]("M18 20.308c6.7 0 12.314 1.668 13.913 3.923.297-.419.472-.855.472-1.308 0-2.889-6.44-5.231-14.385-5.231S3.615 20.034 3.615 22.923c0 .452.175.889.472 1.308C5.686 21.976 11.3 20.308 18 20.308z", {["fill"]: "#AAB8C2",["d"]: "M18 20.308c6.7 0 12.314 1.668 13.913 3.923.297-.419.472-.855.472-1.308 0-2.889-6.44-5.231-14.385-5.231S3.615 20.034 3.615 22.923c0 .452.175.889.472 1.308C5.686 21.976 11.3 20.308 18 20.308z",}));el.appendChild(svg["ellipse"](18, 24.231, 27.826, 7.846, {["rx"]: "13.913",["cy"]: "24.231",["ry"]: "3.923",["fill"]: "#3B88C3",["cx"]: "18",}));el.appendChild(svg["path"]("M18 22.128c-4.497 0-9.625 1.285-9.625 2.103 0 .818 5.129 2.102 9.625 2.102s9.625-1.284 9.625-2.102c0-.818-5.128-2.103-9.625-2.103z", {["fill"]: "#50A5E6",["d"]: "M18 22.128c-4.497 0-9.625 1.285-9.625 2.103 0 .818 5.129 2.102 9.625 2.102s9.625-1.284 9.625-2.102c0-.818-5.128-2.103-9.625-2.103z",}));el.appendChild(svg["path"]("M15 22.615V24c0 .553 1.343 1 3 1s3-.447 3-1v-1.385h-6z", {["fill"]: "#E1E8ED",["d"]: "M15 22.615V24c0 .553 1.343 1 3 1s3-.447 3-1v-1.385h-6z",}));el.appendChild(svg["ellipse"](18, 22.615, 6, 2, {["rx"]: "3",["cy"]: "22.615",["ry"]: "1",["fill"]: "#AAB8C2",["cx"]: "18",}));el.appendChild(svg["path"]("M9 15.786c-.552 0-1-.448-1-1V13.5C8 10.467 10.467 8 13.5 8s5.5 2.467 5.5 5.5c0 .552-.447 1-1 1-.552 0-1-.448-1-1 0-1.93-1.57-3.5-3.5-3.5S10 11.57 10 13.5v1.286c0 .552-.448 1-1 1z", {["fill"]: "#1C6399",["d"]: "M9 15.786c-.552 0-1-.448-1-1V13.5C8 10.467 10.467 8 13.5 8s5.5 2.467 5.5 5.5c0 .552-.447 1-1 1-.552 0-1-.448-1-1 0-1.93-1.57-3.5-3.5-3.5S10 11.57 10 13.5v1.286c0 .552-.448 1-1 1z",}));el.appendChild(svg["path"]("M26 18c-.553 0-1-.448-1-1v-1.143c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .552-.447 1-1 1-.552 0-1-.448-1-1 0-2.757 2.243-5 5-5s5 2.243 5 5V17c0 .552-.447 1-1 1z", {["fill"]: "#88C9F9",["d"]: "M26 18c-.553 0-1-.448-1-1v-1.143c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .552-.447 1-1 1-.552 0-1-.448-1-1 0-2.757 2.243-5 5-5s5 2.243 5 5V17c0 .552-.447 1-1 1z",}));el.appendChild(svg["path"]("M32 11.125c-.553 0-1-.448-1-1 0-3.309-2.691-6-6-6s-6 2.691-6 6c0 .552-.447 1-1 1-.552 0-1-.448-1-1 0-4.411 3.589-8 8-8s8 3.589 8 8c0 .552-.447 1-1 1z", {["fill"]: "#1C6399",["d"]: "M32 11.125c-.553 0-1-.448-1-1 0-3.309-2.691-6-6-6s-6 2.691-6 6c0 .552-.447 1-1 1-.552 0-1-.448-1-1 0-4.411 3.589-8 8-8s8 3.589 8 8c0 .552-.447 1-1 1z",}));el.appendChild(svg["path"]("M17 22.659h2V8c0-4.411-3.589-8-8-8S3 3.589 3 8c0 .552.448 1 1 1s1-.448 1-1c0-3.309 2.691-6 6-6s6 2.691 6 6v14.659z", {["fill"]: "#3B94D9",["d"]: "M17 22.659h2V8c0-4.411-3.589-8-8-8S3 3.589 3 8c0 .552.448 1 1 1s1-.448 1-1c0-3.309 2.691-6 6-6s6 2.691 6 6v14.659z",}));el.appendChild(svg["circle"](32, 14, 2, {["cy"]: "14",["r"]: "1",["fill"]: "#1C6399",["cx"]: "32",}));el.appendChild(svg["circle"](26, 21, 2, {["cy"]: "21",["r"]: "1",["fill"]: "#BBDDF5",["cx"]: "26",}));el.appendChild(svg["circle"](33, 2, 2, {["cy"]: "2",["r"]: "1",["fill"]: "#BBDDF5",["cx"]: "33",}));el.appendChild(svg["circle"](14, 20, 2, {["cy"]: "20",["r"]: "1",["fill"]: "#F2F9FF",["cx"]: "14",}));el.appendChild(svg["circle"](26, 9, 2, {["cy"]: "9",["r"]: "1",["fill"]: "#50A5E6",["cx"]: "26",}));el.appendChild(svg["circle"](20, 1, 2, {["cy"]: "1",["r"]: "1",["fill"]: "#1C6399",["cx"]: "20",}));el.appendChild(svg["circle"](9, 18, 2, {["cy"]: "18",["r"]: "1",["fill"]: "#1C6399",["cx"]: "9",}));el.appendChild(svg["circle"](4, 13, 2, {["cy"]: "13",["r"]: "1",["fill"]: "#3B94D9",["cx"]: "4",}));el.appendChild(svg["circle"](11, 5, 2, {["cy"]: "5",["r"]: "1",["fill"]: "#88C9F9",["cx"]: "11",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};