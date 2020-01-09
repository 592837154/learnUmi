export default{
    routes: [
        {
            path:'/',
            component: '../layouts/index',
            routes: [
                {
                    path: '/',
                    component: './index',
                },
                {
                    path: '/login',
                    component: './login',
                }
            ]
        }
    ]
}