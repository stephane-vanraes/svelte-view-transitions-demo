import data from '$lib/data.json'
export const load = async ({ params }) => {
	const fjell = data.find(f => f.name.toLowerCase() == params.slug)
	
	return {
		fjell
	}
};
