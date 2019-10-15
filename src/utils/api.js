import Cookies from 'universal-cookie';
import axios from 'axios';
import config from './config';
const cookies = new Cookies();
class Api {
    constructor() {
        this.baseUrl = config.baseUrl;
        this.accessToken = cookies.get('accessToken') || null;
        this.endPoints = {
            register: {
                endPoint: '/api/v1/auth/register',
                method: 'POST',
            },
            login: {
                endPoint: '/api/v1/auth/login',
                method: 'POST',
            },
            authenticate: {
                endPoint: '/api/v1/auth',
                method: 'GET',
            },
            uploadFile: {
                endPoint: '/api/v1/video/upload',
                method: 'POST'
            },
            createVideo: {
                endPoint: '/api/v1/video/create',
                method: 'POST'
            },
            getAllVideos: {
                endPoint: '/api/v1/video',
                method: 'GET'
            }
        };
    }
    async call(endPoint, reqBody, headers = {}) {
        try {
            console.log("Endpoint: ", endPoint);
            const e = this.endPoints[endPoint];
            const url = this.baseUrl + e.endPoint;
            headers['content-type'] = headers['content-type'] || 'application/json';
            headers.accesstoken = this.accessToken || null;
            console.log("reqBody: ", reqBody);
            console.log("headers: ", headers);
            const functionParams = [url];
            if(reqBody) {
                functionParams.push(reqBody);
            };
            functionParams.push({headers});
            const responseData = await axios[e.method.toLowerCase()].apply(null, functionParams);
            console.log("responseData: ", responseData);
            const response = responseData.data;
            console.log("response: ", response);
            return {
                success: true,
                response
            };
        } catch(err) {
            console.log("Error in api call: ", err);
            return {
                success: false,
                errorMessage: err.message
            };
        }
    }
    async login(email, password) {
        try {
            const {success, response} = await this.call('login', {email, password});
            if(success) {
                cookies.set('accessToken', response.accessToken, {path: '/'});
                this.accessToken = response.accessToken;
            }
            return {success, response};
        } catch(err) {
            console.log("Error in logging in: ", err);
            return {
                success: false, 
                response: "There was some issue in logging in, Please try after some time"
            };
        }
    }
    async authenticate() {
        try {
            const response = await this.call('authenticate');
            return response;
        } catch(err) {
            console.log("Error in authenticating user: ", err);
            this.logout()
            return {
                success: false,
                errorMessage: 'Please login again'
            };
        }
    }
    
	logout() {
        cookies.remove('accessToken', {path: '/'});
        this.accessToken = null;
        return true;
	}
}

export default new Api();