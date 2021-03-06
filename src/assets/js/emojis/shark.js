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
				el.appendChild(svg["path"]("M36 21c0 5-3 9-11 11-7.062 1.766-21-.934-21-2 0-1.129 2.503-1.371 6.812-1.125 10.938.625 13.75-3.857 12-5.25-3.062-2.437-6.437.375-12.062-.125C3.782 22.881 0 17.472 0 16c0-2 11.716-8 20-8s16 4.25 16 13z", {["fill"]: "#66757F",["d"]: "M36 21c0 5-3 9-11 11-7.062 1.766-21-.934-21-2 0-1.129 2.503-1.371 6.812-1.125 10.938.625 13.75-3.857 12-5.25-3.062-2.437-6.437.375-12.062-.125C3.782 22.881 0 17.472 0 16c0-2 11.716-8 20-8s16 4.25 16 13z",}));el.appendChild(svg["path"]("M15 12.5c0 .829-.671 1.5-1.5 1.5s-1.5-.671-1.5-1.5.671-.5 1.5-.5 1.5-.329 1.5.5z", {["fill"]: "#292F33",["d"]: "M15 12.5c0 .829-.671 1.5-1.5 1.5s-1.5-.671-1.5-1.5.671-.5 1.5-.5 1.5-.329 1.5.5z",}));el.appendChild(svg["path"]("M14 9c2-5 5.291-9 7.958-9S21 2 26 10 14 9 14 9zM3 30c0-4-1.04-6 .146-6s6.011 4.031 6.011 6.24c0 2.209-4.826 5.76-6.011 5.76C1.96 36 3 34 3 30z", {["fill"]: "#66757F",["d"]: "M14 9c2-5 5.291-9 7.958-9S21 2 26 10 14 9 14 9zM3 30c0-4-1.04-6 .146-6s6.011 4.031 6.011 6.24c0 2.209-4.826 5.76-6.011 5.76C1.96 36 3 34 3 30z",}));el.appendChild(svg["path"]("M26.921 22.5l7.996 7.5s-3.242 1.833-7.996-7.5z", {["fill"]: "#292F33",["d"]: "M26.921 22.5l7.996 7.5s-3.242 1.833-7.996-7.5z",}));el.appendChild(svg["path"]("M26.921 22.5l5.537-3.833S36.333 28.584 34.917 30c-2.583-1-7.996-7.5-7.996-7.5z", {["fill"]: "#66757F",["d"]: "M26.921 22.5l5.537-3.833S36.333 28.584 34.917 30c-2.583-1-7.996-7.5-7.996-7.5z",}));el.appendChild(svg["path"]("M9 20.307c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779zm3 0c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779zm3-1c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779zm3 0c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779z", {["fill"]: "#FFF",["d"]: "M9 20.307c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779zm3 0c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779zm3-1c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779zm3 0c0 .493-.508 2.673-1 2.673s-1-2.18-1-2.673v-1.779c0-.493.508.889 1 .889s1-1.382 1-.889v1.779z",}));el.appendChild(svg["path"]("M6 20l7-1h6v-2H6z", {["fill"]: "#66757F",["d"]: "M6 20l7-1h6v-2H6z",}));el.appendChild(svg["path"]("M18.417 19.167c-4-2.083-13.385-.011-14.917 1.513.469.36.988.707 1.547 1.028 6.109-3.281 14.082-2.169 13.37-2.541z", {["fill"]: "#292F33",["d"]: "M18.417 19.167c-4-2.083-13.385-.011-14.917 1.513.469.36.988.707 1.547 1.028 6.109-3.281 14.082-2.169 13.37-2.541z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};