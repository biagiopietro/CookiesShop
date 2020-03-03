module.exports = {
    theme: {
        pagination: theme => ({
            link: 'bg-white px-3 py-1 border-r border-t border-b text-black no-underline',
            linkActive: 'bg-orange-300 font-bold',
            linkSecond: 'rounded-l border-l',
            linkBeforeLast: 'rounded-r',
            linkFirst: {
                '@apply mr-3 pl-5 border': {},
                'border-top-left-radius': '999px',
            },
            linkLast: {
                '@apply ml-3 pr-5 border': {},
                'border-top-right-radius': '999px',
            },
        })
    },
    variants: {},
    plugins: [
        require('tailwindcss-plugins/pagination')
    ],
};
