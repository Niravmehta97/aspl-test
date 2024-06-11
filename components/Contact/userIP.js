export const getIPAddress = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
        
        return ipAddress;
      } catch (error) {
        console.error('Error getting IP address:', error);
        return null;
      }
}

export const getCountryName = async (ipAddress) => {
    try {
      const response = await fetch(`https://ipinfo.io/${ipAddress}/json?token=030726fc951892`);
      const data = await response.json();
      const countryName = data.country;
      return countryName;
    } catch (error) {
      console.error('Error getting country name:', error);
      return null;
    }
  }
  