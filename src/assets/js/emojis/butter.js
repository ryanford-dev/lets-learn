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
				el.appendChild(svg["path"]("M35.145 22.16l-22.86 13.219c-.902.521-2.364.521-3.266 0L.855 30.658c-.451-.261-.676-.602-.676-.944v-1.843l23.535-12.32c.902-.521 2.364-.521 3.266 0l8.84 3.819c0 .558-.005 1.497 0 1.834.006.345-.219.692-.675.956z", {["fill"]: "#99AAB5",["d"]: "M35.145 22.16l-22.86 13.219c-.902.521-2.364.521-3.266 0L.855 30.658c-.451-.261-.676-.602-.676-.944v-1.843l23.535-12.32c.902-.521 2.364-.521 3.266 0l8.84 3.819c0 .558-.005 1.497 0 1.834.006.345-.219.692-.675.956z",}));el.appendChild(svg["path"]("M35.145 20.344l-22.86 13.219c-.902.521-2.364.521-3.266 0L.855 28.842c-.902-.521-.902-1.367 0-1.888l22.86-13.219c.902-.521 2.364-.521 3.266 0l8.164 4.721c.901.521.901 1.367 0 1.888z", {["fill"]: "#CCD6DD",["d"]: "M35.145 20.344l-22.86 13.219c-.902.521-2.364.521-3.266 0L.855 28.842c-.902-.521-.902-1.367 0-1.888l22.86-13.219c.902-.521 2.364-.521 3.266 0l8.164 4.721c.901.521.901 1.367 0 1.888z",}));el.appendChild(svg["path"]("M33 19.011v-8.083l-7-4.041-13.042 7.502v8.083l7 4.042z", {["fill"]: "#FFE8B6",["d"]: "M33 19.011v-8.083l-7-4.041-13.042 7.502v8.083l7 4.042z",}));el.appendChild(svg["path"]("M33 19.011v-8.083l-13.042 7.503-7-4.042v8.083l7 4.042z", {["fill"]: "#FFD983",["d"]: "M33 19.011v-8.083l-13.042 7.503-7-4.042v8.083l7 4.042z",}));el.appendChild(svg["path"]("M33 19.011v-8.083l-13.042 7.503v8.083z", {["fill"]: "#FFCC4D",["d"]: "M33 19.011v-8.083l-13.042 7.503v8.083z",}));el.appendChild(svg["path"]("M17.182 28.302V26.29l-7-4.041L3 26.325v2.012l7 4.041z", {["fill"]: "#FFE8B6",["d"]: "M17.182 28.302V26.29l-7-4.041L3 26.325v2.012l7 4.041z",}));el.appendChild(svg["path"]("M17.182 28.302V26.29l-7 4.059L3 26.325v2.012l7 4.041z", {["fill"]: "#FFD983",["d"]: "M17.182 28.302V26.29l-7 4.059L3 26.325v2.012l7 4.041z",}));el.appendChild(svg["path"]("M17.182 28.302V26.29l-7 4.059L10 32.378z", {["fill"]: "#FFCC4D",["d"]: "M17.182 28.302V26.29l-7 4.059L10 32.378z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};