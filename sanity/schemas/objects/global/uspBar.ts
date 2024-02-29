import {defineField} from 'sanity';

export default defineField({
    name: 'uspBar',
    title: 'USP Bar',
    type: 'object',
    fields: [
        defineField({
            name: 'usp1',
            title: 'USP 1',
            type: 'string'
        }),
        defineField({
            name: 'usp2',
            title: 'USP 3',
            type: 'string'
        }),
        defineField({
            name: 'usp3',
            title: 'USP 3',
            type: 'string'
        })
    ]
});