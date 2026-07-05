import googleReviewContent from "@/content/reviews/google.json";

export type GoogleReview = {
  name: string;
  review: string;
  color: "blue" | "red" | "yellow" | "green";
};

export const googleReviews = googleReviewContent.reviews as GoogleReview[];
