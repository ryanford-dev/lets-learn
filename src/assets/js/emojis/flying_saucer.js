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
				el.appendChild(svg["path"]("M32.831 20.425c-.689 3.241-9.21 6.221-17.314 4.499S.841 17.013 1.53 13.772s8.587-3.287 16.69-1.564 15.3 4.976 14.611 8.217z", {["fill"]: "#FFD983",["d"]: "M32.831 20.425c-.689 3.241-9.21 6.221-17.314 4.499S.841 17.013 1.53 13.772s8.587-3.287 16.69-1.564 15.3 4.976 14.611 8.217z",}));el.appendChild(svg["path"]("M27 36l-2-14-17-5-8 19z", {["fill"]: "#FFD983",["d"]: "M27 36l-2-14-17-5-8 19z",}));el.appendChild(svg["ellipse"](17.481, 15.685, 15.112, 34, {["rx"]: "7.556",["fill"]: "#67757F",["cy"]: "15.685",["ry"]: "17",["cx"]: "17.481",["transform"]: "rotate(-78 17.482 15.686)",}));el.appendChild(svg["path"]("M.414 10.977l.414 2.315 32.866 6.986 1.412-2.126z", {["fill"]: "#67757F",["d"]: "M.414 10.977l.414 2.315 32.866 6.986 1.412-2.126z",}));el.appendChild(svg["ellipse"](18.012, 13.186, 16, 36, {["rx"]: "8",["fill"]: "#9AAAB4",["cy"]: "13.186",["ry"]: "18",["cx"]: "18.012",["transform"]: "rotate(-78 18.013 13.186)",}));el.appendChild(svg["ellipse"](18.428, 11.229, 12, 30, {["rx"]: "6",["fill"]: "#CCD6DD",["cy"]: "11.229",["ry"]: "15",["cx"]: "18.428",["transform"]: "rotate(-78 18.43 11.23)",}));el.appendChild(svg["ellipse"](18.844, 9.273, 6, 18, {["rx"]: "3",["fill"]: "#E1E8ED",["cy"]: "9.273",["ry"]: "9",["cx"]: "18.844",["transform"]: "rotate(-78 18.845 9.274)",}));el.appendChild(svg["path"]("M10.041 7.402c.344-1.621 2.996-4.475 9.843-3.02s8.108 5.141 7.764 6.762c-.344 1.621-4.565 2.097-9.427 1.063s-8.525-3.184-8.18-4.805z", {["fill"]: "#5DADEC",["d"]: "M10.041 7.402c.344-1.621 2.996-4.475 9.843-3.02s8.108 5.141 7.764 6.762c-.344 1.621-4.565 2.097-9.427 1.063s-8.525-3.184-8.18-4.805z",}));el.appendChild(svg["circle"](16.765, 19.055, 2, {["cy"]: "19.055",["r"]: "1",["fill"]: "#8CCAF7",["cx"]: "16.765",}));el.appendChild(svg["circle"](24.798, 19.74, 2, {["cy"]: "19.74",["r"]: "1",["fill"]: "#8CCAF7",["cx"]: "24.798",}));el.appendChild(svg["circle"](32.269, 18.261, 2, {["cy"]: "18.261",["r"]: "1",["fill"]: "#8CCAF7",["cx"]: "32.269",}));el.appendChild(svg["ellipse"](34.183, 14.067, 1, 2, {["rx"]: ".5",["fill"]: "#8CCAF7",["cy"]: "14.067",["ry"]: "1",["cx"]: "34.183",["transform"]: "rotate(-50.811 34.182 14.066)",}));el.appendChild(svg["ellipse"](2.802, 7.397, 2, 1, {["rx"]: "1",["fill"]: "#8CCAF7",["cy"]: "7.397",["ry"]: ".5",["cx"]: "2.802",["transform"]: "rotate(-15.188 2.802 7.396)",}));el.appendChild(svg["circle"](2.924, 12.023, 2, {["cy"]: "12.023",["r"]: "1",["fill"]: "#8CCAF7",["cx"]: "2.924",}));el.appendChild(svg["circle"](9.148, 16.413, 2, {["cy"]: "16.413",["r"]: "1",["fill"]: "#8CCAF7",["cx"]: "9.148",}));el.appendChild(svg["ellipse"](19.572, 5.85, 3, 10, {["rx"]: "1.5",["fill"]: "#8CCAF7",["cy"]: "5.85",["ry"]: "5",["cx"]: "19.572",["transform"]: "rotate(-78 19.573 5.85)",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};