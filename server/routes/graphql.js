import { makeExecutableSchema,
         addMockFunctionsToSchema,
       } from 'graphql-tools';




// const books = [
// 	{
// 		title: 'title',
// 		author: 'author',
// 	},
// 	{
//     title: "Harry Potter and the Sorcerer's stone",
//     author: 'J.K. Rowling',
//   },
//   {
//     title: 'Jurassic Park',
//     author: 'Michael Crichton',
//   },
// ];


// const typeDefs = `
// 	type Query {
// 		books: [Book]
// 	}

// 	type Book {
// 		title: String,
// 		author: String,
// 	}
// `;

// const resolvers = {
// 	Query: { books: () => books },
// };


/* Actual stuffs */


const typeDefs = `
	type Query {
		business: [Business]
	}

	type Business {
		id: String!
		name: String
		neighborhood: String
		address: String
		city: String
		state: String
		postal_code: String
		logitude: Float
		latitude: Float

		# photos of the business
		photos: [Photo]
	}

	type Photo {
		id: String!
		caption: String
		label: String
		date: String

		# photo owner
		user: [User]
	}

	type User {
		id: String!
		name: String
		review_count: Int
		fans: Int
	}

	schema {
		query: Query
	}
`;

const resolvers = {
	Query: {
		business: () => {
			// return business
		}
	}
}

const schema = makeExecutableSchema({ typeDefs });

/* 一一一一一一一一一一一一一 */

export { schema };