import { h, app } from "/assets/js/vendor/hyperapp.js";
import nestable from "/assets/js/vendor/nestable.js";
import { Route, Switch, location } from "/assets/js/vendor/router.js";
import { header } from "/assets/js/components/header.js";
import { navbar } from "/assets/js/components/navbar.js";
import { loader } from "/assets/js/components/loader.js";
import heart from "/assets/js/emojis/heart.js";

const node = document.body;

const state = {
	location: location.state,
	modules: {
		lessons: [],
		games: [],
	},
	scene: null,
	users: [],
	header: header.state,
	navbar: navbar.state,
};

const actions = {
	location: location.actions,
	loadModules: () => async (state, actions) => {
		const data = await fetch("/assets/data/modules.json")
			.then(res => res.json());
		actions.addModules(data);
	},
	addModules: data => (state, actions) => ({ modules: data }),
	setScene: scene => (state, actions) => ({ scene }),
	header: header.actions,
	navbar: navbar.actions,
};

const emoji = {
	heart: heart({ size: 1 }),
};

const footer = () => h("footer", {}, [
	"Made with ",
	emoji.heart,
	" by Ryan Ford ",
	h("span", {
		oncreate: el => { el.innerHTML = "&copy;"; },
		style: { fontSize: "1.2rem" },
	}),
	" 2020"
]);

const view = (state, actions) => {
	const views = {
		header: header.view(state.header, actions.header),
		navbar: navbar.view(state.navbar, actions.navbar),
	};

	return h("div", { id: "app" }, [
		views.header({
			users: state.users,
		}),
		h("div", {
			style: {
				display: "flex",
				width: "100%",
				height: "100%",
				padding: "0 0.625rem"
			}
		}, [
			views.navbar({
				modules: state.modules,
			}),
			h("div", {
				id: "display-area",
				style: { width: "100%", height: "100%", }
			}, Switch({}, [
				Route({ path: "/", render: () => h("div", {
					style: {
						width: "100%",
						height: "100%",
						display: "flex",
						["flex-direction"]: "column",
						["align-items"]: "center",
						["justify-content"]: "center",
					}
				}, [
					h("h3", {}, "Hello, World!")
				]) }),
				...Object.values(state.modules).reduce((acc, x) => acc.concat(x), []).map(mod => Route({
					path: mod.href,
					render: () => {
						if (!state.scene) {
							actions.setScene(loader);
							const displayArea = document.getElementById("display-area");
							import(`/assets/js/scenes/${mod.name.replace(" ", "-")}.js`)
								.then(res => res[mod.name.replace(" ", "_")])
								.then(res => {
									const scene = nestable(res.state, res.actions, res.view);
									actions.setScene(scene);
								})
								.catch(err => {
									console.error(err);
									actions.setScene("failed to load module");
									return "failed to load module";
								});
							return state.scene;
						} else {
							return state.scene;
						}
					},
				}))
			])),
		]),
		footer
	]);
};

window.main = app(state, actions, view, node);

location.subscribe(main.location);

main.loadModules();
