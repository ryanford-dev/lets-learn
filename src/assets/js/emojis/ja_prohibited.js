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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#DD2E44",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M7.106 10.233c-.468 0-.728-.338-.728-.858 0-.546.26-.832.728-.832h4.42v-1.82c0-.468.364-.728.91-.728s.858.26.858.728v1.82h3.094c.468 0 .727.286.727.806 0 .546-.26.884-.727.884H13.84c.806 1.144 1.872 2.106 2.886 2.756.286.182.416.442.416.702 0 .182-.078.364-.182.546-.182.208-.416.312-.676.312-.182 0-.39-.078-.598-.208-.936-.727-2.158-2.132-2.678-3.25.156.78.286 1.768.286 2.47v2.262c0 .442-.312.702-.858.702s-.91-.26-.91-.702v-2.262c0-.676.104-1.716.286-2.418-.884 1.846-2.834 3.77-4.446 4.888-.182.13-.39.208-.598.208-.26 0-.52-.13-.702-.364-.156-.182-.208-.39-.208-.572 0-.286.13-.572.39-.728 1.742-1.066 3.432-2.574 4.602-4.342H7.106zm-.052 12.715c-.442 0-.676-.39-.676-.884s.234-.884.676-.884h21.762c.442 0 .677.39.677.884s-.234.884-.677.884h-9.75v4.706c0 1.716-.832 2.314-3.068 2.314-.962 0-1.794-.104-2.444-.26-.442-.104-.728-.442-.728-.858 0-.103 0-.182.052-.286.13-.468.468-.702.832-.702.052 0 .13 0 .208.026.598.156 1.222.26 1.872.26 1.014 0 1.222-.182 1.222-.858v-4.342H7.054zm6.396 1.821c0 .182-.078.416-.286.65-1.118 1.325-2.99 2.938-4.68 3.926-.182.104-.364.156-.572.156-.338 0-.676-.156-.884-.494-.104-.183-.156-.338-.156-.521 0-.311.182-.598.494-.78 1.508-.858 3.276-2.262 4.264-3.405.208-.261.468-.391.78-.391.182 0 .364.052.572.156.287.157.468.416.468.703zm-3.588-5.565c-.442 0-.65-.417-.65-.884 0-.442.208-.884.65-.884h16.12c.442 0 .65.442.65.884 0 .468-.208.884-.65.884H9.862zm8.841-8.971c-.442 0-.703-.337-.703-.858 0-.546.26-.832.702-.832h3.64V6.75c0-.468.364-.702.91-.702s.858.234.858.702v1.794h4.653c.468 0 .729.286.729.806 0 .546-.261.884-.729.884h-4.004c1.3 1.742 3.198 3.12 4.941 4.082.286.156.441.468.441.78 0 .182-.052.39-.155.546-.183.338-.494.468-.78.468-.182 0-.364-.052-.546-.156-1.898-1.17-3.614-2.73-4.837-4.81.156.754.287 1.716.287 2.47v2.236c0 .442-.339.702-.858.702-.546 0-.91-.26-.91-.702v-2.34c0-.754.13-1.612.26-2.34-.937 1.82-2.418 3.354-4.004 4.394-.182.13-.39.208-.572.208-.234 0-.468-.104-.65-.364-.104-.156-.156-.338-.156-.494 0-.286.156-.546.39-.702 1.638-.936 3.042-2.366 4.082-3.978h-2.989zm4.783 13.704c.312 0 .599.13.807.311 1.066 1.145 2.834 2.523 4.264 3.225.391.182.624.494.624.858 0 .182-.052.363-.182.546-.208.338-.521.519-.884.519-.156 0-.338-.052-.521-.13-1.69-.858-3.64-2.444-4.914-3.9-.13-.156-.208-.363-.208-.572 0-.26.13-.546.441-.701.184-.105.392-.156.573-.156z", {["fill"]: "#FFF",["d"]: "M7.106 10.233c-.468 0-.728-.338-.728-.858 0-.546.26-.832.728-.832h4.42v-1.82c0-.468.364-.728.91-.728s.858.26.858.728v1.82h3.094c.468 0 .727.286.727.806 0 .546-.26.884-.727.884H13.84c.806 1.144 1.872 2.106 2.886 2.756.286.182.416.442.416.702 0 .182-.078.364-.182.546-.182.208-.416.312-.676.312-.182 0-.39-.078-.598-.208-.936-.727-2.158-2.132-2.678-3.25.156.78.286 1.768.286 2.47v2.262c0 .442-.312.702-.858.702s-.91-.26-.91-.702v-2.262c0-.676.104-1.716.286-2.418-.884 1.846-2.834 3.77-4.446 4.888-.182.13-.39.208-.598.208-.26 0-.52-.13-.702-.364-.156-.182-.208-.39-.208-.572 0-.286.13-.572.39-.728 1.742-1.066 3.432-2.574 4.602-4.342H7.106zm-.052 12.715c-.442 0-.676-.39-.676-.884s.234-.884.676-.884h21.762c.442 0 .677.39.677.884s-.234.884-.677.884h-9.75v4.706c0 1.716-.832 2.314-3.068 2.314-.962 0-1.794-.104-2.444-.26-.442-.104-.728-.442-.728-.858 0-.103 0-.182.052-.286.13-.468.468-.702.832-.702.052 0 .13 0 .208.026.598.156 1.222.26 1.872.26 1.014 0 1.222-.182 1.222-.858v-4.342H7.054zm6.396 1.821c0 .182-.078.416-.286.65-1.118 1.325-2.99 2.938-4.68 3.926-.182.104-.364.156-.572.156-.338 0-.676-.156-.884-.494-.104-.183-.156-.338-.156-.521 0-.311.182-.598.494-.78 1.508-.858 3.276-2.262 4.264-3.405.208-.261.468-.391.78-.391.182 0 .364.052.572.156.287.157.468.416.468.703zm-3.588-5.565c-.442 0-.65-.417-.65-.884 0-.442.208-.884.65-.884h16.12c.442 0 .65.442.65.884 0 .468-.208.884-.65.884H9.862zm8.841-8.971c-.442 0-.703-.337-.703-.858 0-.546.26-.832.702-.832h3.64V6.75c0-.468.364-.702.91-.702s.858.234.858.702v1.794h4.653c.468 0 .729.286.729.806 0 .546-.261.884-.729.884h-4.004c1.3 1.742 3.198 3.12 4.941 4.082.286.156.441.468.441.78 0 .182-.052.39-.155.546-.183.338-.494.468-.78.468-.182 0-.364-.052-.546-.156-1.898-1.17-3.614-2.73-4.837-4.81.156.754.287 1.716.287 2.47v2.236c0 .442-.339.702-.858.702-.546 0-.91-.26-.91-.702v-2.34c0-.754.13-1.612.26-2.34-.937 1.82-2.418 3.354-4.004 4.394-.182.13-.39.208-.572.208-.234 0-.468-.104-.65-.364-.104-.156-.156-.338-.156-.494 0-.286.156-.546.39-.702 1.638-.936 3.042-2.366 4.082-3.978h-2.989zm4.783 13.704c.312 0 .599.13.807.311 1.066 1.145 2.834 2.523 4.264 3.225.391.182.624.494.624.858 0 .182-.052.363-.182.546-.208.338-.521.519-.884.519-.156 0-.338-.052-.521-.13-1.69-.858-3.64-2.444-4.914-3.9-.13-.156-.208-.363-.208-.572 0-.26.13-.546.441-.701.184-.105.392-.156.573-.156z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};