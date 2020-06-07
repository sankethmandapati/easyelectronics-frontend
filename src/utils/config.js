const urls = {
    dev: 'http://127.0.0.1:4000',
    prod: 'http://3.95.150.25:4000'
};
const endPoints = {
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
    },
    getAllPaymentOptions: {
        endPoint: '/api/v1/accountDetails',
        method: 'GET'
    },
    getPaymentOptionById: {
        endPoint: '/api/v1/accountDetails/:id',
        method: 'GET'
    }
};
const env = "dev";
module.exports = {
    baseUrl: urls[env],
    endPoints
};