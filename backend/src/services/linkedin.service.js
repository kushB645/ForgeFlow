import crypto from "crypto";

const generateAuthUrl = () => {

    const authUrl = new URL("https://www.linkedin.com/oauth/v2/authorization")

    // After the user approves my app, send me an authorization code.

    authUrl.searchParams.append("response_type", "code");

    //this will create something like that https://www.linkedin.com/oauth/v2/authorization?response_type=code

    authUrl.searchParams.append("client_id", process.env.LINKEDIN_CLIENT_ID)

    authUrl.searchParams.append("redirect_uri", process.env.LINKEDIN_REDIRECT_URI)

    authUrl.searchParams.append("scope", process.env.LINKEDIN_SCOPE)

    //generate random string

    const state = crypto.randomBytes(16).toString("hex");

    authUrl.searchParams.append("state", state);

    return authUrl.toString();
    
}

export default generateAuthUrl;