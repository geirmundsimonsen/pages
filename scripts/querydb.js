function redirectOnError() {
    window.location.replace('/error.html');
}

export async function getEncryptedData(supabaseProjectId, apikey) {
    try {
        const response = await fetch(`https://${supabaseProjectId}.supabase.co/rest/v1/encrypted_data`, {
            headers: {
                apikey
            }
        });

        if (!response.ok) {
            console.log(response);
            redirectOnError();
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        redirectOnError();
    }
}