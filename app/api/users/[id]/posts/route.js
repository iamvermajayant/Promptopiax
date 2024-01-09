import {connectoDB} from '@utils/database'
import Prompt from '@models/prompt';


export const GET = async (request, {params}) => {
    try {
        await connectoDB();

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(prompts), {status : 200});

    } catch (error) {
        return new Response("Failed to fetch all posts", {status : 500});
    }
}