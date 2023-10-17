/**
 * @param {string} ip
 */
export const fetchIPGeo = async (ip) => {
	const response = await fetch(
		`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=8.8.8.8`
	);

	return response.json();
};
