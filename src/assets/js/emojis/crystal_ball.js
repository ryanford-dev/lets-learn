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
				el.appendChild(svg["path"]("M28.736 28.767l-21.458.076-1.649 4.835c-.062.187-.101.387-.073.582.145.984.993 1.74 2.017 1.74h20.894c1.024 0 1.872-.756 2.017-1.74.029-.195-.01-.395-.073-.582l-1.675-4.911z", {["fill"]: "#BF6952",["d"]: "M28.736 28.767l-21.458.076-1.649 4.835c-.062.187-.101.387-.073.582.145.984.993 1.74 2.017 1.74h20.894c1.024 0 1.872-.756 2.017-1.74.029-.195-.01-.395-.073-.582l-1.675-4.911z",}));el.appendChild(svg["path"]("M28.736 28.767l-.19-.556c-.199-.598-.759-1.001-1.389-1.001H8.883c-.63 0-1.19.403-1.389 1.001l-.216.632c2.928 2.344 6.636 3.754 10.678 3.754 4.088 0 7.837-1.438 10.78-3.83z", {["fill"]: "#854836",["d"]: "M28.736 28.767l-.19-.556c-.199-.598-.759-1.001-1.389-1.001H8.883c-.63 0-1.19.403-1.389 1.001l-.216.632c2.928 2.344 6.636 3.754 10.678 3.754 4.088 0 7.837-1.438 10.78-3.83z",}));el.appendChild(svg["circle"](17.956, 15.488, 30.576, {["cy"]: "15.488",["r"]: "15.288",["fill"]: "#AA8DD8",["cx"]: "17.956",}));el.appendChild(svg["circle"](23.266, 12.37, 8.39, {["cy"]: "12.37",["r"]: "4.195",["fill"]: "#744EAA",["cx"]: "23.266",}));el.appendChild(svg["circle"](14.875, 18.662, 6.292, {["cy"]: "18.662",["r"]: "3.146",["fill"]: "#744EAA",["cx"]: "14.875",}));el.appendChild(svg["circle"](15.924, 5.028, 4.196, {["cy"]: "5.028",["r"]: "2.098",["fill"]: "#744EAA",["cx"]: "15.924",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};