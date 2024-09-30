import { z } from 'zod';

const blogZOD = z.object({
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
    dashboard: z.object({
        blogTitle: z.string(),
        deployed: z.boolean(),
        siteUrl: z.string().optional(),
        previewUrl: z.string().optional(),
    }),
    users: z
        .object({
            user: z.string(),
            role: z.enum(['owner', 'admin', 'collaborator', 'viewer']),
        })
        .array(),
    isPreview: z.boolean(),
});

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

const blogDashboardZOD = z.object({
    dashboard: z.object({
        blogTitle: z.string(),
        deployed: z.boolean(),
        siteUrl: z.string().optional(),
        previewUrl: z.string().optional(),
    }),
});
const blogUsersZOD = z.object({
    users: z
        .object({
            user: z.string(),
            role: z.enum(['owner', 'admin', 'collaborator', 'viewer']),
        })
        .array(),
});

export { blogZOD, blogContentZOD, blogDashboardZOD, blogUsersZOD };
