export function setSupabaseProjectId(projectId) {
    localStorage.setItem('supabaseProjectId', projectId);
}

export function setApiKey(apiKey) {
    localStorage.setItem('supabaseApiKey', apiKey);
}

export function getSupabaseProjectId() {
    return localStorage.getItem('supabaseProjectId');
}

export function getApiKey() {
    return localStorage.getItem('supabaseApiKey');
}

export function clearCredentials() {
    localStorage.removeItem('supabaseProjectId');
    localStorage.removeItem('supabaseApiKey');
}