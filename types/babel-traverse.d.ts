declare module "@babel/traverse" {
    type Visitor = (path: { node: unknown }) => void;
    export default function traverse(
        ast: unknown,
        visitors: Record<string, Visitor>
    ): void;
}
