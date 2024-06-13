const baseUrl = process.env.NODE_ENV === "production" 
? 'https://main--aspl-test.netlify.app/' 
: 'http://localhost:3000';

export const crmUrl = 'https://crm.ashapurasoftech.com'

export default baseUrl;     