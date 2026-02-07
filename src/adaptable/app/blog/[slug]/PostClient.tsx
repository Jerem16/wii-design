"use client";
import Blog from "../../../src/components/Blog/Blog";
import type { Section, Post, Author } from "../../../src/types/blog";

type Props = {
    post: Post;
    sections: Section[];
    authors: Author[];
};

export default function PostClient({ post, sections, authors }: Props) {
    return (
        <Blog data={{ sections, posts: [post], authors }} singlePost={post} />
    );
}
