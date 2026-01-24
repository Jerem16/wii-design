import { Amplify } from "aws-amplify";
import amplifyOutput from "./amplify_outputs.json";

Amplify.configure({
    aws_project_region: amplifyOutput.data.aws_region,
    aws_appsync_graphqlEndpoint: amplifyOutput.data.url,
    aws_appsync_region: amplifyOutput.data.aws_region,
    aws_appsync_authenticationType:
        amplifyOutput.data.default_authorization_type,
    aws_appsync_apiKey: amplifyOutput.data.api_key,
    Auth: {
        region: amplifyOutput.auth.aws_region,
        userPoolId: amplifyOutput.auth.user_pool_id,
        userPoolWebClientId: amplifyOutput.auth.user_pool_client_id,
        identityPoolId: amplifyOutput.auth.identity_pool_id
    }
} as any); // 👈 Hack typage ici
