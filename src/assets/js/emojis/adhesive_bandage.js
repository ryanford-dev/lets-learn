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
				el.appendChild(svg["path"]("M2.92 21.393L21.393 2.92c3.227-3.227 8.46-3.227 11.687 0 3.227 3.227 3.227 8.46 0 11.687L14.607 33.08c-3.227 3.227-8.46 3.227-11.687 0-3.227-3.228-3.227-8.46 0-11.687z", {["fill"]: "#D99E82",["d"]: "M2.92 21.393L21.393 2.92c3.227-3.227 8.46-3.227 11.687 0 3.227 3.227 3.227 8.46 0 11.687L14.607 33.08c-3.227 3.227-8.46 3.227-11.687 0-3.227-3.228-3.227-8.46 0-11.687z",}));el.appendChild(svg["circle"](4.389, 25.778, 1.944, {["cy"]: "25.778",["fill"]: "#C1694F",["cx"]: "4.389",["r"]: ".972",}));el.appendChild(svg["circle"](7.306, 28.694, 1.944, {["cy"]: "28.694",["fill"]: "#C1694F",["cx"]: "7.306",["r"]: ".972",}));el.appendChild(svg["circle"](10.222, 31.611, 1.944, {["cy"]: "31.611",["fill"]: "#C1694F",["cx"]: "10.222",["r"]: ".972",}));el.appendChild(svg["circle"](7.306, 22.861, 1.944, {["cy"]: "22.861",["fill"]: "#C1694F",["cx"]: "7.306",["r"]: ".972",}));el.appendChild(svg["circle"](10.222, 25.778, 1.944, {["cy"]: "25.778",["fill"]: "#C1694F",["cx"]: "10.222",["r"]: ".972",}));el.appendChild(svg["circle"](13.139, 28.694, 1.944, {["cy"]: "28.694",["fill"]: "#C1694F",["cx"]: "13.139",["r"]: ".972",}));el.appendChild(svg["path"]("M21.896 7.189c.064-.533.548-.913 1.081-.849.533.064.913.548.849 1.081-.064.533-.548.913-1.081.849-.533-.063-.913-.547-.849-1.081z", {["d"]: "M21.896 7.189c.064-.533.548-.913 1.081-.849.533.064.913.548.849 1.081-.064.533-.548.913-1.081.849-.533-.063-.913-.547-.849-1.081z",["fill"]: "#C1694F",}));el.appendChild(svg["circle"](25.778, 10.222, 1.944, {["cy"]: "10.222",["fill"]: "#C1694F",["cx"]: "25.778",["r"]: ".972",}));el.appendChild(svg["circle"](28.694, 13.139, 1.944, {["cy"]: "13.139",["fill"]: "#C1694F",["cx"]: "28.694",["r"]: ".972",}));el.appendChild(svg["circle"](25.778, 4.389, 1.944, {["cy"]: "4.389",["fill"]: "#C1694F",["cx"]: "25.778",["r"]: ".972",}));el.appendChild(svg["circle"](28.694, 7.306, 1.944, {["cy"]: "7.306",["fill"]: "#C1694F",["cx"]: "28.694",["r"]: ".972",}));el.appendChild(svg["circle"](31.611, 10.222, 1.944, {["cy"]: "10.222",["fill"]: "#C1694F",["cx"]: "31.611",["r"]: ".972",}));el.appendChild(svg["path"]("M6.82 17.514L17.512 6.819 29.18 18.486 18.486 29.18z", {["fill"]: "#EABAA7",["d"]: "M6.82 17.514L17.512 6.819 29.18 18.486 18.486 29.18z",}));el.appendChild(svg["path"]("M9.799 18.423c-.249 0-.498-.095-.687-.285-.38-.38-.38-.995 0-1.375l7.715-7.715c.38-.38.995-.38 1.375 0s.38.995 0 1.375l-7.715 7.715c-.191.191-.439.285-.688.285z", {["fill"]: "#F7DED5",["d"]: "M9.799 18.423c-.249 0-.498-.095-.687-.285-.38-.38-.38-.995 0-1.375l7.715-7.715c.38-.38.995-.38 1.375 0s.38.995 0 1.375l-7.715 7.715c-.191.191-.439.285-.688.285z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};