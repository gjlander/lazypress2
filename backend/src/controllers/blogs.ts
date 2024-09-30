import { Request, Response } from 'express-serve-static-core';
import { isValidObjectId } from 'mongoose';

import ErrorResponse from '../utils/ErrorResponse.js';
import asyncHandler from '../utils/asyncHandler.ts';
import Blog from '../models/Blog.ts';

const getBlogs = asyncHandler(async (req: Request, res: Response) => {
    const blogs = await Blog.find().populate('users.user', 'clerkId email');

    if (!blogs.length) {
        throw new ErrorResponse('No blogs in database', 200);
    }
    res.json(blogs);
});

const createBlog = asyncHandler(async (req: Request, res: Response) => {
    const { content, dashboard, users, isPreview } = req.body;
    // if (!pages || !dashboard || !clerkUserId || !clerkUser)
    //     throw new ErrorResponse('Missing required fields', 400);

    const newBlog = await Blog.create({
        content,
        dashboard,
        users,
        isPreview,
    });

    await newBlog.populate('users.user');

    res.status(201).json(newBlog);
});

const getBlogById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);

    const post = await Blog.findById(id).populate(
        'users.user',
        'clerkId email'
    );

    if (!post)
        throw new ErrorResponse(`Post with id of ${id} doesn't exist`, 404);

    res.json(post);
});

const updateBlogContent = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    // const { userId } = req.auth;
    const { content } = req.body;

    // if (!userId) throw new ErrorResponse('Missing userId', 400);

    if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);

    // if (!pages || !dashboard || !clerkUser || !clerkUserId)
    //     throw new ErrorResponse(
    //         'All fields must be present to properly update document',
    //         400
    //     );
    // if (userId !== clerkUserId)
    //     throw new ErrorResponse(
    //         'You are not authorized to make changes to this site',
    //         403
    //     );

    const blogInDatabase = await Blog.findById(id).populate(
        'users.user',
        'clerkId email'
    );

    if (!blogInDatabase)
        throw new ErrorResponse(`Blog with id of ${id} doesn't exist`, 404);

    blogInDatabase.content = content;

    await blogInDatabase.save();

    res.json(blogInDatabase);
});
const updateBlogDashboard = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        // const { userId } = req.auth;
        const { dashboard } = req.body;

        // if (!userId) throw new ErrorResponse('Missing userId', 400);

        if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);

        // if (userId !== clerkUserId)
        //     throw new ErrorResponse(
        //         'You are not authorized to make changes to this site',
        //         403
        //     );

        const blogInDatabase = await Blog.findById(id).populate(
            'users.user',
            'clerkId email'
        );

        if (!blogInDatabase)
            throw new ErrorResponse(`Blog with id of ${id} doesn't exist`, 404);

        blogInDatabase.dashboard = dashboard;

        await blogInDatabase.save();

        res.json(blogInDatabase);
    }
);
const updateBlogUsers = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    // const { userId } = req.auth;
    const { users } = req.body;

    // if (!userId) throw new ErrorResponse('Missing userId', 400);

    if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);

    // if (userId !== clerkUserId)
    //     throw new ErrorResponse(
    //         'You are not authorized to make changes to this site',
    //         403
    //     );

    const blogInDatabase = await Blog.findById(id).populate(
        'users.user',
        'clerkId email'
    );

    if (!blogInDatabase)
        throw new ErrorResponse(`Blog with id of ${id} doesn't exist`, 404);

    blogInDatabase.dashboard = users;

    await blogInDatabase.save();

    res.json(blogInDatabase);
});

const getBlogsOfUser = asyncHandler(async (req: Request, res: Response) => {
    const { clerkId } = req.params;

    const allBlogs = await Blog.find().populate('users.user', 'clerkId');

    // const userBlogs = allBlogs.filter(blog => blog.users.user.clerkId === clerkId)

    // res.json(userBlogs);
});

// const getClerkAuth = async (req, res) => {
//     const { userId } = req.auth;
//     res.json(userId);
// };
// const clerkPostTest = async (req, res) => {
//     // const { pages, dashboard, clerkUser, clerkUserId } = req.body;
//     res.json(req.body);
// };

export {
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
    // migrateMeals,
};
