export const useKeyGen = () => {
	let curID = 1;
	const ids = new WeakMap();
	return {
		getKey: (object: Object): string => {
			if (ids.has(object)) {
				return ids.get(object);
			} else {
				const id = String(curID++);
				ids.set(object, id);
				return id;
			}
		},
	};
};
