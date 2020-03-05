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
        }),
        extend: {
            colors: {
                'smoke-900': 'rgba(0, 0, 0, 0.9)',
                'smoke-800': 'rgba(0, 0, 0, 0.75)',
                'smoke-600': 'rgba(0, 0, 0, 0.6)',
                'smoke': 'rgba(0, 0, 0, 0.5)',
                'smoke-400': 'rgba(0, 0, 0, 0.4)',
                'smoke-200': 'rgba(0, 0, 0, 0.25)',
                'smoke-100': 'rgba(0, 0, 0, 0.1)',
            },
        }
    },
    variants: {},
    plugins: [
        require('tailwindcss-plugins/pagination')
    ],
};
