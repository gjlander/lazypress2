import { Request, Response } from 'express-serve-static-core';
import { Webhook } from 'svix';

import ErrorResponse from '../utils/ErrorResponse.ts';
interface WebhookEvent {
    data: any;
    type: string;
}

const clerkWebhook = async (req: Request, res: Response): Promise<void> => {
    try {
        // const payloadString = req.body.toString();
        // const svixHeaders = req.headers;

        if (!process.env.WEBHOOK_SECRET)
            throw new ErrorResponse(
                'Webhook key is missing, you are unauthorized.',
                401
            );

        const headers = req.headers;
        const payload = req.body;

        const svix_id = headers['svix-id'] as string;
        const svix_timestamp = headers['svix-timestamp'] as string;
        const svix_signature = headers['svix-signature'] as string;

        if (!svix_id || !svix_timestamp || !svix_signature) {
            throw new ErrorResponse('Error occurred -- no svix headers', 400);
        }

        const wh = new Webhook(process.env.WEBHOOK_SECRET);

        let evt: WebhookEvent;

        evt = wh.verify(payload, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent;

        const { id, ...info } = evt.data;
        // Handle the webhooks
        const eventType = evt.type;
        console.log('webHook event type:', eventType);
        // console.log(info);
        if (eventType === 'user.created') {
            console.log(`User ${id} was ${eventType}`);

            const firstName = info.first_name;
            const lastName = info.last_name;
            const username = info.username;

            // await ClerkUser.create({
            //     clerkUserId: id,
            //     firstName,
            //     lastName,
            //     username,
            //     previewPage: {
            //         pages: {
            //             home: {
            //                 navBar: [{ menuItem: 'Change Me' }],
            //                 hero: [
            //                     {
            //                         imgUrl: 'https://nextui.org/images/fruit-8.jpeg',
            //                         title: 'Add a title here',
            //                         text: 'And a bit of descriptive text here...',
            //                         button: 'Click Me',
            //                     },
            //                 ],
            //                 cards: [
            //                     {
            //                         imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg',
            //                         title: 'A delicious recipe here',
            //                         text: 'Simply delicious',
            //                         button: 'To Recipe',
            //                     },
            //                 ],
            //                 footer: [
            //                     {
            //                         footerItem:
            //                             'You can customize the footer too.',
            //                     },
            //                 ],
            //             },
            //         },
            //     },
            // });
            console.log(`${username} saved to database`);
            // const newClerkUser = await ClerkUser.find({
            //     clerkUserId: id,
            // });
            // const { _id, clerkUserId } = newClerkUser[0];
            // console.log(_id, clerkUserId);

            // const previewBlog = await BlogModel.create({
            //     pages: {
            //         home: {
            //             navBar: [{ menuItem: 'Change Me' }],
            //             hero: [
            //                 {
            //                     imgUrl: 'https://nextui.org/images/fruit-8.jpeg',
            //                     title: 'Add a title here',
            //                     text: 'And a bit of descriptive text here...',
            //                     button: 'Click Me',
            //                 },
            //             ],
            //             cards: [
            //                 {
            //                     imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg',
            //                     title: 'A delicious recipe here',
            //                     text: 'Simply delicious',
            //                     button: 'To Recipe',
            //                 },
            //             ],
            //             footer: [
            //                 {
            //                     footerItem: 'You can customize the footer too.',
            //                 },
            //             ],
            //         },
            //     },
            //     dashboard: {
            //         blogTitle: 'Preview Page',
            //     },
            //     clerkUser: _id,
            //     clerkUserId,
            //     isPreview: true,
            // });
            // console.log(previewBlog);
        }
        if (eventType === 'user.updated') {
            console.log(`User ${id} was ${eventType}`);

            const firstName = info.first_name;
            const lastName = info.last_name;
            const username = info.username;

            // await ClerkUser.findOneAndUpdate(
            //     { clerkUserId: id },
            //     {
            //         firstName,
            //         lastName,
            //         username,
            //     }
            // );
            console.log(`${username} updated successfully`);
        }
        if (eventType === 'user.deleted') {
            console.log(`User ${id} was ${eventType}`);

            // await ClerkUser.findOneAndDelete({ clerkUserId: id });
            // await BlogModel.findOneAndDelete({ clerkUserId: id });
            console.log(`User deleted successfully`);
        }
        res.status(200).json({
            success: true,
            message: 'Webhook received',
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err,
        });
    }
};

export { clerkWebhook };
