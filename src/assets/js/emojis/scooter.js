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
				el.appendChild(svg["circle"](4.5, 31.5, 9, {["cy"]: "31.5",["r"]: "4.5",["fill"]: "#292F33",["cx"]: "4.5",}));el.appendChild(svg["circle"](4.5, 31.5, 6, {["cy"]: "31.5",["r"]: "3",["fill"]: "#DD2E44",["cx"]: "4.5",}));el.appendChild(svg["circle"](31.5, 31.5, 9, {["cy"]: "31.5",["r"]: "4.5",["fill"]: "#292F33",["cx"]: "31.5",}));el.appendChild(svg["circle"](31.5, 31.5, 6, {["cy"]: "31.5",["r"]: "3",["fill"]: "#DD2E44",["cx"]: "31.5",}));el.appendChild(svg["path"]("M31.5 33h-20c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5h20c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5z", {["fill"]: "#55ACEE",["d"]: "M31.5 33h-20c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5h20c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5z",}));el.appendChild(svg["path"]("M26.012 31.746c-.003-.082-.012-.163-.012-.246 0-3.038 2.462-5.5 5.5-5.5 1.21 0 2.326.396 3.234 1.058l.89-1.205c-1.158-.847-2.58-1.353-4.125-1.353-3.866 0-7 3.134-7 7 0 .102.011.201.015.302l1.498-.056zM5.629 26.117c2.495.52 4.369 2.73 4.371 5.378l3.5.003c-.001-4.34-3.074-7.962-7.163-8.81-.232 1.13-.476 2.31-.708 3.429z", {["fill"]: "#55ACEE",["d"]: "M26.012 31.746c-.003-.082-.012-.163-.012-.246 0-3.038 2.462-5.5 5.5-5.5 1.21 0 2.326.396 3.234 1.058l.89-1.205c-1.158-.847-2.58-1.353-4.125-1.353-3.866 0-7 3.134-7 7 0 .102.011.201.015.302l1.498-.056zM5.629 26.117c2.495.52 4.369 2.73 4.371 5.378l3.5.003c-.001-4.34-3.074-7.962-7.163-8.81-.232 1.13-.476 2.31-.708 3.429z",}));el.appendChild(svg["path"]("M4.395 31.998c-.269-.057-.442-.324-.385-.593l6.002-28.238c.057-.269.324-.442.593-.385.269.057.442.324.385.593L4.988 31.613c-.057.269-.324.442-.593.385z", {["fill"]: "#99AAB5",["d"]: "M4.395 31.998c-.269-.057-.442-.324-.385-.593l6.002-28.238c.057-.269.324-.442.593-.385.269.057.442.324.385.593L4.988 31.613c-.057.269-.324.442-.593.385z",}));el.appendChild(svg["path"]("M6.123 26.261l-.978-.208c-.538-.114-.885-.648-.77-1.186l1.247-5.869c.114-.538.648-.885 1.186-.77l.978.208c.538.114.885.648.77 1.186L7.31 25.49c-.115.538-.649.885-1.187.771z", {["fill"]: "#55ACEE",["d"]: "M6.123 26.261l-.978-.208c-.538-.114-.885-.648-.77-1.186l1.247-5.869c.114-.538.648-.885 1.186-.77l.978.208c.538.114.885.648.77 1.186L7.31 25.49c-.115.538-.649.885-1.187.771z",}));el.appendChild(svg["path"]("M9.3 4.324l-1.957-.416c-.807-.172-1.327-.972-1.155-1.779.171-.807.972-1.327 1.779-1.156l1.956.416c.807.172 1.327.972 1.155 1.779-.171.807-.972 1.327-1.778 1.156z", {["fill"]: "#DD2E44",["d"]: "M9.3 4.324l-1.957-.416c-.807-.172-1.327-.972-1.155-1.779.171-.807.972-1.327 1.779-1.156l1.956.416c.807.172 1.327.972 1.155 1.779-.171.807-.972 1.327-1.778 1.156z",}));el.appendChild(svg["path"]("M10.84 1.675c-.807-.172-1.608.348-1.779 1.155L7.71 9.188c-.114.538.232 1.072.77 1.186l.978.208c.538.114 1.072-.232 1.186-.77l1.351-6.358c.172-.807-.348-1.607-1.155-1.779z", {["fill"]: "#55ACEE",["d"]: "M10.84 1.675c-.807-.172-1.608.348-1.779 1.155L7.71 9.188c-.114.538.232 1.072.77 1.186l.978.208c.538.114 1.072-.232 1.186-.77l1.351-6.358c.172-.807-.348-1.607-1.155-1.779z",}));el.appendChild(svg["path"]("M14.105 5.345l-2.934-.624c-.807-.172-1.327-.972-1.155-1.779.172-.807.972-1.327 1.779-1.155l2.934.624c.807.172 1.327.972 1.155 1.779-.171.807-.972 1.327-1.779 1.155z", {["fill"]: "#DD2E44",["d"]: "M14.105 5.345l-2.934-.624c-.807-.172-1.327-.972-1.155-1.779.172-.807.972-1.327 1.779-1.155l2.934.624c.807.172 1.327.972 1.155 1.779-.171.807-.972 1.327-1.779 1.155z",}));el.appendChild(svg["path"]("M15.903 4.194c-.172.81-.969 1.328-1.779 1.155-.81-.172-1.328-.969-1.155-1.779.172-.81.969-1.328 1.779-1.155s1.328.968 1.155 1.779z", {["fill"]: "#EA596E",["d"]: "M15.903 4.194c-.172.81-.969 1.328-1.779 1.155-.81-.172-1.328-.969-1.155-1.779.172-.81.969-1.328 1.779-1.155s1.328.968 1.155 1.779z",}));el.appendChild(svg["circle"](35.19, 26.46, 1.48, {["cy"]: "26.46",["r"]: ".74",["fill"]: "#55ACEE",["cx"]: "35.19",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};