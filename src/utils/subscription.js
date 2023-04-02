import { gql } from "@apollo/client";

export const SUBS_PRODUCTS = gql`
	subscription SubscriptionProducts {
		product {
			image
			id
			name
			price
			freshness
			description
			category
		}
	}
`;
