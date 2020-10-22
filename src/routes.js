import React,{ lazy } from 'react';
const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import ('./pages/NotFound/NotFoundPage'));
const ProductListPage = lazy( () => import('./pages/ProductListPage/ProductListPage'));
const ProductActionPage = lazy( () => import ('./pages/ProductActionPage/ProductActionPage'));
const TaskPage = lazy ( () => import ('./pages/Task/TaskPage'));

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/reactjs',
        exact : false,
        main : () => <HomePage />
    },
    {
        path : '/product-list',
        exact : false,
        main : () => <ProductListPage />
    },
    {
        path : '/product/add',
        exact : false,
        main : ({history}) => <ProductActionPage history = {history} />
    },
    {
        path : '/product/edit/:id',
        exact : false,
        main : ({match,history}) => <ProductActionPage match = { match } history = {history}/>
    },
    {
        path : '/task-list/',
        exact : false,
        main : ({match,history}) => <TaskPage match = { match } history = {history}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage />
    }
];
export default routes;