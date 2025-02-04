module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'deep-navy': '#14293A',  // Give the first color a name
                'off-white': '#E9E4DE',
            },
            fontFamily: {
                'arsenal': ['Arsenal SC', 'sans-serif'],
            },
        },
        // This is the key change for setting the default font:
        DEFAULT_FONT_FAMILY: {
            'body': ['arsenal', 'sans-serif'], // Use 'arsenal' as the primary font
            'sans': ['arsenal', 'sans-serif'], // Use 'arsenal' for sans-serif elements
            'serif': ['arsenal', 'serif'],   // Use 'arsenal' for serif elements (if needed)
            'mono': ['arsenal', 'monospace'],// Use 'arsenal' for monospace elements (if needed)
        },
    },
    plugins: [],
}