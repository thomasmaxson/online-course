const { gql, default: request } = require( "graphql-request" );

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/' + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + '/master';

const getAllCourses = async () => { 
	const query = gql`
		query AllCourses {
			courseLists {
				id
				slug
				name
				description
				author
				banner {
					url
				}
				publishedAt
				updatedAt
				paidCourse
				demoUrl
				sourceCodeURL
				youTubeUrl
				tags
				chapters {
					... on Chapter {
						id
						name
						shortDesc
						video {
							url
						}
					}
				}
			}
		}`

	const result = await request( MASTER_URL, query );

	return result;
}

export default { 
	getAllCourses
}