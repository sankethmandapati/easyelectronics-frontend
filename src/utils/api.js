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
            uploadVideo: {
                endPoint: '/api/v1/video/uploadVideo',
                method: 'POST'
            },
            uploadThumbnail: {
                endPoint: '/api/v1/video/uploadThumbnail',
                method: 'POST'
            },
            createVideo: {
                endPoint: '/api/v1/video/create',
                method: 'POST'
            },
            getAllVideos: {
                endPoint: '/api/v1/video',
                method: 'GET'
            },
            getVideoById: {
                endPoint: '/api/v1/video/:id',
                method: 'GET'
            },
            streamVideo: {
                endPoint: '/api/v1/video/streamVideo/:id',
                method: 'GET'
            },
            getCategories: {
                endPoint: '/api/v1/categories',
                method: 'GET'
            },
            getCategoryById: {
                endPoint: '/api/v1/categories/:id',
                method: 'GET'
            },
            createCategory: {
                endPoint: '/api/v1/categories',
                method: 'POST'
            },
            updateCategory: {
                endPoint: '/api/v1/categories/:id',
                method: 'PUT'
            },
            removeCategory: {
                endPoint: '/api/v1/categories/:id',
                method: 'DELETE'
            },
            getSubscriptionPlans:  {
                endPoint: '/api/v1/subscriptionPlans',
                method: 'GET'
            },
            getSubscriptionPlanById: {
                endPoint: '/api/v1/subscriptionPlans/:id',
                method: 'GET'
            },
            createSubscriptionPlan: {
                endPoint: '/api/v1/subscriptionPlans',
                method: 'POST'
            },
            createTransaction: {
                endPoint: '/api/v1/transaction',
                method: 'POST'
            },
            createSubscription: {
                endPoint: '/api/v1/subscriptions',
                method: 'POST'
            },
            getPendingRequests: {
                endPoint: '/api/v1/subscriptions/getPendingRequests',
                method: 'GET'
            },
            getAllSubscriptions: {
                endPoint: '/api/v1/subscriptions',
                method: 'GET'
            },
            approveSubscriptions: {
                endPoint: '/api/v1/subscriptions/approve/:id',
                method: 'PUT'
            },
            rejectSubscriptions: {
                endPoint: '/api/v1/subscriptions/reject/:id',
                method: 'PUT'
            },
            createPaymentOption: {
                endPoint: '/api/v1/accountDetails',
                method: 'POST'
            }
        };
    }
    async call(endPoint, payload, options) {
        try {
            const {reqBody, params, query} = payload || {};
            const e = this.endPoints[endPoint];
            let url = this.baseUrl + e.endPoint;
            if(params) {
                Object.entries(params).forEach(([k, v]) => {
                    url = url.replace(`:${k}`, v);
                });
            }
            if(query) {
                url = Object.entries(params).reduce((finalUrl, [k, v], n) => {
                    if(n === 0)
                        return `${finalUrl}?${k}=${v}`;
                    return `${finalUrl}&${k}=${v}`;
                }, url);
            }
            if(!options) {
                options = {
                    headers: {
                        'content-type': 'application/json',
                        'accesstoken': this.accessToken
                    }
                };
            }
            options.headers = options.headers || {};
            options.headers.accesstoken = this.accessToken || null;
            const functionParams = [url];
            if(reqBody) {
                functionParams.push(reqBody);
            };
            functionParams.push(options);
            const responseData = await axios[e.method.toLowerCase()].apply(null, functionParams);
            const response = responseData.data;
            return response;
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
            const reqBody = {email, password};
            const {success, response} = await this.call('login', {reqBody});
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