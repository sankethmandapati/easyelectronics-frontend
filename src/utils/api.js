import Cookies from 'universal-cookie';
import axios from 'axios';
import config from './config';
const cookies = new Cookies();

class Api {
    constructor() {
        this.accessToken = cookies.get('accessToken') || null;
        this.axios = {};
        this.setupAxios();
    };
    setupAxios() {
        this.axios = axios.create({
            baseURL: config.baseUrl
        });
        this.axios.interceptors.request.use(req => {
            req.headers.accesstoken = this.accessToken || null;
            if(!req.headers['content-type']) {
                req.headers['content-type'] = 'application/json';
            }
            return req;
        });
    }
    encodeParams(url, params) {
        if(params) {
            Object.entries(params).forEach(([k, v]) => {
                url = url.replace(`:${k}`, v);
            });
        }
        return url;
    }
    encodeQuery(query) {
        if(query) {
            return Object.entries(query).reduce((queryString, [k, v], n) => {
                return `${ queryString }${(n === 0) ? '?' : '&'}${k}=${v}`;
            }, '');
        }
        return '';
    }
    async call(endPoint, payload, options = {}) {
        try {
            const { reqBody, params, query } = payload || {};
            const e = config.endPoints[endPoint];
            console.log("e: ", e);
            let url = this.encodeParams(e.endPoint, params) + this.encodeQuery(query);
            const functionParams = [url];
            if(reqBody) {
                functionParams.push(reqBody);
            };
            functionParams.push(options);
            const { data } = await this.axios[e.method.toLowerCase()].apply(null, functionParams);
            return data;
        } catch(err) {
            console.log("Error in api call: ", err);
            if(err.response && err.response.data)
                return err.response.data;
            return {
                success: false,
                errorMessage: "Unexpected error occured while gathering required data, please try again"
            };
        }
    }
    async login(email, password) {
        try {
            const reqBody = { email, password };
            const { success, response } = await this.call('login', { reqBody });
            if(success) {
                cookies.set('accessToken', response.accessToken, { path: '/' });
                this.accessToken = response.accessToken;
            }
            return { success, response };
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
            console.log("RESPOOONSE: ", response);
            return response;
        } catch(err) {
            console.log("Error in authenticating user: ", err);
            this.logout();
            return {
                success: false,
                errorMessage: 'Please login again'
            };
        }
    }
    
	logout() {
        cookies.remove('accessToken', { path: '/' });
        this.accessToken = null;
        return true;
	}
}

export default new Api();
