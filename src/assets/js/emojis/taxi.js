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
				el.appendChild(svg["path"]("M21.377 15.449c.089.816-.83 1.495-2.053 1.515-1.223.02-2.095-.635-1.947-1.463l.356-2c.147-.829.938-1.5 1.767-1.5.828 0 1.572.662 1.661 1.478l.216 1.97z", {["fill"]: "#CCD6DD",["d"]: "M21.377 15.449c.089.816-.83 1.495-2.053 1.515-1.223.02-2.095-.635-1.947-1.463l.356-2c.147-.829.938-1.5 1.767-1.5.828 0 1.572.662 1.661 1.478l.216 1.97z",}));el.appendChild(svg["path"]("M32.246 21h-.135l-.444-3c-.327-2.209-1.864-4-3.433-4H16.162c-1.569 0-3.574 1.791-4.478 4l-1.228 3H6.911c-2.073 0-4.104 1.791-4.538 4l-.588 3c-.001.008 0 .015-.002.021C.782 28.132 0 28.97 0 30c0 1.104.896 2 2 2h30c2.209 0 4-1.791 4-4v-3c0-2.209-1.681-4-3.754-4z", {["fill"]: "#FFCC4D",["d"]: "M32.246 21h-.135l-.444-3c-.327-2.209-1.864-4-3.433-4H16.162c-1.569 0-3.574 1.791-4.478 4l-1.228 3H6.911c-2.073 0-4.104 1.791-4.538 4l-.588 3c-.001.008 0 .015-.002.021C.782 28.132 0 28.97 0 30c0 1.104.896 2 2 2h30c2.209 0 4-1.791 4-4v-3c0-2.209-1.681-4-3.754-4z",}));el.appendChild(svg["circle"](10, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "10",}));el.appendChild(svg["circle"](10, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "10",}));el.appendChild(svg["circle"](27, 31, 8, {["cy"]: "31",["r"]: "4",["fill"]: "#292F33",["cx"]: "27",}));el.appendChild(svg["circle"](27, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "27",}));el.appendChild(svg["path"]("M2.373 25l-.196 1H36v-1c0-.348-.055-.679-.133-1H2.702c-.141.321-.261.652-.329 1z", {["fill"]: "#F4900C",["d"]: "M2.373 25l-.196 1H36v-1c0-.348-.055-.679-.133-1H2.702c-.141.321-.261.652-.329 1z",}));el.appendChild(svg["path"]("M24 21h5.92c-.014-.416-.064-.908-.156-1.5-.395-2.5-.552-3.5-3.437-3.5H24v5zm-2-5h-5c-1.594 0-3.236 1.567-3.847 3.5-.194.599-.353 1.088-.472 1.5H22v-5z", {["d"]: "M24 21h5.92c-.014-.416-.064-.908-.156-1.5-.395-2.5-.552-3.5-3.437-3.5H24v5zm-2-5h-5c-1.594 0-3.236 1.567-3.847 3.5-.194.599-.353 1.088-.472 1.5H22v-5z",["fill"]: "#55ACEE",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};