export async function getEncryptedData(supabaseProjectId, apikey) {
    try {
        const response = await fetch(`https://${supabaseProjectId}.supabase.co/rest/v1/encrypted_data`, {
            headers: {
                apikey
            }
        });

        if (!response.ok) {
            console.log(response);
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}