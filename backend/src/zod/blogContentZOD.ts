import { z } from 'zod';

const blogContentZOD = z.object({
    content: z.object({
        ui: z.object({
            navbar: z
                .object({
                    link: z.string(),
                    href: z.string(),
                })
                .array(),
            footer: z
                .object({
                    link: z.string(),
                    href: z.string(),
                })
                .array(),
        }),
        home: z.object({
            heroSlides: z
                .object({
                    imgUrl: z.string(),
                    title: z.string(),
                    text: z.string(),
                    button: z.string(),
                })
                .array(),
            cards: z
                .object({
                    imgUrl: z.string(),
                    title: z.string(),
                    text: z.string(),
                    button: z.string(),
                })
                .array(),
        }),
    }),
});

export default blogContentZOD;
