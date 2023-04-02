import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
	uri: "https://sib-reactjs-erick.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"4EgFYhl505xTZr70UC1k3vTfqgVkLyq973cfR9Tdwujt793D2NGk32ba6OkH7TqD",
	},
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: "wss://sib-reactjs-erick.hasura.app/v1/graphql",
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"4EgFYhl505xTZr70UC1k3vTfqgVkLyq973cfR9Tdwujt793D2NGk32ba6OkH7TqD",
			},
		},
	})
);

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default client;
