function clone(o, ...src) {
	return Object.assign({}, ...src, o);
}

export { clone };
