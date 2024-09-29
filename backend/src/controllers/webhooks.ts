import { Request, Response } from 'express-serve-static-core';
import { Webhook } from 'svix';

import User from '../models/User.ts';
import ErrorResponse from '../utils/ErrorResponse.ts';
import chalkLog from '../utils/chalkLog.ts';

interface WebhookEvent {
    data: any;
    type: string;
}

const clerkWebhook = async (req: Request, res: Response): Promise<void> => {
    try {
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
        // console.log('webHook event type:', eventType);

        let message = 'Nothing happened';

        if (eventType === 'user.created') {
            // console.log(`User ${id} was ${eventType}`);

            const email = info.email_addresses[0].email_address;
            const username = info.username;
            const firstName = info.first_name;
            const lastName = info.last_name;

            await User.create({
                clerkId: id,
                email,
                username,
                firstName,
                lastName,
            });

            message = `${username} saved to database`;
            // const newClerkUser = await ClerkUser.find({
            //     clerkId: id,
            // });
            // const { _id, clerkId } = newClerkUser[0];
            // console.log(_id, clerkId);

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
            //     clerkId,
            //     isPreview: true,
            // });
            // console.log(previewBlog);
        }
        if (eventType === 'user.updated') {
            // console.log(`User ${id} was ${eventType}`);

            const email = info.email_addresses[0].email_address;
            const username = info.username;
            const firstName = info.first_name;
            const lastName = info.last_name;

            const found = await User.findOne({ clerkId: id });

            if (!found) {
                await User.create({
                    clerkId: id,
                    email,
                    username,
                    firstName,
                    lastName,
                });

                message = `${username} was not found, so an entry was created`;
            } else {
                found.email = email;
                found.username = username;
                found.firstName = firstName;
                found.lastName = lastName;

                await found.save();
                message = `${username} updated successfully`;
            }
        }
        if (eventType === 'user.deleted') {
            // chalkLog('green', `User ${id} was ${eventType}`);

            const found = await User.findOneAndDelete({ clerkId: id });
            // await BlogModel.findOneAndDelete({ clerkId: id });

            if (!found) {
                message = `User ${id} was not found, there may be an error with the webhooks.`;
            } else {
                message = `User ${id} deleted successfully`;
            }
        }

        chalkLog('green', message);
        res.status(200).json({
            success: true,
            message: message,
        });
    } catch (err) {
        chalkLog('red', err);

        res.status(400).json({
            success: false,
            message: err,
        });
    }
};

export { clerkWebhook };
