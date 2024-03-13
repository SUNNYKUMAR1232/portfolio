
const authenticator = async () => {
    try {

        // You can also pass headers and validate the request source in the backend, or you can use headers for any other use case.
        const headers = {
          'CustomHeader': 'CustomValue'
        };

        const response = await fetch('server_endpoint', {
            headers
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};