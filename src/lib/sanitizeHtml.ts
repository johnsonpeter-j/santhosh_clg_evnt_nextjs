// import DOMPurify from "dompurify";
import DOMPurify from "isomorphic-dompurify";

export const sanitizeHtml = (html: string) => {
    if (typeof window !== "undefined") {
        return DOMPurify.sanitize(html);
    }
    return html; // Fallback on server
};
