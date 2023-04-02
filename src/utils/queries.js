import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query GetProducts($limit: Int) {
		product(limit: $limit) {
			id
			image
			name
			price
			freshness
			description
			category
		}
	}
`;

export const GET_PRODUCT_COMMENTS = gql`
	query GetProductComments($product_id: Int!) {
		comment(where: { product_id: { _eq: $product_id } }) {
			id
			content
			created_at
		}
	}
`;
