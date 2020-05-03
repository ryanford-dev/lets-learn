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
				el.appendChild(svg["path"]("M9.999 12c-.15 0-.303-.034-.446-.106-4.38-2.19-7.484-7.526-8.501-10.578C.876.792 1.16.226 1.684.051c.525-.176 1.091.109 1.265.632.877 2.632 3.688 7.517 7.499 9.422.494.247.694.848.447 1.342-.176.351-.529.553-.896.553z", {["fill"]: "#77B255",["d"]: "M9.999 12c-.15 0-.303-.034-.446-.106-4.38-2.19-7.484-7.526-8.501-10.578C.876.792 1.16.226 1.684.051c.525-.176 1.091.109 1.265.632.877 2.632 3.688 7.517 7.499 9.422.494.247.694.848.447 1.342-.176.351-.529.553-.896.553z",}));el.appendChild(svg["circle"](19, 29, 14, {["cy"]: "29",["r"]: "7",["fill"]: "#553788",["cx"]: "19",}));el.appendChild(svg["circle"](10, 15, 14, {["cy"]: "15",["r"]: "7",["fill"]: "#9266CC",["cx"]: "10",}));el.appendChild(svg["circle"](19, 12, 14, {["cy"]: "12",["r"]: "7",["fill"]: "#AA8DD8",["cx"]: "19",}));el.appendChild(svg["circle"](27, 18, 14, {["cy"]: "18",["r"]: "7",["fill"]: "#744EAA",["cx"]: "27",}));el.appendChild(svg["circle"](9, 26, 14, {["cy"]: "26",["r"]: "7",["fill"]: "#744EAA",["cx"]: "9",}));el.appendChild(svg["circle"](18, 21, 14, {["cy"]: "21",["r"]: "7",["fill"]: "#9266CC",["cx"]: "18",}));el.appendChild(svg["circle"](29, 29, 14, {["cy"]: "29",["r"]: "7",["fill"]: "#9266CC",["cx"]: "29",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};