import express from 'express';
// import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

import validateZOD from '../middlewares/validateZOD.ts';
import {
    blogZOD,
    blogContentZOD,
    blogDashboardZOD,
    blogUsersZOD,
} from '../zod/blogZOD.ts';

import {
    getBlogs,
    createBlog,
    getBlogById,
    updateBlogContent,
    updateBlogDashboard,
    updateBlogUsers,
    // findBlogsFromUser,
    // getBlogPages,
    // addBlogPage,
    // deleteBlogPage,
    // addHero,
    // deleteHero,
    // singlePage,
    // editBlogPages,
    // getClerkAuth,
    // clerkPostTest,
} from '../controllers/blogs.ts';

const blogRouter = express.Router();

blogRouter.use(express.json());

blogRouter.route('/').get(getBlogs).post(validateZOD(blogZOD), createBlog);

blogRouter.route('/:id').get(getBlogById);
// .put(/*ClerkExpressRequireAuth()*/ validateZOD(blogZOD), updateBlog);

blogRouter
    .route('/content/:id')
    .put(validateZOD(blogContentZOD), updateBlogContent);

blogRouter
    .route('/dashboard/:id')
    .put(validateZOD(blogDashboardZOD), updateBlogDashboard);

blogRouter.route('/users/:id').put(validateZOD(blogUsersZOD), updateBlogUsers);

// //updated to get based on clerkId
// blogRouter.route('/user/:id').get(findBlogsFromUser);
// blogRouter
//     .route('/singlepage/:blogId/:pageId')
//     .get(singlePage)
//     // .put(editBlogPages)
//     .delete(deleteBlogPage);

// //ended up needing them!
// blogRouter
//     .route('/blogPages/:id')
//     .get(getBlogPages)
//     .post(addBlogPage)
//     .put(editBlogPages);
// // .delete(deleteBlogPage);
// blogRouter.route('/hero/:id').post(addHero).delete(deleteHero);

// blogRouter
//     .route('/protected/endpoint')
//     .get(ClerkExpressRequireAuth(), getClerkAuth)
//     .post(ClerkExpressRequireAuth(), clerkPostTest);

export default blogRouter;
