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
				el.appendChild(svg["path"]("M34 7H2l3 29h26z", {["fill"]: "#E1E8ED",["d"]: "M34 7H2l3 29h26z",}));el.appendChild(svg["path"]("M14 7H2l3 29h10z", {["fill"]: "#99AAB5",["d"]: "M14 7H2l3 29h10z",}));el.appendChild(svg["path"]("M34.901.567C34.734.22 34.385 0 34 0H16c-.304 0-.591.138-.781.375L9.439 7H12l4.48-5h15.438l-6.7 8.375c-.345.431-.274 1.061.156 1.405.186.148.406.22.625.22.294 0 .584-.128.782-.375l8-10c.24-.3.286-.712.12-1.058z", {["fill"]: "#66757F",["d"]: "M34.901.567C34.734.22 34.385 0 34 0H16c-.304 0-.591.138-.781.375L9.439 7H12l4.48-5h15.438l-6.7 8.375c-.345.431-.274 1.061.156 1.405.186.148.406.22.625.22.294 0 .584-.128.782-.375l8-10c.24-.3.286-.712.12-1.058z",}));el.appendChild(svg["path"]("M30.495 32h-14l2.159-3h10zm-3.073-4h-7.429l.768-1h6zm1.392-2h-10l2.159-3h6zm-1.787-4h-6l1.053-1h4zm.106-2h-6l2.159-3h2zm-1.787-4h-2l1.159-3z", {["d"]: "M30.495 32h-14l2.159-3h10zm-3.073-4h-7.429l.768-1h6zm1.392-2h-10l2.159-3h6zm-1.787-4h-6l1.053-1h4zm.106-2h-6l2.159-3h2zm-1.787-4h-2l1.159-3z",["fill"]: "#DD2E44",}));el.appendChild(svg["path"]("M14.008 32H5.169l.944-3h6.314zm-2.499-4h-4.69l.345-1h3.788zm.599-2H5.795l.944-3h3.789zm-1.686-4H6.633l.526-1h2.525zm-.213-2H6.421l.945-3h1.262zm-1.687-4H7.26l.313-3z", {["d"]: "M14.008 32H5.169l.944-3h6.314zm-2.499-4h-4.69l.345-1h3.788zm.599-2H5.795l.944-3h3.789zm-1.686-4H6.633l.526-1h2.525zm-.213-2H6.421l.945-3h1.262zm-1.687-4H7.26l.313-3z",["fill"]: "#BE1931",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};