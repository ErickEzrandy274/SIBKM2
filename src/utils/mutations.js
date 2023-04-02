import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
	mutation DeleteProduct($id: Int!) {
		delete_product_by_pk(id: $id) {
			id
		}
	}
`;

export const UPDATE_PRODUCT = gql`
	mutation UpdateProduct(
		$id: Int!
		$name: String!
		$description: String!
		$price: String!
	) {
		update_product_by_pk(
			pk_columns: { id: $id }
			_set: { name: $name, description: $description, price: $price }
		) {
			id
			price
			name
			description
		}
	}
`;

export const ADD_PRODUCT = gql`
	mutation AddProduct($object: product_insert_input!) {
		insert_product_one(object: $object) {
			price
			name
			image
			id
			freshness
			description
			category
		}
	}
`;

export const ADD_NEW_COMMENT = gql`
	mutation AddNewComment($content: String!, $id: String!, $product_id: Int!) {
		insert_comment_one(
			object: { content: $content, id: $id, product_id: $product_id }
		) {
			id
			content
			created_at
			product_id
		}
	}
`;
