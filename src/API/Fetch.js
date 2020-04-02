export const fetchJSON = async url => {
    try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        console.log(responseJSON);
        return responseJSON;
    } catch (error) {
        console.log(error);
        if (error.response) {
            console.log(error.response);
            return error.response;
        }
    }
};
