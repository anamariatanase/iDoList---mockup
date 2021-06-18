const cards = [
    {
        id: 'card - 1',
        content: "Card 1 content",
    },
    {
        id: 'card - 2',
        content: "Card 2 content",
    },
    {
        id: 'card - 3',
        content: "Card 3 content",
    }
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'Doing',
            cards: [
                {
                    id: 'card-4',
                    content: 'first thing'
                },
                {
                    id: 'card-5',
                    content: 'second thing'
                },
                {
                    id: 'card-6',
                    content: 'third thing'
                },
            ]
        },

    },
    listIds: ['list-1', 'list-2'],
};
export default data;

