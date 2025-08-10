export const validateEmail=(email)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email);
}
//a standard regex function to check if the email is in valid format or not