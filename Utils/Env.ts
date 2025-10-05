

// Export a simple ENV object with fallbacks and a small validation helper
export const ENV = {
    baseURL: process.env.AUT || '',
    useremail: process.env.USERID || '',
    userpassword: process.env.PASSWORD || ''
};

